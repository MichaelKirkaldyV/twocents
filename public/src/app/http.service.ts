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

createNewPoll(id, poll) {
  return this.http.post('/api/createPoll/' +id, poll)
}

getPolls() {
  return this.http.get('/api/allPolls')
}

getMyPolls_(id) {
  return this.http.get('/api/getMyPolls/' +id)
}

getPollData_(id) {
  return this.http.get('/api/poll/' +id)
}

voteOnPoll_(poll_id, answer) {
  return this.http.put('/api/vote/' +poll_id, answer)
}

removePoll_(poll_id) {
  return this.http.delete('/api/deletePoll/' + poll_id)
}

}
