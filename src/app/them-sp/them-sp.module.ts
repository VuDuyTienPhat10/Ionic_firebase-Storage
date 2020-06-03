import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemSPPageRoutingModule } from './them-sp-routing.module';

import { ThemSPPage } from './them-sp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThemSPPageRoutingModule
  ],
  declarations: [ThemSPPage]
})
export class ThemSPPageModule {}
