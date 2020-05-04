import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-mypolls',
  templateUrl: './mypolls.component.html',
  styleUrls: ['./mypolls.component.css']
})
export class MypollsComponent implements OnInit {

  user_id: any;
  polls: any;

  constructor(private _http: HttpService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this._route.params.subscribe(params => {
      this.user_id = params['id']
      this.getMyPolls()
    })
  }

  getMyPolls() {
    this._http.getMyPolls_(this.user_id).subscribe(data => {
      this.polls = data
      console.log("POLLs here", this.polls)
    })
  }

}
