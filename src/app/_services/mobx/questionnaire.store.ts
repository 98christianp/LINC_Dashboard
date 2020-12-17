import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import { Questionnaire } from 'src/app/_model/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireStore {

  constructor(private apiService: ApiService) { }

  @observable
  public Questionnaires: Array<Questionnaire>;

  @observable
  public loading = true;

  @action
  public fetchData() {
    //   this.loading = false;
  }
}
