import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

registerThisUser(user) {
  console.log("in http service, registering user...")
  return this.http.post('/api/register', user)
}

}
