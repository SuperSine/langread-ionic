import { Component, OnInit, ViewChild } from '@angular/core';
import { DocService, Doc } from 'src/app/services/doc.service';
import { QueryRef } from 'apollo-angular';
import { IonInfiniteScroll, IonFab, IonContent, ActionSheetController } from '@ionic/angular';
import { runInThisContext } from 'vm';
import { Router } from '@angular/router';

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
  private docList:Doc[];
  private isScrollButtonHidden:boolean = true;

  constructor(private docService:DocService,private actionSheetCtrl: ActionSheetController, private router: Router) { }

  ngOnInit() {
    this.docService.list('10', this.lastId).valueChanges.subscribe((result) => {
      this.docList = ((result.data) as any).document.list;
      console.log(this.docList);
      this.lastId = this.docList.slice(-1)[0].id;
    });
  }

  onDocClick(item){
    console.log(item);

  }

  onRefresh(event){
    this.docService.list('10').refetch().then((result) => {
      console.log('refetch complete!', result);
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

  scrollToTop(){
    this.ionContent.scrollToTop(500);
  }

  firstNwords(content:string, wordLength:number=20){
    return content.split(" ").splice(0,wordLength).join(" ");
  }

  loadData(event){
    this.docService.list('10', this.lastId).valueChanges.subscribe((result) => {
      var newList = ((result.data) as any).document.list;
      this.docList = this.docList.concat(newList);
      console.log('merged docList',this.docList);
      this.lastId = newList.slice(-1)[0].id;

      this.infiniteScroll.complete();
    });
  }

  async presentActionSheet(item){
    console.log('item clicked', item);
    const actionSheet = await this.actionSheetCtrl.create({
      buttons:[{
        text:'Delete',
        role:'destructive',
        icon:'trash',
        handler:()=>{
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
