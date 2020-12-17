import { Component, OnInit } from '@angular/core';
import { StewardCategoriesStore} from '../../_services/mobx/category-store';
import {StewardeventsStore} from '../../_services/mobx/stewardevents-store';
import { StewardsStore} from '../../_services/mobx/stewards-store';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-steward',
  templateUrl: './steward.component.html',
  styleUrls: ['./steward.component.css']
})
export class StewardComponent implements OnInit {
  title = 'Steward events';

  displayedColumns = ['timestamp', 'title', 'category', 'steward_id', 'note', 'bus_id'];
  public msg: any;
  constructor(
    public categoriesStore: StewardCategoriesStore,
    public stewardEvents: StewardeventsStore,
    public stewards: StewardsStore,
    ) { }



  ngOnInit() {
    this.categoriesStore.fetchData();
    this.stewardEvents.fetchData();
    this.stewards.fetchData();
  }
}
