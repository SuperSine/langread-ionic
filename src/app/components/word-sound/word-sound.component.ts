import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'word-sound',
  templateUrl: './word-sound.component.html',
  styleUrls: ['./word-sound.component.scss'],
})
export class WordSoundComponent implements OnInit {

  constructor() { }

  async playAudio(pron){
    if(this.isPlaying)return;

    var audio = new Audio(this.soundUrl);
    this.isPlaying = true;
    
    audio.onended= ()=>{
      this.isPlaying = false;

    }

    audio.load();
    
    await audio.play();

  }

  ngOnInit() {
    this.soundUrl = `${environment.wordSoundUrl}/${this.word}?lang=${this.lang}`;
  }

  @Input()
  public lang:string;

  public soundUrl:string;
  public isPlaying:boolean=false;

  @Input()
  public word:string;

}
