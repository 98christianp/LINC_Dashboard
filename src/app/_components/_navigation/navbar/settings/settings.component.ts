import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
/**
 * This component shows the setting side. The user will be able to adjust settings for the site.
 */
export class SettingsComponent implements OnInit {

  title = "Settings"

  constructor() { }

  ngOnInit() {
  }

}
