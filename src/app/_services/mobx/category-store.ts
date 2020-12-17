import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import { StewardCategories } from '../../_model/stewardCategories';

@Injectable({
  providedIn: 'root'
})
export class StewardCategoriesStore {

  constructor(private apiService: ApiService) { }

  @observable
  public categories: Array<StewardCategories>;

  @observable
  public loading = true;

  @action
  public fetchData() {
    this.apiService.getCategories().subscribe((data: Array<StewardCategories>) => {
      this.categories = data;
      this.loading = false;
    });
  }




}
