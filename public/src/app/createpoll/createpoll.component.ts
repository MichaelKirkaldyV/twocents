import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  poll: any;
  user_id: any;
  error_messages: any = [];

  constructor(private _http: HttpService,
              private _router: Router,
              private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.poll = {question: "", answer_one: "", answer_two: "", answer_three: ""}
    this.getParams()
  }

  getParams() {
    this._route.params.subscribe(params => {
      this.user_id = params['id']
    })
  }

  createPoll() {
    console.log("Check out this poll", this.poll)
    this._http.createNewPoll(this.user_id, this.poll).subscribe(data => {
      console.log(data[0])
      if (data['errors']) {
          this.error_messages.push(data['errors'])
          console.log("Messages", this.error_messages)
      } else {
          console.log("Frontend- Poll created.", data)
          this._router.navigate(['dashboard', this.user_id])
      }
    })
  }

}
