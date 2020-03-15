import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { GlobalService } from 'src/app/services/global.service';
import { WordProfileType } from 'src/app/types';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.page.html',
  styleUrls: ['./word-info.page.scss'],
})
export class WordInfoPage implements OnInit {
  private wordProfile: WordProfileType;
  private wordColor:string;
  private isPlaying:boolean=false;

  word:string;

  constructor(private navCtrl:NavController, private wordProfileService:WordService, private globalService:GlobalService,private activatedRoute:ActivatedRoute) { 
    this.word = activatedRoute.snapshot.paramMap.get('word');

  }

  interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) { 
        factor = 0.5; 
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  };

  interpolateColors(color1, color2, steps) {
    var stepFactor = 1 / (steps - 1),
        interpolatedColorArray = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);

    for(var i = 0; i < steps; i++) {
        interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
    }

    return interpolatedColorArray;
  }

  getWordColor(score:number){
    var colorArray = [];

    colorArray = colorArray.concat(this.interpolateColors("rgb(253,255,0)", "rgb(255,171,0)", 5));
    colorArray = colorArray.concat(this.interpolateColors("rgb(255,150,0)", "rgb(255,50,0)", 5));
    colorArray = colorArray.concat(this.interpolateColors("rgb(255,0,48)", "rgb(125,0,0)", 5));

    var index = Math.floor(score * colorArray.length);
    var color = colorArray[index];

    return this.rgbToHex(color);
  }

  rgbToHex(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
  }

  goBack(event){
    this.navCtrl.back();
  }

  get formattedScore(){
    return (this.wordProfile.score * 100).toFixed(2);
  }

  get pronunciation(){
    return this.wordProfile.dictResult
                           .results[0]
                           .lexicalEntries[0]
                           .pronunciations[0];
  }

  async playAudio(pron){
    if(this.isPlaying)return;

    var audio = new Audio(this.pronunciation.audioFile);
    this.isPlaying = true;
    
    audio.onended= ()=>{
      this.isPlaying = false;

    }

    audio.load();
    
    await audio.play();

  }

  async ngOnInit() {
    try{

      this.wordProfile  = await this.wordProfileService.profile(this.word);
      this.wordColor = this.getWordColor(this.wordProfile.score);
 console.log(this.wordProfile);
      // this.wordProfile = result

    }catch(ex){
      console.log(ex);
      this.globalService.publishToast({
        duration:2000,
        color:"danger",
        message:ex.message
      })
    }
  }

}
