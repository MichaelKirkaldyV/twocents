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
  poll_id: any;

  constructor(private _http: HttpService,
              private _router: Router,
              private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.poll = {question: "", answers_one: "", answers_two: "", answers_three: ""}
    this.getParams()
  }

  getParams() {
    this._route.params.subscribe(params => {
      this.poll_id = params['id']
    })
  }

  createPoll() {
    console.log("Check out this poll", this.poll)
    this._http.createNewPoll(this.poll).subscribe(data => {
      console.log("Frontend- Poll created.", data)
      this._router.navigate(['dashboard', this.poll_id,])
    })
  }

}
