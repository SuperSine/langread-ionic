import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DocEditorPage } from '../pages/doc-editor/doc-editor.page';
import { AlertController } from '@ionic/angular';

export interface CanDeactivateComponent {
  canDeactivate: () => Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuitDocEditorGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component:CanDeactivateComponent):Observable<boolean> | Promise<boolean> | boolean{
    
    return component.canDeactivate ? component.canDeactivate() : true;

  }

  
}
