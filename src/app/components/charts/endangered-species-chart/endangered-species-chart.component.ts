import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-endangered-species-chart',
  templateUrl: './endangered-species-chart.component.html',
  styleUrls: ['./endangered-species-chart.component.scss']
})
export class EndangeredSpeciesChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [40, 42, 41, 40, 40, 39, 38], label: 'Endangered' },
    { data: [1, 2, 4, 3, 1, 2, 1], label: 'Threatened' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#ffe680' },
    { backgroundColor: '#b18efc' },    
  ]   

  constructor() { }

  ngOnInit() {
  }

}
