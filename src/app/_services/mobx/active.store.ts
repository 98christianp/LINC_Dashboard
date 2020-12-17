import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import {ChartDataSets} from 'chart.js';
import { Active} from '../../_model/active';

@Injectable({
  providedIn: 'root'
})
export class ActiveStore {


  constructor(private apiService: ApiService
  ) {
  }

  @observable
  public loading = true;

  // skellie:   : ChartDataSets[] = [
  //     { data: [0], label: 'Stewards' },
  //     { data: [0], label: 'API' }
  //   ];
  @observable
  public chartData: any[] = [];

  @action
  public fetchData() {
    let counts = [];
    this.apiService.fetchActiveStats().subscribe((actives: Active[]) => {
      for (const active of actives) {
        const id = active._id;
        const count = active.counts;
        this.chartData.push({
          data: [count],
          label: id
        });
      }
      this.chartData = counts;
    });
    this.loading = false;
  }


}
