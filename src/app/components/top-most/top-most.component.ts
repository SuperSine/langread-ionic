import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { WordProfileType } from 'src/app/graphql-components';
import { FontService } from 'src/app/services/font.service';
import { TimelineService } from 'src/app/services/timeline.service';
import { WordService } from 'src/app/services/word.service';
const WordCloud = require('wordcloud');

@Component({
  selector: 'top-most',
  templateUrl: './top-most.component.html',
  styleUrls: ['./top-most.component.scss'],
})
export class TopMostComponent implements OnInit {

  constructor(private wordProfileService:WordService, private fontService:FontService,
    private renderer: Renderer2) {

  }

  ngOnInit() {

    this.rangeChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      startWith(100)
    ).subscribe((value) => {
      this.loadTopmost(value, this.userId);
    });

  }

  ngAfterViewInit(){

  }

  loadData(){
    this.loadTopmost(100, this.userId);
  }

  async loadTopmost(top:number, userId:string){
    console.log("loading....");
    const factor = top / 1000;

    this.topList = null;

    this.wordProfileService.topMost(top, userId).then((data)=>{
      this.topList = data;

      const childElements = this.htmlCanvas.nativeElement.children;

      for (let child of childElements) {
        this.renderer.removeChild(this.htmlCanvas.nativeElement, child);
      }
      var style = getComputedStyle(document.body);

      setTimeout(()=>{
        WordCloud(this.htmlCanvas.nativeElement, { 
          list: this.topList.map((value)=>[value.word,(70 - 30*factor)*value.score]),
          classes:(word, weight, fontSize, distance, theta)=>{
            var wordProfile = this.topList.find((item) => item.word == word);
            var tagFont = wordProfile.wordInfo[0].tag.tagFont;

            return this.fontService.prefix.replace(".","") + tagFont;

          },
          color:(word, weight, fontSize, distance, theta)=>{
            var wordProfile = this.topList.find((item) => item.word == word);
            var tagColor = wordProfile.wordInfo[0].tag.tagColor;

            return tagColor;

          },
          backgroundColor:style.getPropertyValue('--ion-background-color')
        } 
        );
      }, 10); 

    })


  }

  onCanvasClick(event){
    let element = event.path[0].nodeName == "SPAN" ? event.path[0] : null;

    if(!element)return null;

    let word = element.textContent && element.textContent.toLowerCase();

    console.log(word);
  }

  onRangeChange(event){
    this.rangeChanged.next(event.detail.value);
  }


  @Input()
  userId:string;
  @ViewChild("htmlCanvas")
  public htmlCanvas: ElementRef;

  public topList:WordProfileType[];
  public rangeChanged:Subject<number> = new Subject<number>();

}
