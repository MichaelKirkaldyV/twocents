import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { StateService } from './state.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  token: any;
  logged_in: boolean;

  constructor(private _stateService: StateService,
              private _router: Router) { }

  ngOnInit() {
    this.getToken()
  }

  public doughnutChartLabels: Label[] = ['Jay-Z', 'Nas', 'Biggie', 'Pac'];
  public doughnutChartData: SingleDataSet = [300, 150, 180, 200];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Array<any> = [{ backgroundColor: ["red", "blue", "orange", "pink"]}];

  getToken() {
    this._stateService.getToken().subscribe(token => {
      this.token = token
      this.logged_in = true
      console.log("In the root----", this.token)
    })
  }

  logout() {
    localStorage.clear()
    this.logged_in = false
    this._router.navigate(['home'])
  }
  

}
