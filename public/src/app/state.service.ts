import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  myMethod: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod = this.myMethodSubject.asObservable();
   }

   MyMethod(token) {
     console.log("Here is the token", token)
     return this.myMethodSubject.next(token)
   }

}
