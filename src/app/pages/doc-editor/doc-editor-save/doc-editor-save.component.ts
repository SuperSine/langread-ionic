import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GroupType } from 'src/app/graphql-components';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'doc-editor-save',
  templateUrl: './doc-editor-save.component.html',
  styleUrls: ['./doc-editor-save.component.scss'],
})
export class DocEditorSaveComponent implements OnInit {

  @Output()
  onSave: EventEmitter<string> = new EventEmitter();

  @Output()
  onFork: EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.userGroupList.toPromise().then((x)=>{
      this.defaultGroup = x.filter(y => y.isDefault == true)[0];
      console.log(this.defaultGroup);
    });

    this.isToGroup = true;
  }

  onSaveClick(){
    this.onSave.emit(this.groupSelect.value);
  }

  onForkClick(){
    this.onFork.emit({
                      groupId:this.groupSelect.value,
                      copyTags:this.copyTags
                    });
  }

  onClick(){
    if(this.isFork)
      this.onForkClick();
    else
      this.onSaveClick();
  }

  get isFork(){
    return this.onFork != null && this.onFork.observers.length >= 1;
  }

  @ViewChild(IonSelect, {static:false})
  public groupSelect:IonSelect;

  public isToGroup:boolean;
  public isCopyTags:boolean;
  public userGroupList:Observable<GroupType[]>;
  public defaultGroup:GroupType;
  public copyTags:boolean = true;

}
