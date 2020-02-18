import { Component, OnInit } from '@angular/core';
import {ModalController, AlertController, ToastController} from '@ionic/angular';
import {TagEditorPage} from '../tag-editor/tag-editor.page'
import { Apollo, QueryRef } from 'apollo-angular';
import { TagsService, Tag } from 'src/app/services/tags.service';
import { Observable } from 'apollo-link';
import { map, take } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.page.html',
  styleUrls: ['./tag-list.page.scss'],
})
export class TagListPage implements OnInit {
  private tags: Tag[] = [];
  private querySubscription: Subscription;
  private queryRef:QueryRef<any>;
  private selectedTag:{
    tagName:string,
    tagColor:string,
    tagFont:string
  }

  private searchBar:{tagName:string;} = {
    tagName:""
  };

  constructor(private toastCtrl:ToastController, private alertController:AlertController, private modalController: ModalController, private tagsService: TagsService) { 
  }

  ngOnInit() {

  }
  async presentDeleteConfirm(tag) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'How you sure to delete this tag?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.tagsService.delete(tag.tagName).subscribe(async (result)=>{
              let alert = await this.toastCtrl.create({
                message: "Tag Deleted!",
                duration:2000,
                color:"green"
              });
              alert.present();
            },async(err)=>{
              let alert = await this.toastCtrl.create({
                message: err.message,
                duration:2000,
                color:"danger"
              });
              alert.present();
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
}
