import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from 'src/app/_model/questionnaire';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataserviceService } from '../dataservice.service';

/**
 * @description Component showing a questionnaire editor page
 * @author Mathias Milter Liboriussen
 */
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  currentQuestionnaire: Questionnaire;
  title = 'Edit Questionnaire';
  chartData: { label: string; count: number; }[];
  response: string;


  constructor(public dataService: DataserviceService, private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    // Register the delete icon, so that it can be used in the html
    iconRegistry.addSvgIcon(
      'delete-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/delete-24px.svg'));
  }

  ngOnInit() {
    this.currentQuestionnaire = this.dataService.currentQuestionnaire;
    this.chartData = [{label: 'Not Responded', count: this.currentQuestionnaire.SentOut - this.currentQuestionnaire.Responses}, {label: 'Responded', count: this.currentQuestionnaire.Responses}];

  }

  ngOnDestroy(): void {
    localStorage.removeItem('currentQuestionnaire');
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40%',
      data: {response: this.response}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addRule(result);
    });
  }

  public addRule(result) {
    this.currentQuestionnaire.rules.push(result);
    this.cacheQuestionnaireToStorage();
  }

  public removeRule(rule) {
    this.currentQuestionnaire.rules.splice(rule, 1);
    this.cacheQuestionnaireToStorage();
  }

  public saveChanges() {
    // TODO: Save the current questionnaire to the database
    if (confirm('Are you sure?')) {
      console.log('Saving to database');
    } else {
      console.log('Cancel save');
    }

    console.log('Saving change');
  }

  public deleteQuestionnaire(){
    // TODO: implement delete from database
    if (confirm('Are you sure? This will delete the questionnaire completely!!')) {
      console.log('Deleting questionnaire');
    } else {
      console.log('Cancel deletion of questionnaire');
    }
  }

  private cacheQuestionnaireToStorage() {
    localStorage.setItem('currentQuestionnaire', JSON.stringify(this.currentQuestionnaire));
  }

}
