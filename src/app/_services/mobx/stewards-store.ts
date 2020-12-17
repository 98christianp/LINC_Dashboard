import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class StewardsStore {

  constructor(private apiService: ApiService) { }

  @observable
  public stewards: Array<any> = [];


  @observable
  public loading = true;

  @action
  public fetchData() {
    this.apiService.getStewards().subscribe((data: Array<any>) => {
      this.loading = false;
      this.stewards = data;
    });
  }




}
