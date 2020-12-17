import { Component, OnInit } from '@angular/core';

import { Instance } from '../../_model/tableInstance'
import {Csvexporter } from '../../_utility/csvexporter'


/**
 * This component shows the beacons. It is used to show activity of the beacons
 */
@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.css']
})
export class BeaconComponent implements OnInit {
  title = "Beacon"

  // Dummy data
  instances = [
    new Instance([1, "Beacon_1", "Building 321", "Active"]),
    new Instance([2, "Beacon_2", "Building 303", "Active"]),
    new Instance([3, "Beacon_3", "Building 101", "Active"]),
    new Instance([4, "Beacon_4", "Building 430", "Inactive"]),
    new Instance([5, "Beacon_5", "Building 308", "Active"]),
    new Instance([6, "Beacon_6", "Building 341", "Active"]),
    new Instance([7, "Beacon_7", "Building 241", "Active"]),
  ];


  constructor() { }

  ngOnInit() {
  }

  // Use the csvexporter to download the tabledata
  public downloadTableData(){
    Csvexporter.downloadFile(this.instances);
  }

}
