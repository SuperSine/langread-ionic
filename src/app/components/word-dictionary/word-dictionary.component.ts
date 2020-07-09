import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationResultType} from 'src/app/graphql-components';

@Component({
  selector: 'word-dictionary',
  templateUrl: './word-dictionary.component.html',
  styleUrls: ['./word-dictionary.component.scss'],
})
export class WordDictionaryComponent implements OnInit {

  constructor( private translate:TranslateService) {
    this.translations = {};
  }

  async ngOnInit() {
    this.lang = await this.translate.get("word-info").toPromise();

    if(this.translationResult){
      this.translationResult.translations.forEach((currentValue) => {
        if(!this.translations[currentValue.posTag])
          this.translations[currentValue.posTag] = [];
        
        this.translations[currentValue.posTag].push(currentValue);
      })
    }
  }

  public lang:any;
  @Input()
  public translationResult:TranslationResultType;
  public translations:any;
}
