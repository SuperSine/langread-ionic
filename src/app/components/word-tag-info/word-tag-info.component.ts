import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Tag } from 'src/app/services/tags.service';

@Component({
  selector: 'word-tag-info',
  templateUrl: './word-tag-info.component.html',
  styleUrls: ['./word-tag-info.component.scss'],
})
export class WordTagInfoComponent implements OnInit {
  @Input()
  tag:Tag;

  @Input()
  displayValue:string;

  @Output()
  close: EventEmitter<Tag> = new EventEmitter();

  @Output()
  tagClick:EventEmitter<Tag> = new EventEmitter();

  showClose:boolean = false;

  constructor() { }

  ngOnInit() {
    this.showClose = this.close.observers.length >= 1;
  }

  closing(event){
    this.close.emit(this.tag);
  }

  tagClicking(event){
    this.tagClick.emit(this.tag);
  }

}
