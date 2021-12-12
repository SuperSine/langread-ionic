import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ColorService } from 'src/app/services/color.service';
import { WordService } from 'src/app/services/word.service';
import { ValueByMonthType, WordProfileType } from 'src/app/graphql-components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-picker',
  templateUrl: './tag-picker.page.html',
  styleUrls: ['./tag-picker.page.scss'],
})
export class TagPickerPage implements OnInit {


  constructor(private modalCtrl: ModalController,
              private colorService: ColorService,
              private wordProfileService: WordService) { }

  async ngOnInit() {
    console.log(this.word, this.markTags, this.bigTags, this.smallTags);
    this.isChanged = false;
    // this.count = this.markTags[0].count;

    this.translateParams = {
      word:this.word
    }

    //create a copy of bigTags with 'selected' attribute
    //to avoid 'RROR TypeError: Cannot add property selected, object is not extensible'

    this.bigTags = this.bigTags.map((item) =>
      Object.assign({}, item, {selected:false})
    )


  }

  close(event){
    this.markTags.splice(0, this.markTags.length);
    this.smallTags = Object.assign([], this.smallTags);

    this.bigTags.filter((value) => value.selected).forEach((tag)=>{
      this.markTags.push({tag});
      this.smallTags.push(tag);
      if(tag.tagColor)
        this.colorService.addMarkColor(tag);

    });
    this.modalCtrl.dismiss(this.isChanged);
  }

  onItemSelected(event){
    this.isChanged = true;
  }

  onSearch(event){
    var searchTagName = this.searchTagName
    this.bigTags.forEach(tag => {
      const isVisible =  tag.tagName.toLowerCase().indexOf(searchTagName) > -1;
      tag.hide = !isVisible;
    })
  }

  async segmentChanged(event){
    this.currentSegment = event.detail.value;
    if(this.currentSegment == "Word" && this.wordProfile == null){

      this.wordProfile = this.wordProfileService.profile(this.word, this.targetLanguage, this.sourceLanguage);

      // this.wordProfileService.profile(this.word, this.targetLanguage, this.sourceLanguage).then((result)=>{
      //   this.wordProfile  = result.wti.profile;
      //   this.wordTrends = result.timeline.wordByMonth.data;
      //   console.log(this.wordProfile, this.wordTrends);
  
      // });
  
    }
  }

  public bigTags:any[];
  public smallTags:any[];
  public word:string;
  public markTags:any[];
  public count:number;
  public searchTagName:any;
  public isChanged:boolean;

  public translateParams:any;

  public targetLanguage:string;
  public sourceLanguage:string;

  public wordTrends:ValueByMonthType[];
  public wordProfile: Observable<any>;

  public currentSegment:string='Picker';

  public loading:boolean=true;
}
