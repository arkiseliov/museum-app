import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {ExhibitionItem} from "../../models/exhibition-item/exhibition-item.interface";
import {Provider} from "../../providers/provider/provider";

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  history:Observable<Array<ExhibitionItem>>;

  constructor(private data:Provider,public navCtrl: NavController, public navParams: NavParams) {
    this.getHistory()
  }

  getHistory(){
    this.history=this.data.getHistory();
  }

}
