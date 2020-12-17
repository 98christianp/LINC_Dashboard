import { Component, OnInit } from '@angular/core';
import { ActiveMessageStore} from "src/app/_services/mobx/active-message.store";
import { Message } from "../../_model/message";
import { Router } from '@angular/router';
import { MessageDataService} from "./message-data.service";
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  title = 'Communication';
  currentMessage: Message;
  description = 'Here you can view all active messages (current date is before expiration date). You can also view and ' +
    'and additional messages. In order to save a message you must have an HTML file ready that can be uploaded. You will be given the ' +
    'option to preview the mail before saving it, once you confirm; mails will be sent to ALL users registered';
  encode_utf8(s) {
    return unescape(encodeURIComponent(s));
  }

  decode_utf8(s) {
    return decodeURIComponent(escape(s));
  }
  changeID(clicked: Message) {
    this.currentMessage = clicked;
    this.dataService.currentMessage = clicked;
  }

  constructor(private router: Router, public messageStore: ActiveMessageStore, public dataService: MessageDataService) { }

  ngOnInit() {
    this.messageStore.fetchData();
   }
  goToView() {
    this.router.navigateByUrl('/communication/viewMessage');
  }

  goToNew() {
    this.router.navigateByUrl('communication/newMessage');
  }


}
