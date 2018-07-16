import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Provider} from "../../providers/provider/provider";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  views:any;

  constructor(private dataProvide:Provider,public navCtrl: NavController, public navParams: NavParams) {
    this.views=null;
  }

  getViews(){
    this.dataProvide.getView().then(
      data=>{
        this.views=data;
      }
    );
  }

  navigateToDetail(viewId:any){
    this.navCtrl.push('ViewDetailPage',{viewId});
  }

  ionViewDidLoad(){
    this.getViews();
  }

}







