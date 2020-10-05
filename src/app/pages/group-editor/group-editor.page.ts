import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera,CameraOptions  } from '@ionic-native/camera/ngx';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalController } from '@ionic/angular';
import { ImageCropperComponent } from 'src/app/components/image-cropper/image-cropper.component';
import { environment  } from 'src/environments/environment';
import { AvatarService } from 'src/app/services/avatar.service';
import { Globals } from 'src/app/globals';
import { GroupService } from 'src/app/services/group.service';
import {GroupInputType} from 'src/app/graphql-components';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.page.html',
  styleUrls: ['./group-editor.page.scss'],
})
export class GroupEditorPage implements OnInit {

  constructor(public formBuilder:FormBuilder,
              private file:File,
              private modalCtrl:ModalController,
              private avatarServer:AvatarService,
              private globals:Globals,
              public groupService:GroupService) {

    this.editorForm = formBuilder.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, this.groupService.checkGroupName.bind(this.groupService)])],
      description: ['', Validators.compose([Validators.required])],
      groupTypeId: ['1', Validators.compose([Validators.required])],
      languages: ['', Validators.compose([Validators.required])],
    });

    this.langList = environment.targetLanguages;
  }

  ngOnInit() {
    this.editorForm.updateValueAndValidity();

  }

  save(){
    const data = this.editorForm.getRawValue();
    this.groupService.saveGroup(data).subscribe(async ({data:{group:{create}}}:any) => {
      if(this.croppedImage){
        await this.saveFile(create.id);
      }

      this.close();
    })
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async saveFile(filename:string) {
    const b64 = this.croppedImage.split(';')[1].split(',')[1];
    const blob = this.globals.b64ToBlob(b64, 'image/jpeg');
    const file = this.globals.blobToFile(blob, `${filename}.jpeg`);
    await this.avatarServer.upload(filename, file);
  }

  async changeListener($event) {
    this.file = $event.target.files[0];

    var reader = new FileReader();
    
    reader.onload = async (_event) => { 
      this.imageData = reader.result;

      const modal = await this.modalCtrl.create({
        component: ImageCropperComponent,
        componentProps:{
          imageData:this.imageData
        }
      });

      modal.onDidDismiss().then(({data}) => {
        this.croppedImage = data;
      });
  
      await modal.present();
    }

    reader.readAsDataURL($event.target.files[0]);

  }

  // selectImage(imageData) {
  //   this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, imageData);
  // }

  // cropImage(fileUrl) {
  //   this.crop.crop(fileUrl, { quality: 50 })
  //     .then(
  //       newPath => {
  //         this.showCroppedImage(newPath.split('?')[0])
  //       },
  //       error => {
  //         alert('Error cropping image' + error);
  //       }
  //     );
  // }

  // showCroppedImage(ImagePath) {
  //   this.isLoading = true;
  //   var copyPath = ImagePath;
  //   var splitPath = copyPath.split('/');
  //   var imageName = splitPath[splitPath.length - 1];
  //   var filePath = ImagePath.split(imageName)[0];

  //   this.file.readAsDataURL(filePath, imageName).then(base64 => {
  //     this.croppedImagepath = base64;
  //     this.isLoading = false;
  //   }, error => {
  //     alert('Error in showing image' + error);
  //     this.isLoading = false;
  //   });
  // }

  // imageCropped(event:ImageCroppedEvent){
  //   this.croppedImage = event.base64;
  // }

  // pickImage(sourceType, imageData) {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     sourceType: sourceType,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   this.cropImage(imageData);
  //   // this.camera.getPicture(options).then((imageData) => {
  //   //   // imageData is either a base64 encoded string or a file URI
  //   //   // If it's base64 (DATA_URL):
  //   //   // let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   //   this.cropImage(imageData)
  //   // }, (err) => {
  //   //   console.log(err);
  //   // });

  //   // this.file.readAsDataURL()
  // }

  get isNameAvailable(){
    return this.editorForm.get('name').value && 
            !this.editorForm.get('name').hasError('groupNameNotAvailable');
  }

  public editorForm: FormGroup;
  public picForm: FormGroup;

  public isLoading:boolean;
  public croppedImagepath:string;
  public croppedImage:string;
  public imageData:any;
  public langList:any[];

}
