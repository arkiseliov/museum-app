import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {Provider} from "../../providers/provider/provider";
import { AddReservePage} from "../add-reserve/add-reserve";

/**
 * Generated class for the ReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {

  reviews:any=[];

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public data: Provider,public navParams: NavParams) {
    this.getUser();
  }

  getUser(){
  this.reviews=this.data.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservePage');
  }

  addReview(){

    let modal = this.modalCtrl.create(AddReservePage);

    modal.onDidDismiss(review => {
      if(review){
        this.reviews=this.data.getUser();
        this.data.createUser(review);
      }
    });

    modal.present();

  }

}
