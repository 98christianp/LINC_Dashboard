import {Injectable, NgZone} from '@angular/core';
import {SseServiceService} from './sse-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivebusService {

  constructor(private _zone: NgZone, private _sseService: SseServiceService) { }

  // TODO: bug when angular component is destroyed sse is not, resulting in multiple events
  getServerSentEvent(url: string) {
    return Observable.create(obs => {
      const eventSource = this._sseService.getEventSource(url);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          obs.next(event);
        });
      };
      eventSource.onerror = error => {
        this._zone.run(() => {
          console.log('error');
          obs.error(error);
        });
      };
    });
  }

  closeConn(){
    this._sseService.closeEventSource()
  }
}
