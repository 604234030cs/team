import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../model/modelfriend';

/*
  Generated class for the FriendrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendrestProvider {

  private url:string="https://raw.githubusercontent.com/604234030cs/ionic1/master/newdata.json"

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

    getFriendlist():Observable<any>{
      return this.http.get<Friend>(this.url);
    }
}
