import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private myMethodSubject = new Subject<any>();

  constructor() {}

   sendToken(token) {
    console.log("Here is the token", token)
    this.myMethodSubject.next(token)
  }

   getToken(): Observable<any> {
     return this.myMethodSubject.asObservable()
   }

}
 