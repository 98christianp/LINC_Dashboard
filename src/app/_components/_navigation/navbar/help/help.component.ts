import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
/**
 * This component shows the help screen.
 */
export class HelpComponent implements OnInit {

  title = "Help"

  constructor() { }

  ngOnInit() {
  }

}
