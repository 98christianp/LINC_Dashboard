import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ApiService } from '../../../_services/api.service';

import { UserInfoStore } from 'src/app/_services/mobx/user-info.store';
import {SseService} from '../../../_services/events.service';

@Component({
  selector: 'app-userInfo',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlaceholderComponent implements OnInit {
  constructor(public userInfoStore: UserInfoStore, private sseClient: SseService) {
  }

  ngOnInit() {
    this.sseClient
      .getServerSentEvent("https://faust-ibm-linc-eventstream.eu-de.cf.appdomain.cloud/user_data")
      .subscribe(data => this.userInfoStore.addSignups(data.data));
  }
  ngOndestroy() {
    this.sseClient.destroy();
  }

}
