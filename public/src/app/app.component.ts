import { Component, OnInit } from '@angular/core';
import { ChartType, ChartColor } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels: Label[] = ['Jay-Z', 'Nas', 'Biggie', 'Pac'];
  public doughnutChartData: SingleDataSet = [300, 150, 180, 200];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Array<any> = [{ backgroundColor: ["red", "blue", "orange", "pink"]}];

}
