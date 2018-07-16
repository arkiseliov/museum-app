import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExponatsPage } from './exponats';

@NgModule({
  declarations: [
    ExponatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExponatsPage),
  ],
})
export class ExponatsPageModule {}
