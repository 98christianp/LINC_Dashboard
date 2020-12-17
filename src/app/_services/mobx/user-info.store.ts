import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
import { Item } from 'src/app/_components/dashboard/userInfo/item';
import { ApiService } from '../api.service';
import { UserInfo } from 'src/app/_model/userInfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoStore {

  constructor(private apiService: ApiService) {
    this.fetchData();
   }


  @observable
  public items: Item[] = [new Item(0, 'Signups', 'assets/dashboard/avatar1.png'),
  new Item(0, 'Current Passengers', 'assets/dashboard/avatar2.png'),
  new Item(0, 'Active Users', 'assets/dashboard/avatar4.png'),
  new Item(0, 'Inactive Users', 'assets/dashboard/avatar3.png')];

  @observable
  public loading = true;

  @observable
  public newestId: string;

  @action
  public fetchData() {
    this.apiService.getUserInfo().subscribe((data: UserInfo) => {
      this.items = [new Item(data.userCount, 'Signups', 'assets/dashboard/avatar1.png'),
            new Item('-', 'Current Passengers', 'assets/dashboard/avatar2.png'),
            new Item(data.activeUsers, 'Active Users', 'assets/dashboard/avatar4.png'),
            new Item(data.inactiveUsers, 'Inactive Users', 'assets/dashboard/avatar3.png')];
      this.loading = false;
    });
  }

  @action
  public setId(id: string) {
    this.newestId = id;
  }

  @action
  public addSignups(id: string) {
    if (id !== this.newestId) {
      this.fetchData();
      this.newestId = id;
    }
 }




}
