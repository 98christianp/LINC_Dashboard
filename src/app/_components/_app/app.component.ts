import { Component, OnInit } from '@angular/core';
import { UserInfoStore } from 'src/app/_services/mobx/user-info.store';
import { WeatherStore } from 'src/app/_services/mobx/weather.store';
import { ActiveMessageStore } from 'src/app/_services/mobx/active-message.store';
import { StewardCategoriesStore  } from '../../_services/mobx/category-store';
import {StewardeventsStore} from '../../_services/mobx/stewardevents-store';
import { StewardsStore} from '../../_services/mobx/stewards-store';
import {BuslocationStore} from '../../_services/mobx/buslocation.store';
import {ErrorsStore} from '../../_services/mobx/errors.store';
import {ActiveStore} from '../../_services/mobx/active.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Root of the application
export class AppComponent implements OnInit{

  title = 'LINC Dashboard';
  constructor(private userInfoStore: UserInfoStore,
    private weatherStore: WeatherStore,
    private activeMessageStore: ActiveMessageStore,
    private categoryStore: StewardCategoriesStore,
    private stewardsStore: StewardsStore,
    private eventsStore: StewardeventsStore,
    private buslocationStore: BuslocationStore,
    private errorStore: ErrorsStore,
    private activesStore: ActiveStore,
    ){}

  ngOnInit(): void {
    this.userInfoStore.fetchData();
    this.weatherStore.fetchData();
    this.activeMessageStore.fetchData();
    this.categoryStore.fetchData();
    this.stewardsStore.fetchData();
    this.eventsStore.fetchData();
    this.buslocationStore.fetchData();
    this.errorStore.fetchErros();
    this.activesStore.fetchData();
  }

}
