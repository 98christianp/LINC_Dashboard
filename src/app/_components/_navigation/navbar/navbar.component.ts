import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * Navbar component is the navigation bar at the top of the site
 */

export class NavbarComponent implements OnInit {

  // Variables to control if navbar contains sidebar (when on mobile)
  navbarOpen = false;
  showEkstra = false;

  // Toggle the navbar (on mobile)
  toggleNavbar(showEkstra: boolean) {
    this.navbarOpen = !this.navbarOpen;
    if (showEkstra) {
      this.showEkstra = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
