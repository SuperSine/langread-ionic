import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueTags',
  pure: false
})
export class UniqueTagsPipe implements PipeTransform {

  transform(array: Array<any>): Array<any> {
    var map = {};
    if(!array || array === undefined || array.length === 0) return null;
    array = array.filter((value)=>{
      if(map[value.tagName])return false;
      map[value.tagName] = true;
      return true;
    })
    return array;

  }

}
