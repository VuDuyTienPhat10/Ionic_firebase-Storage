import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrangHienThiSpPageRoutingModule } from './trang-hien-thi-sp-routing.module';

import { TrangHienThiSpPage } from './trang-hien-thi-sp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrangHienThiSpPageRoutingModule
  ],
  declarations: [TrangHienThiSpPage]
})
export class TrangHienThiSpPageModule {}
