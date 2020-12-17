import { Component, OnInit } from '@angular/core';
import { WeatherStore } from 'src/app/_services/mobx/weather.store';

/**
 * @description Weather component showing current weather data
 * @author Mathias Milter Liboriussen
 */
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  constructor(public weatherStore: WeatherStore) { }
  title = "Weather";

  ngOnInit() {

    this.weatherStore.fetchData();

  }


}
