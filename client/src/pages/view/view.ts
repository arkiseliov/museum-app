import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ExhibitionItem} from "../../models/exhibition-item/exhibition-item.interface";
import {Observable} from "rxjs/Observable";
import {Provider} from "../../providers/provider/provider";

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'view/:expoId'
})
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  public expoId:number;
  view: any;


  constructor(private data:Provider,public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    this.expoId = this.navParams.get('expoId');
    console.log(this.expoId);
    console.log(this.data.getExpoById(this.expoId));
    this.view=this.data.getExpoById(this.expoId);
  }

}


