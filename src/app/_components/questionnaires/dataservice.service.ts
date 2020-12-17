import { Injectable } from '@angular/core';
import { Questionnaire } from '../../_model/questionnaire';



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  public currentQuestionnaire: Questionnaire;
  constructor() { }
}
