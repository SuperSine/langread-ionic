import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-tag-picker',
  templateUrl: './tag-picker.page.html',
  styleUrls: ['./tag-picker.page.scss'],
})
export class TagPickerPage implements OnInit {
  private bigTags:any[];
  private smallTags:any[];
  private word:string;
  private info:any[];
  private count:number;
  private searchTagName:any;

  constructor(private modalCtrl: ModalController,private colorService: ColorService) { }

  ngOnInit() {
    console.log(this.word, this.info, this.bigTags);
    // this.count = this.info[0].count;
  }

  close(){
    this.modalCtrl.dismiss();

    this.info.splice(0, this.info.length);
    // var count = this.count;
    this.bigTags.filter((value) => value.selected).forEach((tag)=>{
      // this.info.push({tag,count});
      this.info.push({tag});
      this.smallTags.push(tag);
      this.colorService.addMarkColor(tag);
    });

  }

  onSearch(){
    var searchTagName = this.searchTagName
    this.bigTags.forEach(tag => {
      const isVisible =  tag.tagName.toLowerCase().indexOf(searchTagName) > -1;
      tag.hide = !isVisible;
    })
  }
}
