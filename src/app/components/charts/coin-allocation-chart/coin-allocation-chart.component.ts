import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-coin-allocation-chart',
  templateUrl: './coin-allocation-chart.component.html',
  styleUrls: ['./coin-allocation-chart.component.scss']
})
export class CoinAllocationChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Béeso', 'Ethereum', 'Oga Pogeh'];
  public pieChartData: SingleDataSet = [500, 300, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartColors: Color[] = [
    {
        backgroundColor: [
          'rgb(204, 204, 204)',
          'rgb(150, 150, 150)',
          'rgb(117, 117, 117)'
        ]
    }
  ]  

  constructor() { }

  ngOnInit() {
  }

}
