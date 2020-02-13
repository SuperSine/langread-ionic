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

  constructor(private modalCtrl: ModalController) {
    this.tagInfo = {};
   }

  ngOnInit() {
    console.log('doc info:', this.doc, this.taggedWordInfo);
    Object.keys(this.taggedWordInfo).forEach((word)=>{
      this.taggedWordInfo[word].forEach((tag) => {
        if(typeof this.tagInfo[tag] != 'number')this.tagInfo[tag]=0;
        this.tagInfo[tag]+=1;
      })
    });

    console.log('tagInfo is:', this.tagInfo);
  }

}
