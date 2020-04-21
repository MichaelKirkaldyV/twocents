import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  token: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _stateService: StateService) { }

  ngOnInit(): void {
    this.getParams()
    this.authenticateToken(this.token)
  }

  getParams() {
    this._route.params.subscribe(params => {
      console.log("Here is the parameter...", params)
      this.token = params['id']
      this.sendToRootComponent(this.token)
    })
  }

  authenticateToken(token) {
    if (!this.token) {
      this._router.navigate(['home'])
    } else {
      this._router.navigate(['dashboard/', this.token])
    }
  }

  sendToRootComponent(token) {
    this._stateService.sendToken(token)
    console.log("The token value is---", token)
  }

}
