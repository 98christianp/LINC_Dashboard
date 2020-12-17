import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from '../_model/message';


/**
 * @description Service that communicates with the rest backend
 * @author Mathias Milter Liboriussen
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // The production server or the local server
  private REST_API_SERVER = 'https://python-service-linc-dtu.eu-de.mybluemix.net/';
  private REST_API_SERVER2 = 'http://localhost:3000/';


  constructor(private http: HttpClient) {
  }

  public getUserEvents() {
    return this.http.get(this.REST_API_SERVER2 + `getSignups`);
  }

  // Get the data from the userinfo endpoint of the backend
  public getUserInfo() {
    return this.http.get(this.REST_API_SERVER2 + `users/count`);
  }

  public getBusLocations() {
    return this.http.post(this.REST_API_SERVER2 + 'getBusLocations?id=1', {});
  }

  // Get the data from the current weather endpoint of the backend
  public getCurrentWeather() {
    return this.http.get(this.REST_API_SERVER2 + `getCurrentWeather`);
  }

  public getActiveMessages() {
    return this.http.post(this.REST_API_SERVER2 + `getFullMessages`, '');
  }

  public sendPreview(to, content) {

    const headers = new HttpHeaders({
        'Content-Type': 'Application/Json'
      }
    );
    console.log(content);
    return this.http.post(this.REST_API_SERVER2 + `sendPreview`, {to, content}, {...headers, responseType: 'text'});
  }

  addMessage(message) {
    const headers = new HttpHeaders(
      {'Content-Type': 'Application/Json'}
    );
    return this.http.post(this.REST_API_SERVER2 + `saveMessage`, {
        title: message.title, sent_timestamp: message.sent_timestamp,
        expiration_date: message.expiration_date, message_type: message.message_type, content: message.content
      },
      {...headers, responseType: 'text'});
  }

  getCategories() {
    const headers = new HttpHeaders(
      {'Content-Type': 'Application/Json'}
    );
    return this.http.post(this.REST_API_SERVER2 + `getCategories`, {});
  }

  getStewardEvents() {
    return this.http.post(this.REST_API_SERVER2 + `getStewardlogs`, {});
  }

  getStewards() {
    return this.http.post(this.REST_API_SERVER2 + `getStewards`, {});
  }

  getErrors() {
    return this.http.get(this.REST_API_SERVER2 + `getErrors`);
  }

  sendCategory(data: any, oldTitle: string) {
    console.log(data);
    const headers = new HttpHeaders(
      {'Content-Type': 'Application/Json'}
    );
    return this.http.put(this.REST_API_SERVER2 + `postCategory`, {
        old_title: oldTitle,
        title: data.title,
        category: data.category,
        icon: data.icon
      },
      {...headers, responseType: 'text'});
  }

  fetchErrors() {
    return this.http.get(this.REST_API_SERVER2 + `getErrors`);
  }

  fetchActiveStats() {
    return this.http.get(this.REST_API_SERVER2 + `getActiveStats`);
  }
}

