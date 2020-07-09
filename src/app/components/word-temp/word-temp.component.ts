import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'word-temp',
  templateUrl: './word-temp.component.html',
  styleUrls: ['./word-temp.component.scss'],
})
export class WordTempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.wordColor = this.getWordColor(this.score);
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

    var index = Math.floor(score * colorArray.length - 1);
    var color = colorArray[index];

    return this.rgbToHex(color);
  }

  rgbToHex(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
  }

  get formattedScore(){
    return (this.score * 100).toFixed(1);
  }

  public wordColor:string;

  @Input()
  public score:number;
}
