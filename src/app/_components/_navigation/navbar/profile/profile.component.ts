import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
/**
 * This component shows the profile site. Here the user can logout and display basic information about their profile.
 */
export class ProfileComponent implements OnInit {

  title = "Profile"

  constructor(private authenticationservice: AuthenticationService, private router: Router) { }

  ngOnInit()  {
  }


  
  public logout(){
    this.authenticationservice.logout();
    this.router.navigate(['/dashboard'])
  }

}
