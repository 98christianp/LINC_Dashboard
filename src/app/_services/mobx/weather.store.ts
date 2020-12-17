import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';
import { Item } from 'src/app/_components/dashboard/userInfo/item';
import { action } from 'mobx';
import { ApiService } from '../api.service';
import { UserInfo } from 'src/app/_model/userInfo';

@Injectable({
  providedIn: 'root'
})
export class WeatherStore {

  constructor(private apiService: ApiService) { }

  @observable
  public items: Item[] = [new Item("Regn", "Status", "assets/weather/Weather_Status_Sunny.png"),
  new Item("21°C", "Temperatur", "assets/weather/Weather_Temperature.png"),
  new Item("150 bar", "Barometertryk", "assets/weather/Weather_Gauge.png"),
  new Item("3.89 m/s", "Vindhastighed", "assets/weather/Weather_Wind4.png"),
  new Item("SW", "Vindretning", "assets/weather/Weather_Compass.png"),
  new Item("6.2 mm", "Forventet nedbør(6 timer)", "assets/weather/Weather_Rain.png")]

  @observable
  public loading: boolean = true;

  @action
  public fetchData() {
    this.apiService.getCurrentWeather().subscribe((data: any)=>{

      this.items =  this.items = [new Item(data.temp+"°C", "Temperatur", "assets/weather/Weather_Temperature.png"),
      new Item(data.pressure+" millibar", "Barometertryk", "assets/weather/Weather_Gauge.png"),
      new Item((Math.round((data.windSpeed*1000/60/60) * 100) / 100).toFixed(2)+" m/s", "Vindhastighed", "assets/weather/Weather_Wind.png"),
      new Item(data.windDir, "Vindretning", "assets/weather/Weather_Compass.png"),
      new Item(data.precip6+" mm", "Forventet nedbør(6 timer)", "assets/weather/Weather_Rain.png")]
      this.loading = false

    });
  }




}
