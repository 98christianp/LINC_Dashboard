import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import { Bus} from '../../_model/bus';
import {interval, Subscription} from 'rxjs';
import {log} from 'util';
import {LivebusService} from '../livebus.service';
@Injectable({
  providedIn: 'root'
})
export class BuslocationStore {

  subscription: Subscription;

  constructor(private apiService: ApiService,
              private _bus: LivebusService
) {
  }

  @observable
  public loading = true;

  @observable
  public buses: Bus[] = [];

  @observable
  // tslint:disable-next-line:variable-name
  public live_buses;

  @action
  public fetchData() {
    this.apiService.getBusLocations()
      .subscribe((data: Bus[]) => {
        this.buses = data;
        this.loading = false;
    });
  }

  @action
  public set_live(data) {
    this.live_buses = data;
  }







}
