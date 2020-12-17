import {Component, OnInit, OnDestroy} from '@angular/core';

import {Csvexporter} from '../../_utility/csvexporter';
import {Bus} from '../../_model/bus';
import {BuslocationStore} from '../../_services/mobx/buslocation.store';
import {LivebusService} from '../../_services/livebus.service';
import {LngLat} from 'mapbox-gl';


/**
 * @description Buscomponent showing the busdata
 * @author Mathias Milter Liboriussen
 */
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit, OnDestroy {


  title = "Businformation";

  constructor(private busStore: BuslocationStore, private _bus: LivebusService) {
  }

  currentBus = this.busStore.buses[0];
  selected = "x";
  buses = {};
  center = new LngLat(12.5229, 55.7923); // center at dtu to init
  zoom = 14;
  public changeID(clicked) {
    this.currentBus = clicked;
    this.selected = clicked;
  }

  public downloadTableData() {
    Csvexporter.downloadFile(this.busStore.buses);
  }

  ngOnInit() {
    this._bus.getServerSentEvent('https://faust-ibm-linc-eventstream.eu-de.cf.appdomain.cloud/bus_data')
      .subscribe((data) => {
        console.log(data);
        for (const bus in data) {

        }
        if (data.data !== '{}') {
          console.log("Bus data! ");
          this.buses = JSON.parse(data.data);
        }
      });
  }

  public getKeys() {
    return Object.keys(this.buses);
  }

  // Generate a random number
  // TODO: remove when database data is used instead
  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  findCentral(): LngLat {
    let lat = 0;
    let long = 0;
    for (let key in this.buses){
      const value = this.buses[key];
      lat += value['lat'];
      long += value['lon'];
    }
    return new LngLat(long , lat );

  }

  busMarker(bus: any) {
    if (bus == 'NaN') {
      return  "url('./assets/dashboard/bus_pin_green.png')"
    }
    return "url('./assets/dashboard/bus_pin_es.png')"
  }


  setCenter(param: any[]): void {
    this.center = new LngLat(param[0], param[1]);
    console.log("set center");
  }

  ngOnDestroy() {
    this._bus.closeConn();
  }
}
