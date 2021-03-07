import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-reservoir-chart',
  templateUrl: './reservoir-chart.component.html',
  styleUrls: ['./reservoir-chart.component.scss']
})
export class ReservoirChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [42, 30, 78, 81, 56, 52, 40], label: 'Total Reservoir Levels' },
  ];
  public lineChartLabels: Label[] = ['August', 'September', 'October', 'November', 'December', 'January', 'February'];
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
