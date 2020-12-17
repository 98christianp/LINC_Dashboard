import { Component, OnInit } from '@angular/core';
import {Message} from "../../../_model/message";
import {ActivatedRoute, Router} from "@angular/router";
import { MessageDataService } from "../message-data.service";
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  currentMessage: Message;
  public body: SafeHtml;
  public exp_date: Date;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, public dataservice: MessageDataService, private sanitizer: DomSanitizer) {
    this.body = this.sanitizer.bypassSecurityTrustHtml(this.getHTMLval());
  }
  getHTMLval() {
    return decodeURIComponent(atob(this.dataservice.currentMessage.content).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }


  ngOnInit() {
    this.currentMessage = this.dataservice.currentMessage;
    this.exp_date = new Date(this.currentMessage.expiration_date);
  }
}
