import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-rainfall-chart',
  templateUrl: './rainfall-chart.component.html',
  styleUrls: ['./rainfall-chart.component.scss']
})
export class RainfallChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [2.2, 3.5, 1.5, 2, 2.1, 1, 1.2], label: 'Rainfall (inches)' },
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
