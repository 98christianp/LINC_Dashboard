import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import {ChartDataSets} from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class ErrorsStore {


  constructor(private apiService: ApiService
  ) {
  }

  @observable
  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Stewards' },
    { data: [0], label: 'API' }
  ];
  @observable
  public loading = true;

  @action
  public fetchErros() {
    this.apiService.fetchErrors().subscribe(errors => {
      this.barChartData[0].data[0] = errors[0];
      this.barChartData[1].data[0] = errors[1];
    });
  }
}
