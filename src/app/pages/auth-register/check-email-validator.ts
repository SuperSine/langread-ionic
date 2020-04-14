import {Injectable} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';

@Injectable({  providedIn: 'root'})
export class CheckEmailValidator{
  
  constructor(private authService:AuthService){
    
  }
  
  checkEmail(control:FormControl):any{
    clearTimeout(this.debouncer);
    
    return new Promise(resolve => {
      this.debouncer = setTimeout(() => {
        this.authService.checkEmail(control.value).subscribe((result:any)=>{
          if(result.data.auth.email === false){
            resolve(true);
          }else{
            resolve({"emailInUser": true});
          }
        }, (err) => {
          resolve({"emailInUser": true});
        })
      }, 1000);
    })
  }
  private debouncer:any;
  
  public EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
}