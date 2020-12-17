import { Injectable } from '@angular/core';
import { Message } from "../../_model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  currentMessage: Message;

  constructor() { }
}
