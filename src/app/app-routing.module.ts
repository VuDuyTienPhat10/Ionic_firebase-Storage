import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'them-sp',
    loadChildren: () => import('./them-sp/them-sp.module').then( m => m.ThemSPPageModule)
  },
  {
    path: 'list-sp',
    loadChildren: () => import('./list-sp/list-sp.module').then( m => m.ListSPPageModule)
  },
  {
    path: 'trang-hien-thi-sp',
    loadChildren: () => import('./trang-hien-thi-sp/trang-hien-thi-sp.module').then( m => m.TrangHienThiSpPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
