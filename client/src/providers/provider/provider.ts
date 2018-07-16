import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'


/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {
  data: any;

  rootUrl:string='https://pacific-sierra-82259.herokuapp.com/exhibitions';
  expoUrl:string='https://pacific-sierra-82259.herokuapp.com/exponats';
  userUrl:string='https://pacific-sierra-82259.herokuapp.com/users';
  historyUrl:string='https://my-json-server.typicode.com/arkiseliov/dataExhibition/history';


  constructor(public http: Http) {
    console.log('Hello JsonProvider Provider');
    this.data=[];
  }

  getView(){
   // return this.http.get(`${this.rootUrl}`).map(res=>res.json()).take(1);
    return new Promise(resolve => {

      this.http.get(`${this.rootUrl}`).map(res => res.json()).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getExpo(){
    return new Promise(resolve => {
      this.http.get(`${this.expoUrl}`).map(res => res.json()).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getViewById(id:any){
    return new Promise(resolve => {
      return this.http.get(`${this.rootUrl}/${id}`).map(res => res.json()).subscribe(data=> {
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
  }

  getExpoById(id:any){
    return new Promise(resolve => {
      return this.http.get(`${this.expoUrl}/${id}`).map(res => res.json()).subscribe(data=> {
        resolve(data);
      },err=> {
        console.log(err);
      });
    });
  }

  getHistory(){
    return this.http.get(`${this.historyUrl}`).map(res=>res.json()).take(1);
  }

  getUser(){
    return this.http.get(`${this.userUrl}`).map(res=>res.json()).take(1);
  }

  createUser(review){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(`${this.userUrl}`, JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
  }
}
