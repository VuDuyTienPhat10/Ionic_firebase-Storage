import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSPPage } from './list-sp.page';

const routes: Routes = [
  {
    path: '',
    component: ListSPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSPPageRoutingModule {}
