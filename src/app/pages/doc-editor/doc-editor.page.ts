import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { DocService, Doc } from 'src/app/services/doc.service';
import { stringify } from 'querystring';
import { QuillViewHTMLComponent, QuillEditorComponent } from 'ngx-quill';
import  * as stemmer   from 'stemmer';
import { ColorService } from 'src/app/services/color.service';
import { element } from 'protractor';
import { ModalController, LoadingController, ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { TagPickerPage } from '../tag-picker/tag-picker.page';
import Mercury from "@postlight/mercury-parser";
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DocInfoPage } from '../doc-info/doc-info.page';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Subject } from 'rxjs';
import { Observable } from 'apollo-link';
import {CanDeactivateComponent} from '../../guards/quit-doc-editor.guard'

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
  private isToolbarHidden:boolean=false;
  private mode: DocMode;
  private showTags:boolean = false;
  private docId:string;
  private wti:any;
  private stemmedWti:any;
  private allTags:any[] = [];
  private htmlRegEx:RegExp = /(<([^>]+)>|&(nbsp|amp|quot|lt|gt))/g;
  private contentRegEx:RegExp = /(?<=>)[\w\s]+(?=<)/g;
  private nonCharRegEx:RegExp = /--{1,}|[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]/g;
  private getWordRegEx:RegExp = /[^\s\-]*/g;
  private getWordRegEx1:RegExp = /[\w\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*/g;
  private cleanWordRegEx:RegExp = /[a-zA-Z]+/g;
  private wordTagInfo:any;
  private doc: Doc;
  private isDocChanged:boolean;
  private isGoingBack:boolean;
  // private tags: any[];

  private form: FormGroup;

  @ViewChild("innerHtml",{static:true})
  private innerHtml: ElementRef;

  @ViewChild("htmlEditor", {static:false})
  private htmlEditor: QuillEditorComponent;

  constructor(private toastCtrl:ToastController, private alertCtrl:AlertController, private actionSheetCtrl: ActionSheetController, private loadingCtrl:LoadingController,  private fb:FormBuilder, private globalService:GlobalService, private modalCtrl:ModalController, private activatedRoute:ActivatedRoute, private docService:DocService, private colorService:ColorService) {
    this.docId = activatedRoute.snapshot.paramMap.get('docId');
    this.wti = {};
    this.stemmedWti = {};

    this.doc = {} as Doc;
    this.isGoingBack = false;

    this.form = this.fb.group({
      html: new FormControl(this.doc.content)
    });
    

  }

  goBack(e){

  }

  canDeactivate():Promise<boolean> | boolean{
    let that = this;
    return new Promise(async resolve => {
      if(!that.isDocChanged)return resolve(true);

      const alert = await this.alertCtrl.create({
        header: 'Confirm!',
        message: 'Document has been changed, do you wanna save??',
        buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                  resolve(true);
                  console.log('Confirm Cancel: blah');
              }
            }, {
                text: 'Yes',
                handler: () => {
                    this.saveDoc();
                    resolve(true);
                    console.log('Confirm Okay');
                }
            }
        ]
    });
      await alert.present();
    });
  }

  get tags():any[]{
    if(!this.doc.wordTagInfo)return;

    return this.doc.wordTagInfo.tags;
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
    console.log("action sheet opened!");
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Save',
        icon: 'save',
        handler: () => {
          console.log('Share clicked');
        }
      },  {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  onReaderClick(event){
    let element = event.path[0].nodeName == "SPAN" ? event.path[0] : null;

    if(!element)return null;

    let word = element.textContent && element.textContent.toLowerCase();

    if(word && !this.nonCharRegEx.test(word)){
      this.openTagPicker(word, this.wti[stemmer(word)], this.allTags, this.tags);
    }
  }

  async saveDoc(){
    const loading = await this.loadingCtrl.create({
      message: "Please wait..."
    });

    await loading.present();

    this.docService.save(this.doc.title, this.doc.content, this.TaggedWordInfo, this.doc.id, this.docId).subscribe(async ({data})=>{
      let alert = await this.toastCtrl.create({
        message: "Doc Added!",
        duration:2000,
        color:"green"
      });
      alert.present();
      loading.dismiss();

    },async (err)=>{
      let alert = await this.toastCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();
      loading.dismiss();
    })
    
    
    
  }

  async getDoc(data:string='', taggedWord:any=null){
    if(!data && !this.docId)return;

    const loading = await this.loadingCtrl.create({
      message: "Please wait..."
    });

    await loading.present();


    if(!data)data = this.docId;

    this.docService.get(data, taggedWord).subscribe(async ({data:{document:{giveItToMe} }}:any) => {

      var doc  = {...giveItToMe.document};

      console.log('spread doc is:', doc);

      this.doc.content = giveItToMe.document.content;
      this.doc.wordsCount = giveItToMe.document.wordsCount;
      this.doc.createDate = giveItToMe.document.createDate;
      this.doc.updateDate = giveItToMe.document.updateDate;
      this.doc.id = giveItToMe.document.id;
      this.doc.title = giveItToMe.document.title;
      this.doc.docId = giveItToMe.document.docId;
      
      this.doc.wordTagInfo = giveItToMe.smallWordTagInfo;
      // this.tags = giveItToMe.smallWordTagInfo.tags;
      
      giveItToMe.smallWordTagInfo.wti.forEach((element) => {
        var word = stemmer(element.word);

        if(!(this.wti[word] instanceof Array))this.wti[word] = [];

        this.wti[word] = this.wti[word].concat(element.wordInfos)
      });

      console.log('this is wti', this.wti);

      if(giveItToMe.bigWordTagInfo)
        this.allTags = giveItToMe.bigWordTagInfo.tags;

      this.doc.wordTagInfo.tags.forEach((tag)=>{
        if(!tag.tagColor)return;
        this.markWordByTag(tag);
      });
      
      this.form.get('html').patchValue(this.doc.content.replace(/(?:\r\n|\r|\n)/g, '<br>'));

      this.onInnerHtmlClick(null);

      await loading.dismiss();

      
      this.form.valueChanges.subscribe((value)=>{
        console.log('form value is changed!');
        this.isDocChanged = true;
      })
    },async (err) => {
      let alert = await this.toastCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();

      loading.dismiss();
    })
  }

  getEachText(element){
    return element.innerText;
  }

  createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = `<span>${htmlString.trim()}</span>`;
  
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

    console.log('filted wti result:', result);

    result.forEach(word => {
      var stemmerWord = stemmer(word);

      this.colorService.addMarkColor(tag);
    });

  }

  openDocInfo(){
    console.log('data pass to doc-info:', this.doc, this.TaggedWordInfo);

    this.modalCtrl.create({
      component: DocInfoPage,
      componentProps: {
        doc:this.doc,
        taggedWordInfo:this.TaggedWordInfo
      },
      cssClass: 'from-bottom-modal'
    }).then(modal => {
      modal.onDidDismiss().then((data)=>{
        // console.log(this.doc);
      })
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
        smallTags
      },
      // cssClass: 'from-middle-modal'
    });

    modal.onDidDismiss().then(({data}) => {
      console.log('tag picking is changed:', data);
      if(!this.isDocChanged)
        this.isDocChanged = data;
    })

    return await modal.present();
  }

  onChooseTagClick(tag:any){
    document.querySelectorAll("span[app-pick]").forEach((element)=>{
      element.removeAttribute("tag-id");
    });

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
  }


  onInnerHtmlClick(event){

    var that = this;
    var div = document.createElement("div");
    div.innerHTML = `<div>${this.doc.content}</div>`;
    // div.innerHTML = this.htmlEditor.;

    console.log('dealing with:',div.querySelectorAll("*") );
    Array.from(div.querySelectorAll("*"), (el:any) => {
      Array.from(el.childNodes, (ch:any)=>{
        if(ch.nodeType == 3 && ch.data){
          var newHtml = ch.data.replace(that.getWordRegEx1, (word)=>{
            var stemmedWord = stemmer(word);

            if(!(that.stemmedWti[stemmedWord] instanceof Array))
              that.stemmedWti[stemmedWord] = [];

            if(that.stemmedWti[stemmedWord].indexOf(word.toLowerCase()) < 0)
              that.stemmedWti[stemmedWord].push(word);
            
            return `<span class="ion-activatable" app-pick="${stemmedWord}">${word}</span>`
          })

          ch.parentNode.replaceChild(this.createElementFromHTML(newHtml), ch);

        }
      })
    });

   this.innerHtml.nativeElement.innerHTML = `<p>${div.innerHTML}</p>`;
  }


  getHtml(){

    
  }

  async ngOnInit() {
    this.mode = DocMode.Edit
    await this.getDoc();
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
    console.log(event);

    if(this.mode == DocMode.Edit){
      this.mode = DocMode.Read;

    }else{
      this.mode = DocMode.Edit;
      // this.onInnerHtmlClick(event);
      console.log('the content of doc is changed to:', this.doc.content);
      this.getDoc(this.form.get('html').value, this.TaggedWordInfo);


    }
  }
}
