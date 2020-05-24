import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.page.html',
  styleUrls: ['./doc-info.page.scss'],
})
export class DocInfoPage implements OnInit {



  constructor(private modalCtrl: ModalController,
              private globalService: GlobalService) {
    this.tagInfo = {};

    // console.log("offsetNameShort",DateTime.local().toFormat('ff'));

  
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

    Object.keys(this.taggedWordInfo).forEach((word)=>{
      this.taggedWordInfo[word].forEach((tag) => {
        if(typeof this.tagInfo[tag] != 'number')this.tagInfo[tag]=0;
        this.tagInfo[tag]+=1;
      })
    });

    this.doc.createDate = this.globalService.toLocalDate(this.doc.createDate);
    this.doc.updateDate = this.globalService.toLocalDate(this.doc.updateDate);

  }

  onTouch(event){
    console.log('word-tag-info is clicked', event);
  }

  public doc:{title:string, url:string, createDate:string, updateDate:string, wordsCount:number};
  public taggedWordInfo:any;
  public tagInfo:any;
  public allTags:any[];
}
