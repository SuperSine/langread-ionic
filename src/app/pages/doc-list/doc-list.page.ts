import {QueryRef} from 'apollo-angular';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DocService, Doc } from 'src/app/services/doc.service';

import { IonInfiniteScroll, IonFab, IonContent, ActionSheetController, ToastController, PopoverController, AlertController } from '@ionic/angular';
import { runInThisContext } from 'vm';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {DocumentType} from '../../graphql-components';
import {environment} from 'src/environments/environment';
import { GlobalService } from 'src/app/services/global.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector:'popover-menu',
  templateUrl:'./popover-menu/popover-menu.component.html',
  styleUrls:['./popover-menu/popover-menu.component.scss']
})
export class PopOverMenuComponent implements OnInit{
  constructor(private alertController: AlertController,
             private translateService: TranslateService){

  }

  @Input()
  public dismiss = (event) =>{}

  async ngOnInit(){
    this.lang = await this.translateService.get("doc-list").toPromise();
  }

  async goToEditor(){
    this.dismiss(null);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.lang.inputUrl,
      inputs: [
        {
          name: 'url',
          type: 'text',
          placeholder: 'https://...'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (event) => {
            this.dismiss(event);
          }
        }, {
          text: 'Ok',
          handler: (event) => {
            this.dismiss(event);
          }
        }
      ]
    });

    await alert.present();
  }

  private lang:any;
}



@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.page.html',
  styleUrls: ['./doc-list.page.scss'],
})
export class DocListPage implements OnInit {


  constructor(private toastCtrl:ToastController, 
              private docService:DocService,
              private actionSheetCtrl: ActionSheetController, 
              private router: Router,
              private activatedRoute:ActivatedRoute,
              public globalService:GlobalService,
              private translate:TranslateService,
              private popoverCtrl:PopoverController) { 
                this.defaultWord = activatedRoute.snapshot.paramMap.get('defaultWord') || '';
              }

  async popoverActions(event:any){
    const popover = await this.popoverCtrl.create({
      component:PopOverMenuComponent,
      event: event,
      translucent: true,
      cssClass:"popover",
      componentProps:{
        dismiss:async (event) => {

          if(event){
            this.router.navigate(["/doc-editor",{docId:event.url}]);
          }

          await popover.dismiss();
        }
      }
    });

    return await popover.present();
  }

  list(pageSize, lastId, keywords=''){
    if(!keywords)lastId='';
    
    this.docService.list(pageSize, lastId, keywords).toPromise().then((response) => {
      console.log(response);
      var result = ((response.data) as any).document.list;
      this.docList = result.data;

      if(this.docList.length > 0){
        this.lastId = result.lastId;
      }
    });
  }

  onSearch(event){
    var keywords = event.target.value || this.defaultWord;

    this.lastId = '';
    this.docList = [];

    this.list(environment.pageSize, this.lastId, keywords);

  }

  async ngOnInit() {
    this.list(environment.pageSize,this.lastId, this.defaultWord);

    this.lang = await this.translate.get("doc-list").toPromise();
  }

  onDocClick(item){
    console.log(item);

  }

  onRefresh(event){
    this.docService.list(environment.pageSize).toPromise().then(({data:{document:{list:{data}}}}:any) => {
      this.docList = data;
      event.target.complete();
    }, async (err)=>{
      event.target.complete();
    });
  }

  onScroll(event){
    if(event.detail.scrollTop > 200){
      this.isScrollButtonHidden = false;
    }else
    this.isScrollButtonHidden = true;
  }

  onChange(event){
    if(this.urlReg.test(event.detail.value)){
      this.iconName = "cloud-download";
    }else{
      this.iconName = "add";
    }
  }

  deleteItem(item){
    this.docList = this.docList.filter((doc)=>{
      if(doc.docId != item.docId)return item;
    });

    this.docService.delete(item.docId).subscribe(async ({data:{doc}}:any) => {
      this.globalService.tip(this.lang.deleted);
    });

  }

  scrollToTop(){
    this.ionContent.scrollToTop(500);
  }

  firstNwords(content:string, wordLength:number=20){
    return content.replace(/(<([^>]+)>|&(nbsp|amp|quot|lt|gt))/g, " ")
                  .split(" ").splice(0,wordLength).join(" ");
  }

  loadData(event){

    this.docService.list(environment.pageSize, this.lastId).toPromise().then((response) => {
      console.log(response);
      var result = ((response.data) as any).document.list;
      var newList = result.data;
      
      if(newList.length >= 1){        
        this.docList = this.docList.concat(newList);
        this.lastId = result.lastId;
      }
      
      this.infiniteScroll.complete();

    });
  }

  async presentActionSheet(item:Doc){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons:[{
        text:this.lang.delete,
        role:'destructive',
        icon:'trash',
        handler:()=>{
          this.deleteItem(item);
        }
      },
      {
        text:this.lang.cancel,
        icon:'close',
        role:'cancel',
        handler:()=>{
        }
      }]
    });

    await actionSheet.present();
  }

  @ViewChild(IonInfiniteScroll) 
  public infiniteScroll: IonInfiniteScroll;

  @ViewChild(IonContent)
  public ionContent: IonContent;
  
  public urlReg:RegExp = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;

  public iconName:string = "add";
  public lastId:string;
  public queryRef:QueryRef<any>;
  public docList:DocumentType[] = null;
  public isScrollButtonHidden:boolean = true;
  public userContent:string = '';
  public defaultWord:string = '';

  public lang:any;
}
