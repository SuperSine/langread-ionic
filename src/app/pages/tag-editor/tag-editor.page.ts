import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ColorService, TagColor } from 'src/app/services/color.service';
import { FontService } from 'src/app/services/font.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-tag-editor',
  templateUrl: './tag-editor.page.html',
  styleUrls: ['./tag-editor.page.scss']
})
export class TagEditorPage implements OnInit {
  public editorForm: FormGroup;
  private currentColor: TagColor;
  private fontList:any;

  private id:string;
  private tagColor:string;
  private oldTagName:string;
  private tagName:string;
  private tagFont:string;
  private selectColor:string;
  private queryRef:any;
  private colorList:any[];

  constructor( private toastCtrl:ToastController, private tagService:TagsService, 
               private fontService:FontService, public colorService: ColorService,
               private modalController:ModalController, public formBuilder:FormBuilder) {
    this.editorForm = formBuilder.group({
      tagname: ['', Validators.compose([Validators.required])],
      tagfont: ['', Validators.compose([Validators.required])],
      tagcolor: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.fontList = this.fontService.getFontList;

    this.oldTagName = this.tagName;

    this.editorForm.get('tagcolor').setValue(this.tagColor);
    this.editorForm.get('tagname').setValue(this.tagName);
    this.editorForm.get('tagfont').setValue(this.tagFont);

    this.selectColor = this.tagColor;

    this.colorList = this.colorService.colorList;
  }

  close(){
    this.modalController.dismiss();
  }

  onColorClick(event){
    this.editorForm.get('tagcolor').setValue(event.value);
    this.editorForm.updateValueAndValidity();
  }

  toggleClass(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
  
    if(hasClass) {
      event.target.classList.removeClass(event.target, className);
    } else {
      event.target.classList.addClass(event.target, className);
    }
  }

  save(){
    if(this.id){
      this.tagService.update(this.oldTagName,{
        tagColor:this.editorForm.get('tagcolor').value,
        tagFont:this.editorForm.get('tagfont').value,
        tagName:this.editorForm.get('tagname').value
      }).subscribe(async (result)=>{
        let alert = await this.toastCtrl.create({
          message: "Tag Updated!",
          duration:2000,
          color:"green"
        });
        alert.present();

        this.close();

      },async (err) => {
        let alert = await this.toastCtrl.create({
          message: err.message,
          duration:2000,
          color:"danger"
        });
        alert.present();
      })
    }else{
      this.tagService.add({
        tagColor:this.editorForm.get('tagcolor').value,
        tagFont:this.editorForm.get('tagfont').value,
        tagName:this.editorForm.get('tagname').value
      }).subscribe(async (result)=>{
        let alert = await this.toastCtrl.create({
          message: "Tag Added!",
          duration:2000,
          color:"green"
        });
        alert.present();

        this.close();
      },async (err) => {
        let alert = await this.toastCtrl.create({
          message: err.message,
          duration:2000,
          color:"danger"
        });
        alert.present();
      })
    }
  }
}
