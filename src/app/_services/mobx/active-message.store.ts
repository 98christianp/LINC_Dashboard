import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import { Message } from "../../_model/message";

@Injectable({
  providedIn: 'root'
})
export class ActiveMessageStore {


  constructor(private apiService: ApiService) { }

  @observable
  public loading: boolean = true;

  @observable
  public messages: Message[];

  @action
  public fetchData() {
    this.apiService.getActiveMessages().subscribe((data: Message[]) => {
      this.messages = data;
      this.loading = false;
    });
  }




}
