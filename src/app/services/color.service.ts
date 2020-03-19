import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common'

import ColorList from '../../assets/colors.json';

import tinycolor from 'tinycolor2';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private stemmedDict:any;
  private ionPrefix : string = ".ion-color-";
  public colorList : string[] = ColorList;
  constructor(@Inject(DOCUMENT) private document: Document) {
    // this.colorList.forEach( c => this.addTagColor(c.id, c.value));
    this.stemmedDict = {};
  }

  public addMarkColor(tag:any){
    console.log('cached stemmedDict in ColorService:', Object.keys(this.stemmedDict).length);
    if(this.stemmedDict[tag.id] === true)return;

    let color = new tinycolor(tag.tagColor);
    
    if ( !color.isValid() ) {
      throw new Error(`Invalid color value: ${tag.tagColor}`)
      return;
    }
    let hex = color.toString('hex6');
    let rgb = color.toRgb();

    let css = 
    `
      span[tag-id=${tag.tagName}]::after {
        background-color: rgba(${rgb.r},${rgb.g},${rgb.b}, 0.5);
        content: "";
        display: block;
        height: 3px;
        left: 0;
        top: 100%;
        position: absolute;
        transition: all 0.2s ease;
        width: 100%;
      }
    `

    var docStyle = this.document.createElement('style');
    docStyle.type = 'text/css';
    docStyle.innerHTML = css;
    this.document.getElementsByTagName('head')[0].appendChild(docStyle);
    this.stemmedDict[tag.tagName] = true;
  }

  public addTagColor(name:string, baseColor:string){
    const namePattern = /^[a-zA-Z][\-_0-9A-Za-z]+$/;
    
    if(!namePattern.test(name)){
      throw new Error(`Invalid color name: ${name} should match /^[a-zA-Z][\-_0-9A-Za-z]$/` );
      return;
    }
    let color = new tinycolor(baseColor);
    
    if ( !color.isValid() ) {
      throw new Error(`Invalid color value: ${baseColor}`)
      return;
    }
    let hex = color.toString('hex6');
    let rgb = color.toRgb();
    let contrast = tinycolor( color.getBrightness() > 150 ? "#222" : "#eee" );
    let contrastRgb = contrast.toRgb();
    
    let css = 
   `${this.ionPrefix+name} {
    --ion-color-base: ${hex};
    --ion-color-base-rgb: ${rgb.r},${rgb.g},${rgb.b};
    --ion-color-contrast: ${contrast.toString('hex6')};
    --ion-color-contrast-rgb: ${contrastRgb.r},${contrastRgb.g},${contrastRgb.b};
    --ion-color-shade: ${color.darken().toString('hex6')};
    --ion-color-tint: ${color.lighten().toString('hex6')};
   }
   `
    //console.log(css);
    
    var docStyle = this.document.createElement('style');
    docStyle.type = 'text/css';
    docStyle.innerHTML = css;
    this.document.getElementsByTagName('head')[0].appendChild(docStyle);
  }
}
