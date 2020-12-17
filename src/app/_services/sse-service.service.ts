import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SseServiceService {

  private eventSource: EventSource;

  constructor() { }

  getEventSource(url: string): EventSource {
    this.eventSource = new EventSource(url);
    return this.eventSource;
  }

  closeEventSource() {
    this.eventSource.close();
    console.log("Closed event source");
    return;
  }
}
