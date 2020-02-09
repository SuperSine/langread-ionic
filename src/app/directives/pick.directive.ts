import { Directive, HostListener, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-pick]',
  host:{
    '(click)':'onClick($event)'
  }
})
export class PickDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
    console.log('initializing:', this.el);
  }
  ngAfterViewInit(){
  }
  @HostListener("click")
  onClick(event){
    console.log(this.el);
  }
}
