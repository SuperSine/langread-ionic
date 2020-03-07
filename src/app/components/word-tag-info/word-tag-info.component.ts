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
  onTouch: EventEmitter<Tag> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  touching(event){
    this.onTouch.emit(this.tag);
  }

}
