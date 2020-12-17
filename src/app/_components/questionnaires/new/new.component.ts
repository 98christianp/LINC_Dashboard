import { Component, OnInit } from '@angular/core';
import {DialogComponent} from '../edit/dialog/dialog.component';
import {MatIconRegistry} from '@angular/material/icon';
import {DataserviceService} from '../dataservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import {StewardCategoriesStore} from '../../../_services/mobx/category-store';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  activeSelected = false;
  public targetUser: any;
  public selected22: any;
  public selected21: any;
  public rules = "";
  public url = "";
  public desc = "";
  public name = "";
  public ifRules = ['User has more than']; // can be extended
  public value: number;
  public ifVal: number;
  public ifVariable: any;
  ifVariables = ['experiences with emergency stops', 'trips recorded', 'minutes engaged with the system'];

  constructor(public dataService: DataserviceService, private router: Router, private activatedRoute: ActivatedRoute,
              public dialog: MatDialog, iconRegistry: MatIconRegistry,
              public stewardCategories: StewardCategoriesStore) { }

  ngOnInit() {
    console.log(this.stewardCategories.categories);
  }



  public save(){
    if (this.targetUser === 'all') {
      console.log(this.url, this.name, this.desc);
    } else {
      console.log(this.rules, this.url, this.desc, this.name, this.value, this.ifVal, this.ifVariable);
    }
  }

  makeSurvey() {
    return;
  }
}
