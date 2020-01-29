import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

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

  

  constructor() {
  }

  ngOnInit() {
    this.mode = DocMode.Edit
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
