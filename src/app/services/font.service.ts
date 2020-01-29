import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import FontList from '../../assets/fonts.json';
import {DOCUMENT} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class FontService {
  public prefix = ".lr-font-";
  constructor(@Inject(DOCUMENT) private document: Document) { }

  injectFont(font:any){
    let css = 
    `${this.prefix}${font.font_family} {
      font-family: '${font.font_family} !important';
      font-style: '${font.font_style}';
      font-weight: '${font.font_weight}';
    }
    `;
     //console.log(css);
     
     var docStyle = this.document.createElement('style');
     docStyle.type = 'text/css';
     docStyle.innerHTML = css;
     this.document.head.appendChild(docStyle);
  }

  injectAll(){
    FontList.forEach((font) => {
      console.log(font);
      this.injectFont(font);
    })
  }

  get getFontList(){
    return FontList;
  }

}
