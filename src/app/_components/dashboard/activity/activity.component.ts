import { Component, OnInit } from '@angular/core';

import { Instance } from '../../../_model/tableInstance';
import {UserEventsStore} from '../../../_services/mobx/userEvents.store';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  instances = [
    new Instance([1, "New user signup", "13.23", "Android"]),
    new Instance([2, "New passenger on bus 1", "13.14", "Beacon"]),
    new Instance([3, "New passenger on bus 1", "13.14", "Beacon"]),
    new Instance([4, "New passenger on bus 1", "13.14", "Beacon"]),
    new Instance([5, "New passenger on bus 1", "13.14", "Beacon"]),
    new Instance([6, "New signup", "12.48", "iOS"]),
    new Instance([7, "Passenger left bus 2", "12.37", "Beacon"]),
    new Instance([8, "Passenger left bus 2", "12.34", "Beacon"]),
    new Instance([9, "New answer to questionaire 5", "11.08", "iOS"]),
    new Instance([10, "New answer to questionaire 2", "10.13", "Android"]),
    new Instance([11, "New signup", "07.58", "iOS"])
  ];

  instance = this.instances[0]

  constructor(public userEvents: UserEventsStore) { }

  ngOnInit() {
    this.userEvents.fetchData();
  }

}
