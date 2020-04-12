import { Component, OnInit, ViewChild } from '@angular/core';
import { DocService, Doc } from 'src/app/services/doc.service';
import { QueryRef } from 'apollo-angular';
import { IonInfiniteScroll, IonFab, IonContent, ActionSheetController, ToastController } from '@ionic/angular';
import { runInThisContext } from 'vm';
import { Router, ActivatedRoute } from '@angular/router';
import {DocumentType} from '../../graphql-components';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.page.html',
  styleUrls: ['./doc-list.page.scss'],
})
export class DocListPage implements OnInit {
  @ViewChild(IonInfiniteScroll,{static:false}) 
  infiniteScroll: IonInfiniteScroll;

  @ViewChild(IonContent, {static:false})
  ionContent: IonContent;
  
  private urlReg:RegExp = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;

  private iconName:string = "add";
  private lastId:string;
  private queryRef:QueryRef<any>;
  private docList:DocumentType[];
  private isScrollButtonHidden:boolean = true;
  private userContent:string = '';
  private defaultWord:string = '';

  constructor(private toastCtrl:ToastController, 
              private docService:DocService,
              private actionSheetCtrl: ActionSheetController, 
              private router: Router,
              private activatedRoute:ActivatedRoute) { 
                this.defaultWord = activatedRoute.snapshot.paramMap.get('defaultWord');
                console.log(this.defaultWord)
              }

  list(pageSize, lastId, keywords=''){
    if(!keywords)lastId='';
    
    this.docService.list(pageSize, lastId, keywords).valueChanges.subscribe((result) => {
      console.log('doc list:', result);
      
      this.docList = ((result.data) as any).document.list;

      console.log(this.docList);
      if(this.docList.length > 0)this.lastId = this.docList.slice(-1)[0].id;
    }, async (err)=>{
      let alert = await this.toastCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();

    });
  }

  onSearch(event){
    var keywords = event.target.value || this.defaultWord;

    this.lastId = '';
    this.docList = [];

    this.list('10', this.lastId, keywords);

  }

  ngOnInit() {
    this.list('10',this.lastId, this.defaultWord);

  }

  onDocClick(item){
    console.log(item);

  }

  onRefresh(event){
    this.docService.list('10').refetch().then((result) => {
      console.log('refetch complete!', result);
      event.target.complete();
    }, async (err)=>{
      let alert = await this.toastCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();

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
    console.log(event.detail.value);
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
      let toast = await this.toastCtrl.create({
        message: 'Document Deleted!',
        duration:2000,
        color:"green"
      });
      toast.present();
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
    this.docService.list('10', this.lastId).valueChanges.subscribe((result) => {
      var newList = ((result.data) as any).document.list;
      this.docList = this.docList.concat(newList);
      console.log('merged docList',this.docList);
      this.lastId = newList.slice(-1)[0].id;

      this.infiniteScroll.complete();

      console.log('the last id is:', this.lastId);
    });
  }

  async presentActionSheet(item:Doc){
    console.log('item clicked', item);
    const actionSheet = await this.actionSheetCtrl.create({
      buttons:[{
        text:'Delete',
        role:'destructive',
        icon:'trash',
        handler:()=>{
          this.deleteItem(item);
          console.log('Delete clicked!');
        }
      },
      {
        text:'Cancel',
        icon:'close',
        role:'cancel',
        handler:()=>{
          console.log('Cancel clicked!');
        }
      }]
    });

    await actionSheet.present();
  }
}
