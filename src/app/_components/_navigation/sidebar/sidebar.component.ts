import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menusActive = [false,false,false,false];
  constructor() { }

  ngOnInit() {
  }
  ToggleSubMenu(i: number) {
    this.menusActive[0] = !this.menusActive[0];
  }

}
