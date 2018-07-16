import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Provider} from "../../providers/provider/provider";


/**
 * Generated class for the ExponatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exponats',
  templateUrl: 'exponats.html',
})
export class ExponatsPage {

  views:any;
  private mySearch = "";

  constructor(private dataProvide:Provider,public navCtrl: NavController, public navParams: NavParams) {
    this.views=null;
  }

  getExpo(){
    this.dataProvide.getExpo().then(
      data=>{
        this.views=data;
      }
    );
  }

  navigateToDetail(expoId:any){
    this.navCtrl.push('ViewPage',{expoId});
  }


  matchesSearch(views) {
    if(this.mySearch.trim()) { // checks null and ""
      if(views.exponame.indexOf(this.mySearch.trim())>-1){
        return true;
      } else {
        return false;
      }
    } else { // Nothing in search input
      return true;
    }
  }

  ionViewDidLoad(){
    this.getExpo();
  }

}
