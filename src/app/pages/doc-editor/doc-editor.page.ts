import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef,EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { DocService,Doc } from 'src/app/services/doc.service';
import { stringify } from 'querystring';
import { QuillViewHTMLComponent, QuillEditorComponent } from 'ngx-quill';
import  * as stemmer   from 'stemmer';
import { ColorService } from 'src/app/services/color.service';
import { element } from 'protractor';
import { ModalController, LoadingController, ActionSheetController, AlertController, ToastController, PopoverController } from '@ionic/angular';
import { TagPickerPage } from '../tag-picker/tag-picker.page';
import { DocEditorSaveComponent } from './doc-editor-save/doc-editor-save.component';
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, FormControl, FormBuilder, NgModel } from '@angular/forms';
import { DocInfoPage } from '../doc-info/doc-info.page';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Subject, Observable } from 'rxjs';
import {CanDeactivateComponent} from '../../guards/quit-doc-editor.guard'
import { TranslateService } from '@ngx-translate/core';
import { ApolloQueryResult } from 'apollo-client';
import { UserType,DocumentType, WordTagDocumentCleanType, GroupType, MomentType } from 'src/app/graphql-components';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { MomentService } from 'src/app/services/moment.service';

export enum DocMode{
  Read,
  Edit
}

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.page.html',
  styleUrls: ['./doc-editor.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocEditorPage implements OnInit, CanDeactivateComponent {


  constructor(private toastCtrl:ToastController, 
             private alertCtrl:AlertController, 
             private actionSheetCtrl: ActionSheetController, 
             private loadingCtrl:LoadingController,  
             private fb:FormBuilder, 
             private globalService:GlobalService, 
             private modalCtrl:ModalController, 
             private activatedRoute:ActivatedRoute, 
             private docService:DocService, 
             private colorService:ColorService,
             private translate:TranslateService,
             private popoverCtrl:PopoverController,
             private authService:AuthService,
             private groupService:GroupService,
             private momentService:MomentService
             ) {
    this.docId = activatedRoute.snapshot.paramMap.get('docId');

    this.wti = {};
    this.stemmedWti = {};

    this.wordTagDocument = {isCreator:true, status:0, userId:''};
    this.doc = {content:'',docId:'',id:'',status:0,title:'',wordsCount:0};
    
    this.isGoingBack = false;

    this.form = this.fb.group({
      html: new FormControl(this.doc.content)
    });
  }

  goBack(e){

  }

  async like(event){
    const moment = await this.moment.toPromise();

    this.momentService.like(moment.id).toPromise().then(({data:{moment:{vote}}}:any) => {
      console.log(vote);
      let value = 0;
      if(vote.upvoteCount == 1){
        value = 1;
      }else if(moment.upvoteCount > 0){
        value = -1;
      }else
        value = 0;

      moment.upvoteCount += value;
    })
  }

  async fork(){

  }


  canDeactivate():Promise<boolean> | boolean{
    let that = this;
    return new Promise(async resolve => {
      if(!that.isDocChanged)return resolve(true);

      const alert = await this.alertCtrl.create({
        header: this.lang.backHeader,
        message: this.lang.backMessage,
        buttons: [
            {
              text: this.lang.backCancel,
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                  resolve(false);
              }
            },
            {
              text: this.lang.backNo,
              handler: () => {
                  resolve(true);
              }
            },
            {
              text: this.lang.backYes,
              handler: () => {
                  this.saveDoc();
                  resolve(true);
              }
            }
        ]
    });
      await alert.present();
    });
  }

  get tags():any[]{
    if(!this.wordTagDocument.smallWordTagInfo)return;

    return this.wordTagDocument.smallWordTagInfo.tags;
  }

  /**
   * return {'word':['tag1','tag'2],...}
   */
  get TaggedWordInfo():any{
    if(!this.doc.content)return;

    let strippedHtml = this.doc.content.replace(this.htmlRegEx, ' ');
    let wordsList = strippedHtml.replace(this.nonCharRegEx, ' ').split(' ');

    let data = {};

    wordsList.forEach((word) => {
      if(word.length <= 1)return;
      word = word.toLowerCase();
      var stemmed = stemmer(word);
      
      if(!(this.wti[stemmed] instanceof Array))return;

      this.wti[stemmed].forEach(wordinfo => {
        if(!(data[word] instanceof Array))data[word] = [];

        if(data[word].indexOf(wordinfo.tag.tagName) < 0)
          data[word].push(wordinfo.tag.tagName);
      });
    })

    return data;

  }

  async openActSheet(event){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: this.lang.actionSave,
        icon: 'save',
        handler: () => {

        }
      },  {
        text: this.lang.actionCancel,
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });

    await actionSheet.present();
  }

  async onReaderClick(event){
    this.showTags = false;

    let element = event.target.tagName == "SPAN" ? event.target : null;

    if(!element)return null;

    let word = element.textContent && element.textContent.toLowerCase();

    if(word && !this.nonCharRegEx.test(word)){
      this.openTagPicker(word, this.wti[stemmer(word)], this.allTags, this.tags);
    }
  }

  async saveDoc(groupId:string=''){
    const loading = await this.loadingCtrl.create({
      message: this.lang.waitMsg
    });

    await loading.present();

    this.doc.groupId = groupId;

    this.docService.save(this.doc, this.TaggedWordInfo).subscribe(async ({data})=>{
      let alert = await this.toastCtrl.create({
        message: this.lang.successMsg,
        duration:2000,
        color:"green"
      });
      alert.present();
      loading.dismiss();

    },async (err)=>{
      loading.dismiss();
    })
  }

  async forkDoc(docId:string, groupId:string='', wordTagInfo:any={}){
    this.doc.groupId = groupId;

    this.docService.fork(docId, groupId, wordTagInfo).subscribe(async ({data})=>{
      let alert = await this.toastCtrl.create({
        message: this.lang.successMsg,
        duration:2000,
        color:"green"
      });
      alert.present();


    },async (err)=>{

    })
  }

  async getDoc(data:string='', taggedWord:any=null){
    if(!data && !this.docId)return;

    const loading = await this.loadingCtrl.create({
      message: this.lang.waitMsg
    });

    await loading.present();


    if(!data)data = this.docId;

    this.docService.get(data).toPromise().then(async ({data:{document:{giveItToMe} }}:any) => {
      this.wordTagDocument = giveItToMe;
      console.log('the wordtagdocument is', this.wordTagDocument);
      var doc  = {...giveItToMe.document};


      //user editing the content, just request content updating
      if(data != this.docId){
        this.doc.content = giveItToMe.document.content;
        this.doc.wordsCount = giveItToMe.document.wordsCount;
        this.doc.updateDate = giveItToMe.document.updateDate;
        this.doc.createDate = giveItToMe.document.createDate;
      }else{
        this.doc.content = giveItToMe.document.content;
        this.doc.wordsCount = giveItToMe.document.wordsCount;
        this.doc.updateDate = giveItToMe.document.updateDate;

        this.doc.createDate = giveItToMe.document.createDate;
        this.doc.id = giveItToMe.document.id;
        this.doc.title = giveItToMe.document.title;
        this.doc.docId = giveItToMe.document.docId;
        this.doc.url = giveItToMe.document.url;
      }

      await loading.dismiss();

      // this.doc.wordTagInfo = giveItToMe.smallWordTagInfo;
      
      // this.tags = giveItToMe.smallWordTagInfo.tags;
      
      //put unsaved taginfos together
      giveItToMe.smallWordTagInfo.wti.forEach((element) => {
        var word = stemmer(element.word);

        if(!(this.wti[word] instanceof Array))this.wti[word] = [];

        this.wti[word] = this.wti[word].concat(element.wordInfos)
      });
      
      if(giveItToMe.bigWordTagInfo)
        this.allTags = giveItToMe.bigWordTagInfo.tags;

      this.wordTagDocument.smallWordTagInfo.tags.forEach((tag)=>{
        if(!tag.tagColor)return;
        this.markWordByTag(tag);
      });
      
      this.form.get('html').patchValue(this.doc.content.replace(/(?:\r\n|\r|\n)/g, '<br>'));

      this.updateWordTagInfo(null);

      this.moment = this.momentService.getByDocId(this.doc.docId);
      
      this.form.valueChanges.subscribe((value)=>{
        this.isDocChanged = true;
      })
    },async (err) => {
      loading.dismiss();
    })
  }

  getEachText(element){
    return element.innerText;
  }

  createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = `<span>${htmlString}</span>`;
    // div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
  }

  markWordByTag(tag:any){
    var result = Object.keys(this.wti).filter((word,index,array) => {
      if(!this.wti[word] || !this.wti[word])return;
      var subResult = this.wti[word].find((value, index, array) => {
        return value.tag.tagName === tag.tagName;
      });

      if(subResult)
        return this.wti[word];
    });

    result.forEach(word => {
      this.colorService.addMarkColor(tag);
    });

  }

  openDocSave(event){
    this.modalCtrl.create({
      component:DocEditorSaveComponent,
      componentProps:{
        userGroupList:this.userGroupList,
        onSave:this.docSaveEventEmiter
      },
      cssClass:"save-modal"
    }).then((modal => {
      modal.present();
    }))
  }

  openDocFork(event){
    this.modalCtrl.create({
      component:DocEditorSaveComponent,
      componentProps:{
        userGroupList:this.userGroupList,
        onFork:this.docForkEventEmiter
      },
      cssClass:"fork-modal"
    }).then((modal => {
      modal.present();
    }))
  }

  openDocInfo(event){
    this.modalCtrl.create({
      component: DocInfoPage,
      componentProps: {
        doc:this.doc,
        taggedWordInfo:this.TaggedWordInfo,
        allTags:this.allTags
      },
      cssClass: 'from-bottom-modal'
    }).then(modal => {
      modal.present();
    });
  }

  async openTagPicker(word, info, bigTags,smallTags){
    const modal = await this.modalCtrl.create({
      component: TagPickerPage,
      componentProps: {
        word,
        info,
        bigTags,
        smallTags,
        targetLanguage: this.userObj.targetLanguage,
        sourceLanguage: this.userObj.sourceLanguage
      },
      cssClass: 'from-bottom-modal'
    });

    modal.onDidDismiss().then(({data}) => {
      if(!this.isDocChanged)
        this.isDocChanged = data;
    })

    return await modal.present();
  }

  async onChooseTagClick(tag:any){
    document.querySelectorAll("span[app-pick]").forEach((element)=>{
      element.removeAttribute("tag-id");
    });

    await new Promise(()=>{
      var result = Object.keys(this.wti).filter((word,index,array) => {
        if(!this.wti[word])return false;
        var subResult = this.wti[word].find((value, index, array) => {
          return value.tag.tagName === tag.tagName;
        });
  
        if(subResult)
          return this.wti[word];
      });
  
      result.forEach(word => {
        document.querySelectorAll(`span[app-pick=${word}]`).forEach((element)=>{
          element.setAttribute('tag-id', tag.tagName);
        })
      });
    })


  }


  updateWordTagInfo(event){

    var that = this;
    var div = document.createElement("div");
    div.innerHTML = `<div>${this.doc.content}</div>`;

    Array.from(div.querySelectorAll("*"), (el:any) => {
      Array.from(el.childNodes, (ch:any)=>{
        if((ch.nodeType == 3 && ch.data) || (ch.nodeType == 1 && ch.nodeName == "A")){
          var data = "";

          if(ch.nodeType == 1){
            data = ch.textContent;
          }else
            data = ch.data;

          var newHtml = data.replace(that.getWordRegEx1, (word)=>{
            if(!word)return word;

            var stemmedWord = stemmer(word);

            if(!(that.stemmedWti[stemmedWord] instanceof Array))
              that.stemmedWti[stemmedWord] = [];

            if(that.stemmedWti[stemmedWord].indexOf(word.toLowerCase()) < 0)
              that.stemmedWti[stemmedWord].push(word);
            
            return `<span app-pick="${stemmedWord}">${word}</span>`
          })

          ch.parentNode.replaceChild(this.createElementFromHTML(newHtml), ch);
        }
      })
    });

  //  this.innerHtml.nativeElement.innerHTML = `<p>${div.innerHTML}</p>`;
    this.displayContent = div.innerHTML;

  }

  async ngOnInit() {
    this.lang = await this.translate.get("doc-editor").toPromise();

    this.userObj = await this.authService.getUserObj();
    
    this.doc.title = this.lang.untitled;

    await this.getDoc();


    if(this.docId == null){
      this.mode = DocMode.Read;
    }else{
      this.mode = DocMode.Edit;
    }

    this.userGroupList = this.groupService.getUserGroups(0, 100);

    this.docSaveEventEmiter = new EventEmitter();
    this.docSaveEventEmiter.subscribe(groupId => {
      console.log(groupId);

      this.saveDoc(groupId);

    })

    this.docForkEventEmiter = new EventEmitter();
    this.docForkEventEmiter.subscribe(({groupId, copyTags}) => {
      console.log(groupId, copyTags);

      var wordTagInfo = this.TaggedWordInfo;

      if(copyTags)
        this.forkDoc(this.doc.docId, groupId, wordTagInfo);
      else
        this.forkDoc(this.doc.docId, groupId);

    })


  }

  get DocMode(){
    return DocMode;
  }

  onScroll(event){
    if(event.detail.scrollTop > 190){
      this.isToolbarHidden = true;
    }else
      this.isToolbarHidden = false;
  }

  onTagClick(event){
    this.showTags = !this.showTags;
  }

  onModeChange(event){
    console.log('current mode is', this.mode);

    if(this.mode == DocMode.Edit){
      this.mode = DocMode.Read;

    }else{
      this.mode = DocMode.Edit;
      // this.onInnerHtmlClick(event);
      this.getDoc(this.form.get('html').value, this.TaggedWordInfo);


    }
  }

  public userObj:UserType;

  public displayContent:string = "";

  public selectedValue:any;
  public isToolbarHidden:boolean=false;
  public mode: DocMode;
  public showTags:boolean = false;
  public docId:string;
  public wti:any;
  public stemmedWti:any;
  public allTags:any[] = [];
  public htmlRegEx:RegExp = /(<([^>]+)>|&(nbsp|amp|quot|lt|gt))/g;
  public nonCharRegEx:RegExp = /--{1,}|[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]/g;
  public getWordRegEx1:RegExp = /[\w\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*/g;
  public wordTagInfo:any;
  public doc: DocumentType;
  public wordTagDocument: WordTagDocumentCleanType;
  public isDocChanged:boolean;
  public isGoingBack:boolean;
  public userGroupList:Observable<GroupType[]>;
  public docSaveEventEmiter:EventEmitter<string>;
  public docForkEventEmiter:EventEmitter<string>;
  public moment:Observable<MomentType>;
  // public tags: any[];

  public form: FormGroup;

  // @ViewChild("innerHtml",{static:true})
  // public innerHtml: ElementRef;

  @ViewChild("innerHtml",{static:false})
  public innerHtml: QuillViewHTMLComponent;

  @ViewChild("htmlEditor",{static:false})
  public htmlEditor: QuillEditorComponent;

  public lang:any;

  private docQueryRef:Observable<ApolloQueryResult<unknown>>;
}
