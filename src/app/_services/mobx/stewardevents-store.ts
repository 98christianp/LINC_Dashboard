import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class StewardeventsStore {

  constructor(private apiService: ApiService) { }

  @observable
  public stewardEvents: Array<any>;

  @observable
  public loading = true;

  @action
  public fetchData() {
    this.apiService.getStewardEvents().subscribe((data: Array<any>) => {
      this.stewardEvents = data;
      this.loading = false;
    });
  }




}
