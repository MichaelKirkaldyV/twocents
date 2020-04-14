import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public doughnutChartLabels: Label[] = ['Jay-Z', 'Nas', 'Biggie', 'Pac'];
  public doughnutChartData: SingleDataSet = [300, 150, 180, 200];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Array<any> = [{ backgroundColor: ["red", "blue", "orange", "pink"]}];

}
