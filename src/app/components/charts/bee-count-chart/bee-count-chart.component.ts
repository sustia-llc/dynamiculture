import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bee-count-chart',
  templateUrl: './bee-count-chart.component.html',
  styleUrls: ['./bee-count-chart.component.scss']
})
export class BeeCountChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [41, 40, 44, 50, 56, 55, 58, 60], label: 'Bee Hives' }
  ];
  public barChartColors: Color[] = [
    {
      backgroundColor: '#b18efc',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
