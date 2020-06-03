import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemSPPage } from './them-sp.page';

const routes: Routes = [
  {
    path: '',
    component: ThemSPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemSPPageRoutingModule {}
