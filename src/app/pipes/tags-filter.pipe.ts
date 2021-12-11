import { Pipe, PipeTransform } from '@angular/core';
import { UniqueTagsPipe } from 'src/app/pipes/unique-tags.pipe';
import { TagType } from '../graphql-components';

@Pipe({
  name: 'tagsFilter'
})
export class TagsFilterPipe implements PipeTransform {
  transform(array: Array<any>, currentTags: any[]): Array<any> {
    if(!array || array === undefined || array.length === 0) return null;
    array.forEach((tag)=>{
      tag.selected = false;
    })

    if(currentTags == null || currentTags.length == 0)return array;

    if(array.length == 1 && currentTags.length == 1){
      array[0].selected = array[0].tagName == currentTags[0].tag.tagName ? true : false;
    }

    //for array.length > 2
    array = array.sort((a:any, b:any) => {
      const aTagExists = currentTags.find(({tag}) => {
        if(tag.tagName == a.tagName)
          a.selected = true;
        return a.selected;
      });

      const bTagExists = currentTags.find(({tag}) => {
        if(tag.tagName == b.tagName)
          b.selected = true;
        return b.selected;
      });

      if(aTagExists)
        return -1;
      else if(bTagExists)
        return 1;
      else
        return 0;
    });

    return array;

  }

}