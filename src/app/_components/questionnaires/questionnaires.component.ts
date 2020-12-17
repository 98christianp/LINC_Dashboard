import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../../_model/questionnaire';
import { Csvexporter } from '../../_utility/csvexporter';
import { DataserviceService } from './dataservice.service';
import { Router } from '@angular/router';

/**
 * @description Questionnaire component showing all questionnaires
 * @author Mathias Milter Liboriussen
 */
@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {

  title = "Questionnaire";
  currentQuestionnaire: Questionnaire;
  questionnaires: Questionnaire[];

  constructor(private router: Router, private dataservice: DataserviceService) { }

  ngOnInit() {
    this.questionnaires = [
      new Questionnaire(1, 'Do you feel secure in the bus?', 'To gauge overall sentiment of busses', "https://www.example.com", ["Weatherstatus = rain", "Passengers in the bus > 6", "Time is later than 18.00"],
        2, 10)
      // new Questionnaire("Do you feel secure in the bus?", 12, 5, true, "https://www.example.com", ["Weatherstatus = rain", "Passengers in the bus > 6", "Time is later than 18.00"], ''),
      // new Questionnaire("Would you rather take the bike?", 30, 24, true, "https://www.example.com", ["Weatherstatus = sunny"]),
      // new Questionnaire("Do feel responsible for the bus?", 7, 7, false, "https://www.example.com", ["Passengers in the bus < 6"]),
      // new Questionnaire("Why did you not take the bike?", 12, 5, true, "https://www.example.com", ["Weatherstatus = cloudy", "Forecast says rain", "Windspeed = 7.23m/s", "Time is later than 08.00", "Lunch in the canteen is: salad"])
    ]
    this.currentQuestionnaire = this.questionnaires[0];
    this.dataservice.currentQuestionnaire = this.questionnaires[0];
  }


  public downloadTableData(){
    Csvexporter.downloadFile(this.questionnaires);
  }

  public changeID(clicked: Questionnaire){
    this.currentQuestionnaire = clicked;
    this.dataservice.currentQuestionnaire = clicked;
  }

  public goToEdit(){
    this.router.navigateByUrl('/questionnaire/editQuestionnaire', { state: this.currentQuestionnaire });
  }

  goToNew() {
    this.router.navigateByUrl('/questionnaire/new');
  }
}
