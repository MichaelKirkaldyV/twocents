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

loginThisUser(user) {
  console.log("in http service, logging user...")
  return this.http.post('/api/login', user)
}

createNewPoll(poll) {
  return this.http.post('/api/createPoll', poll)
}

getPolls() {
  return this.http.get('/api/allPolls')
}


}
