import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allpolls',
  templateUrl: './allpolls.component.html',
  styleUrls: ['./allpolls.component.css']
})
export class AllpollsComponent implements OnInit {

  polls: any;

  constructor(private _http: HttpService,
              private _Router: Router) { }

  ngOnInit(): void {
    this.getAllPolls()
  }

  getAllPolls() {
    this._http.getPolls().subscribe(data => {
      console.log("ALL POLLS--", data)
      this.polls = data
    })
  }

}
