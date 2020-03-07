import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.page.html',
  styleUrls: ['./doc-info.page.scss'],
})
export class DocInfoPage implements OnInit {

  private doc:{title:string, url:string, createDate:string, updateDate:string, wordsCount:number};
  private taggedWordInfo:any;
  private tagInfo:any;
  private allTags:any[];

  constructor(private modalCtrl: ModalController) {
    this.tagInfo = {};
   }

  getTagColor(tagName:string){
    var tag = this.allTags.find((tag)=>{
      return tag.tagName == tagName;
    });

    return tag ? tag.tagColor : '';
  }

  getTag(tagName:string){
    return this.allTags.find((tag)=>{return tag.tagName == tagName});
  }

  ngOnInit() {
    console.log('doc info:', this.doc, this.taggedWordInfo, this.tagInfo);
    Object.keys(this.taggedWordInfo).forEach((word)=>{
      this.taggedWordInfo[word].forEach((tag) => {
        if(typeof this.tagInfo[tag] != 'number')this.tagInfo[tag]=0;
        this.tagInfo[tag]+=1;
      })
    });

    console.log('tagInfo is:', this.tagInfo);
  }

  onTouch(event){
    console.log('word-tag-info is clicked', event);
  }

}
