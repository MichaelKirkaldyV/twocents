import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-takepoll',
  templateUrl: './takepoll.component.html',
  styleUrls: ['./takepoll.component.css']
})
export class TakepollComponent implements OnInit {

  poll_id: any;
  poll: any;
  //poll_ is to be sent to backend
  poll_: any;
  answer_id: any;
  choice: any;
  user_id: any;

  constructor(private _http: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this._route.params.subscribe(params => {
      this.poll_id = params['pollId']
      this.user_id = params['id']
      console.log(this.poll_id)
      this.getPollData()
    })
  }

  getPollData() {
    this._http.getPollData_(this.poll_id).subscribe(data => {
      this.poll = data
      console.log("Poll results are--", data)
    })
  }

  checkBox(event: any) {
    // grabs value of checkbox
    console.log(event)
    this.choice = event.target.defaultValue
    this.answer_id = {answer: this.choice}
  }

  voteOnPoll() {
    console.log("This is the Event--", this.poll_id, this.answer_id)
    this.poll_ = {question: this.poll.question,  answer_one: this.poll.answers[0].answer, 
                  answer_two: this.poll.answers[1].answer, answer_three: this.poll.answers[2].answer}
    this._http.voteOnPoll_(this.poll_id, this.answer_id).subscribe(data => {
      //Should show poll with incremented vote.
      console.log("DATA____", data)
    })
  }

  removePoll() {
    console.log(this.user_id)
    console.log("In the remove poll")
    this._http.removePoll_(this.poll_id).subscribe(data => {
      console.log("Poll deleted!")
      this._router.navigate(['dashboard/' + this.user_id + '/allPolls'])
    })
  }

}
