import { Component, OnInit } from '@angular/core';
import {Message} from "../../../_model/message";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ApiService} from "../../../_services/api.service";
import { DatePipe} from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ConfirmMessagePopupComponent} from './confirm-message-popup/confirm-message-popup.component';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  title = "Create new message";

  message: Message;
  message_title: string;
  message_expiration_date: Date;
  message_type = "EMAIL";
  message_content: string;
  return_val: string;
  isEmail = true;
  safe_message_content: SafeHtml;
  preview_destination: string;
  fileToUpload: File = null;

  content_encoded: string;

  mailPrerequisites: boolean;
  loadingSend: boolean;
  loadingSave: boolean;
  constructor(private sanitizer: DomSanitizer, private api: ApiService, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getActiveMessages();
  }

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsText(files.item(0), 'base64')

    //reader.readAsDataURL(files.item(0));
    this.fileToUpload = files.item(0);
    reader.onload = () => {
      const csv: string = reader.result as string;
      this.message_content=csv;
    };
  }

  set_isEmail($event: any) {
    this.message_type = $event.target.value;
    this.isEmail = $event.target.value === 'EMAIL';
  }

  genMessage(){
    const now = new Date();
    const nowString = this.datePipe.transform(now, 'yyyy-MM-dd hh:ss');
    let msg = new Message(this.message_title,
      nowString,
      this.datePipe.transform(this.message_expiration_date, 'yyyy-MM-dd hh:ss'),
      this.message_type,
      this.message_content
    );
    this.message = msg;
    return msg;
  }

  sendPreview(){
    console.log(this.message_content);

    this.loadingSend = true;
    this.api.sendPreview(this.preview_destination, this.message_content)
      .subscribe(data => {
        this.loadingSend = false;
        this.return_val = data.toString();
      });
  }

  saveMessage() {
    const dialogRef = this.dialog.open(ConfirmMessagePopupComponent, {
      width: '50vw',
      data: this.genMessage()
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //let encoded_message = btoa(this.message.content);
        //this.message.content = encoded_message
        this.api.addMessage(this.message)
          .subscribe(res => {
            console.log(res);
            this.return_val = res;
        });
      }
    });
  }
  setmailPrerequisites(){
    this.mailPrerequisites = !!(this.preview_destination && this.message_content && this.isEmail);
  }
  setPreviewDestination($event: any) {
    this.preview_destination = $event.target.value;
  }
}
