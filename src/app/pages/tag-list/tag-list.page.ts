import { Component, OnInit } from '@angular/core';
import {ModalController, AlertController, ToastController} from '@ionic/angular';
import {TagEditorPage} from '../tag-editor/tag-editor.page'
import { Apollo, QueryRef } from 'apollo-angular';
import { TagsService, Tag } from 'src/app/services/tags.service';
import { Observable } from 'apollo-link';
import { map, take } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.page.html',
  styleUrls: ['./tag-list.page.scss'],
})
export class TagListPage implements OnInit {


  constructor(private toastCtrl:ToastController, 
              private alertController:AlertController, 
              private modalController: ModalController, 
              private tagsService: TagsService,
              private globalService:GlobalService,
              private translate:TranslateService) { 
  }

  async ngOnInit() {
    this.lang = await this.translate.get('tag-list').toPromise();
  }

  async presentDeleteConfirm(tag) {
    const alert = await this.alertController.create({
      header: this.lang.deleteHeader,
      message: this.lang.deleteConfirmMessage,
      buttons: [
        {
          text: this.lang.deleteCancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.lang.deleteConfirm,
          handler: () => {
            console.log('Confirm Okay');
            this.tagsService.delete(tag.tagName).subscribe(async (result)=>{

              this.globalService.tip([this.lang.deleteMsg]);

            })
          }
        }
      ]
    });

    await alert.present();
  }

  ngAfterViewInit(){
    this.queryRef = this.tagsService.get();
    this.querySubscription = this.queryRef.valueChanges.subscribe((result) => {
      this.tags = ((result.data as any).tag.all) as Tag[];
      console.log(this.tags);
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  onSearch(event){
    this.searchBar.tagName = event.target.value;
    this.tags.forEach(tag => {
      const isVisible =  tag.tagName.toLowerCase().indexOf(this.searchBar.tagName) > -1;
      tag.hide = !isVisible;
    })
  }

  openTagEditor(data){
    if(!data)data = this.searchBar;

    this.modalController.create({
      component: TagEditorPage,
      componentProps: data,
      // cssClass: 'from-middle-modal'
    }).then(modal => {
      modal.present();
    });
  }

  onRefresh(event){
    this.queryRef.refetch().then((result) => {
      console.log('refetch complete!', result);
      event.target.complete();
    });
  }

  public tags: Tag[] = [];
  public querySubscription: Subscription;
  public queryRef:QueryRef<any>;
  public selectedTag:{
    tagName:string,
    tagColor:string,
    tagFont:string
  }

  public searchBar:{tagName:string;} = {
    tagName:""
  };

  public lang:any;
}
