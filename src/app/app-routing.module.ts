import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren: () => import('./pages/doc-list/doc-list.module').then( m => m.DocListPageModule)
  },
  {
    path: 'doc-editor',
    loadChildren: () => import('./pages/doc-editor/doc-editor.module').then( m => m.DocEditorPageModule)
  },
  {
    path: 'tag-picker',
    loadChildren: () => import('./pages/tag-picker/tag-picker.module').then( m => m.TagPickerPageModule)
  },
  {
    path: 'doc-info',
    loadChildren: () => import('./pages/doc-info/doc-info.module').then( m => m.DocInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
