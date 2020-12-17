import {Component, OnInit, Inject, Sanitizer} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Message} from '../../../../_model/message';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-confirm-message-popup',
  templateUrl: './confirm-message-popup.component.html',
  styleUrls: ['./confirm-message-popup.component.css']
})
export class ConfirmMessagePopupComponent implements OnInit {
  public safe_message_content: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ConfirmMessagePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Message) { }

  ngOnInit() {
    this.setCleanHTML();

  }

  send() {

  }

  cleanHTML(){
    return this.sanitizer.bypassSecurityTrustHtml(this.data.content);
  }

  setCleanHTML() {
    this.safe_message_content = this.cleanHTML();
  }
  close() {
    this.dialogRef.close();
  }
}
