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
  answer: any;

  constructor(private _http: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this._route.params.subscribe(params => {
      this.poll_id = params['pollId']
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
    this.answer = event.target.defaultValue
  }

  voteOnPoll() {
    console.log("This is the Event--", this.poll_id, this.answer)
    this.poll_ = {question: this.poll.question,  answer_one: this.poll.answers[0].answer, 
                  answer_two: this.poll.answers[1].answer, answer_three: this.poll.answers[2].answer}
    this._http.voteOnPoll_(this.poll_id, this.answer).subscribe(data => {
      //Should show poll with incremented vote.
      console.log("DATA____", data)
    })
  }

}
