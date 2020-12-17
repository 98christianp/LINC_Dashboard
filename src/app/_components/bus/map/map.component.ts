import { Component, OnInit } from '@angular/core';
import {BuslocationStore} from '../../../_services/mobx/buslocation.store';
import {Bus} from '../../../_model/bus';
import {LngLatLiteral} from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';
import {LngLat} from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public bus: BuslocationStore) { }
  center: LngLat;
  ngOnInit() {
    this.center = this.findCentral();
  }

  findCentral(): LngLat {
    let lat = 0;
    let long = 0;
    this.bus.buses.forEach( (bus: Bus) => {
      lat += bus.lat;
      long += bus.long;
    });
    return new LngLat(long/3, lat/3);
  }

  public getKeys() {
    console.log(Object.keys(this.bus.live_buses));
    return  Object.keys(this.bus.live_buses);
  }

}
