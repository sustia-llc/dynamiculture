import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-waste-chart',
  templateUrl: './waste-chart.component.html',
  styleUrls: ['./waste-chart.component.scss']
})
export class WasteChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['December', 'January', 'February'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [56, 54, 38], label: 'Garbage' },
    { data: [10, 11, 12], label: 'Recycling' },
    { data: [34, 35, 50], label: 'Compost' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#ffe680' },
    { backgroundColor: 'rgb(170, 170, 170)' },
    { backgroundColor: '#b18efc' },
  ] 

  constructor() { }

  ngOnInit() {
  }

}
