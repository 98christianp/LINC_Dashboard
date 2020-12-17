import {Component, OnInit, OnChanges, AfterViewInit, ViewChild} from '@angular/core';
import {StewardsStore} from '../../_services/mobx/stewards-store';
import {Label, MultiDataSet, SingleDataSet} from 'ng2-charts';
import {ChartDataSets, ChartType, Chart} from 'chart.js';
import {UserInfoStore} from '../../_services/mobx/user-info.store';
import {ErrorsStore} from '../../_services/mobx/errors.store';
import { BaseChartDirective } from 'ng2-charts';
import {ActiveStore} from '../../_services/mobx/active.store';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
} from 'ng-apexcharts';


export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @ViewChild(BaseChartDirective) private _chart: BaseChartDirective;
  @ViewChild('chart') public chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  public barChartLabels: Label[] = ['Count last 24 hours'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData =  [
    { data: [4], label: 'API' },
    { data: [0], label: 'STEWARDS' }
  ];

  // Doughnut
  public doughnutChartLabels: Label[] = ['Registered', 'Users to go for milestone'];
  public doughnutChartData: MultiDataSet = [
    [this.users.items[0].count, 500 - this.users.items[0].count]
  ];
  public doughnutChartType: ChartType = 'doughnut';



 constructor(public stewardsStore: StewardsStore,
             public users: UserInfoStore,
             public errors: ErrorsStore,
             public active_users: ActiveStore
  ) {

   this.chartOptions = {
     series: [{
       name: 'TEST DAY 1',
       data: [
         [1, 0], [21, 2], [2, 3], [3, 2], [4, 1], [5, 3.2], [6, 7.4], [7, 0], [9, 8.2]]
     }, {
       name: 'TEST DAY 2',
       data: [
         [1, 22], [21, 10], [2, 11], [3, 5], [4, 10], [5, 22], [6, 35], [7, 22], [9, 41]]
     }],
     chart: {
       height: 350,
       type: 'scatter',
       zoom: {
         enabled: true,
         type: 'xy'
       }
     },
     xaxis: {
       title: {
         text: 'user ID',
         offsetY:6
       },
       type: 'numeric',
       tickAmount: 'dataPoints',
       labels: {
         formatter(value) {
           return value;
         }
       },
     },
     yaxis: {
       title: {
         text: 'Minutes'
       },
       tickAmount: 5
     }
   };
 }


  ngOnInit() {
    this.errors.fetchErros();
    this.active_users.fetchData();
    this.users.fetchData();
    setTimeout( () => {
      console.log(this._chart.chart);
      this._chart.chart.data.datasets[0].data = [this.users.items[0].count, 500 - this.users.items[0].count];
      this._chart.chart.update();
    }, 2000);
  }

}
