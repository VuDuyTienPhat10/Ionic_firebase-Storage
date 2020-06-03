import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrangHienThiSpPage } from './trang-hien-thi-sp.page';

const routes: Routes = [
  {
    path: '',
    component: TrangHienThiSpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangHienThiSpPageRoutingModule {}
