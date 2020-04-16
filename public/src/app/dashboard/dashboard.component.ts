import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fade', [
      // Defines style for the void state.
      state('void', style({ display: 'none', opacity: 0 })),
      state("*", style({ display: 'block', opacity: 1})),
      // String is bi-directional for the transitional state --from void to default and default to void
      transition('* => void', [
        animate(500)
      ])
    ]) //End of trigger
  ] // End of animations
})
export class DashboardComponent implements OnInit {

  token: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this.getParams()
    this.authenticateToken(this.token)
  }

  getParams() {
    this._route.params.subscribe(params => {
      console.log("Here is the parameter...", params)
      this.token = params['id']
    })
  }

  authenticateToken(token) {
    if (!this.token) {
      this._router.navigate(['home'])
    } else {
      this._router.navigate(['dashboard/', this.token])
    }
  }

}
