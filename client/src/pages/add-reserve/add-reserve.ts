import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the AddReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reserve',
  templateUrl: 'add-reserve.html',
})
export class AddReservePage {

  // myGroup:FormGroup;
  name: any;
  surname: any;
  exhibname:any;
  pgroup: any;
  date:any;
  price:any;
  phone:number;
  // submitAttempt: boolean = false;

  constructor(public viewCtrl: ViewController) {
    // this.myGroup = new FormGroup({
    //   nameInfo: new FormControl({value:''},Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])),
    //   surnameInfo: new FormControl({value:''},Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required]))
    // })
  }

  save(): void {

    let review = {
      name: this.name,
      surname: this.surname,
      exhibname:this.exhibname,
      pgroup:this.pgroup,
      date:this.date,
      price:this.price,
      phone:this.phone
    };

    this.viewCtrl.dismiss(review);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
