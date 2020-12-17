import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import {interval, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEventsStore  {

  subscription: Subscription;

  constructor(private apiService: ApiService,
  ) {
    this.subscription = interval(5000).subscribe((x => {
      this.fetchData();
    }));
  }

  @observable
  public loading = true;

  @observable
  public events: any[] = [];


  @action
  public fetchData() {
    console.log('Called fetch user events');
    this.apiService.getUserEvents()
      .subscribe((data: any[]) => {
        this.events = data;
      });
  }

}
