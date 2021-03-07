import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-solar-capacity-chart',
  templateUrl: './solar-capacity-chart.component.html',
  styleUrls: ['./solar-capacity-chart.component.scss']
})
export class SolarCapacityChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [.1, .5, .8, 1.2, 1.4, 1.8, 1.9], label: 'Capacity (MW)' },
  ];
  public lineChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: '#b18efc',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
