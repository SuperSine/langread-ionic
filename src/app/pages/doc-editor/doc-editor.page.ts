import { Component, OnInit, ViewChild } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { DocService } from 'src/app/services/doc.service';
import { stringify } from 'querystring';

export enum DocMode{
  Read,
  Edit
}

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.page.html',
  styleUrls: ['./doc-editor.page.scss'],
})
export class DocEditorPage implements OnInit {
  private isToolbarHidden:boolean=false;
  private mode: DocMode;
  private content:string;
  private showTags:boolean = false;
  private docId:string;
  private tags:string;
  private contentRegEx:RegExp = /(?<=>)[\w\s]+(?=<)/g;
  private nonCharRegEx:RegExp = /--{1,}|[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]/g;
  private getWordRegEx:RegExp = /[^\s]*/g;

  @ViewChild("innerHtml",{static:true})
  private innerHtml: HTMLDivElement;
  

  constructor(private activatedRoute:ActivatedRoute, private docService:DocService) {
    this.docId = activatedRoute.snapshot.paramMap.get('docId');
  }

  getDoc(){
    this.docService.get(this.docId).subscribe(({data:{document:{get} }}) => {
      console.log(get);
      this.content = get.document.content;
      this.tags = get.smallWordTagInfo.tags;
    })
  }

  getEachText(element){
    return element.innerText;
  }

  onInnerHtmlClick(event){
    debugger;
    var that = this;
    this.innerHtml.nativeElement.innerHTML = this.content;
    var allInnerHtml = "";
    Array.from(this.innerHtml.nativeElement.querySelectorAll("*"), (el) => {
      console.log("dealing with:", el.cloneNode(true));
      var currentInnerHtml = "";
      Array.from(el.childNodes, function(ch){
          if(ch.nodeType === 3  &&  ch.data.trim().length > 0){
             ch.data = ch.data.replace(that.getWordRegEx, (word)=>{
              var span = document.createElement('span');
              el.insertBefore(span, ch);
              span.insertAdjacentHTML( 'beforeend', `<span tagpicker> ${word} </span>` );
              return "";
             });


            //  currentInnerHtml += newHtml;
         }
     });
    //  allInnerHtml += currentInnerHtml;
     console.log('result:',el);
   });
  //  this.innerHtml.nativeElement.innerHTML = allInnerHtml;

    // this.innerHtml.nativeElement.innerHTML = this.content.replace(this.contentRegEx,(substring)=>{
    //   var value = substring.split(' ').map((value, index)=>{
    //     return  `<span tagpicker>${substring}</span>`;
    //   });
    //   console.log(value);

    //   return value.join(' ');
    // });
  }

  getHtml(){
    var copyContent = (JSON.parse(JSON.stringify(this.content)) as string)

    
  }

  ngOnInit() {
    this.mode = DocMode.Edit
    this.getDoc();
  }

  get DocMode(){
    return DocMode;
  }

  onScroll(event){
    if(event.detail.scrollTop > 200){
      this.isToolbarHidden = true;
    }else
      this.isToolbarHidden = false;
  }

  onTagClick(event){
    this.showTags = !this.showTags;
  }

  onModeChange(event){
    console.log(event);

    if(this.mode == DocMode.Edit)
      this.mode = DocMode.Read;
    else
      this.mode = DocMode.Edit;
  }
}
