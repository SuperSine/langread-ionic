import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/graphql-components';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AvatarService } from 'src/app/services/avatar.service';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.page.html',
  styleUrls: ['./app-profile.page.scss'],
})
export class AppProfilePage implements OnInit {

  constructor(public authService:AuthService) { }

  async ngOnInit() {
    this.user = this.authService.watchProfile();
    
  }

  async ionViewWillEnter(){
  }

  logout(){
    this.authService.logout();
  }

  // async saveFile(filename:string) {
  //   const b64 = this.croppedImage.split(';')[1].split(',')[1];
  //   const blob = this.globals.b64ToBlob(b64, 'image/jpeg');
  //   const file = this.globals.blobToFile(blob, `${filename}.jpeg`);
  //   await this.avatarService.upload(filename, file);
  // }

  // async readFile($event) {
  //   this.file = $event.target.files[0];

  //   var reader = new FileReader();
    
  //   reader.onload = async (_event) => { 
  //     var imageData = reader.result;

  //     const modal = await this.modalCtrl.create({
  //       component: ImageCropperComponent,
  //       componentProps:{
  //         imageData
  //       }
  //     });

  //     modal.onDidDismiss().then(({data}) => {
  //       this.croppedImage = data;
  //     });
  
  //     await modal.present();
  //   }

  //   reader.readAsDataURL($event.target.files[0]);

  // }

  public user: Observable<UserType>
  public croppedImage:string;


}
