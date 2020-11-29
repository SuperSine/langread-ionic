import { Directive, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appAvatarId]'
})
export class AvatarUrlDirective {

  constructor(private el: ElementRef) {

  }

  ngOnInit(){
    const obj = this.el.nativeElement as HTMLImageElement;

    obj.src = environment.avatarUrl+'/'+ this.avatarId;
  }

  @Input('appAvatarId') avatarId: string;
}
