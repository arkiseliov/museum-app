import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReservePage } from './add-reserve';

@NgModule({
  declarations: [
    AddReservePage,
  ],
  imports: [
    IonicPageModule.forChild(AddReservePage),
  ],
})
export class AddReservePageModule {}
