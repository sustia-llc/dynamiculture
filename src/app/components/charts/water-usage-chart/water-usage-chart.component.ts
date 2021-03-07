import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-water-usage-chart',
  templateUrl: './water-usage-chart.component.html',
  styleUrls: ['./water-usage-chart.component.scss']
})
export class WaterUsageChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [5.2, 4.8, 3.3, 2.2, 2.0, 1.9, 2.15], label: 'Water Usage (Millions of Gallons)' },
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
