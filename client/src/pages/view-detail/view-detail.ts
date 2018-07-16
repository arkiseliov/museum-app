import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Provider} from "../../providers/provider/provider";

/**
 * Generated class for the ViewDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
)
@Component({
  selector: 'page-view-detail',
  templateUrl: 'view-detail.html',
})
export class ViewDetailPage {

  public viewId:number;
  post: any;


  constructor(private data:Provider,public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    this.viewId = this.navParams.get('viewId');
    console.log(this.viewId);
    console.log(this.data.getViewById(this.viewId));
    this.post=this.data.getViewById(this.viewId);
  }

}
