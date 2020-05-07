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

  getPollData(){
    this._http.getPollData_(this.poll_id).subscribe(data => {
      this.poll = data
      console.log("Poll results are--", data)
    })
  }

}
