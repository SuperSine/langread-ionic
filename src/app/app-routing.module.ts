import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { QuitDocEditorGuard } from './guards/quit-doc-editor.guard';
import { DocInfoPage } from './pages/doc-info/doc-info.page';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./pages/auth-login/auth-login.module').then(m => m.AuthLoginPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth-register/auth-register.module').then(m => m.AuthRegisterPageModule)
  },
  {
    path: 'tag-list',
    loadChildren: () => import('./pages/tag-list/tag-list.module').then( m => m.TagListPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'tag-editor',
    loadChildren: () => import('./pages/tag-editor/tag-editor.module').then( m => m.TagEditorPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'doc-list',
    loadChildren: () => import('./pages/doc-list/doc-list.module').then( m => m.DocListPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'doc-editor',
    loadChildren: () => import('./pages/doc-editor/doc-editor.module').then( m => m.DocEditorPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'tag-picker',
    loadChildren: () => import('./pages/tag-picker/tag-picker.module').then( m => m.TagPickerPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'doc-info',
    loadChildren: () => import('./pages/doc-info/doc-info.module').then( m => m.DocInfoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'word-timeline',
    loadChildren: () => import('./pages/word-timeline/word-timeline.module').then( m => m.WordTimelinePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'word-info',
    loadChildren: () => import('./pages/word-info/word-info.module').then( m => m.WordInfoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'auth-confirm',
    loadChildren: () => import('./pages/auth-confirm/auth-confirm.module').then( m => m.AuthConfirmPageModule)
  },
  {
    path: 'auth-email',
    loadChildren: () => import('./pages/auth-email/auth-email.module').then( m => m.AuthEmailPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'auth-password',
    loadChildren: () => import('./pages/auth-password/auth-password.module').then( m => m.AuthPasswordPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'auth-totp',
    loadChildren: () => import('./pages/auth-totp/auth-totp.module').then( m => m.AuthTotpPageModule)
  },
  //this route need to put to bottom of the list
  {
    path: '',
    loadChildren: () => import('./pages/app-menu/app-menu.module').then( m => m.AppMenuPageModule),
    canActivate:[AuthGuard]
  }




];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
