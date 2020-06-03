import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSPPageRoutingModule } from './list-sp-routing.module';

import { ListSPPage } from './list-sp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSPPageRoutingModule
  ],
  declarations: [ListSPPage]
})
export class ListSPPageModule {}
