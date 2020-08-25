import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit {

  constructor(private modalCtrl:ModalController) {
    this.imageData = "";
   }

  imageCropped(event:ImageCroppedEvent){
    this.croppedImage = event.base64;
  }

  ngOnInit() {
    console.log(this.imageData);
  }

  close(){
    this.modalCtrl.dismiss(this.croppedImage);
  }

  public imageData:any;
  public croppedImage:any;
}