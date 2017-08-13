import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messageList = [];

  constructor(public messageService: MessageServiceProvider) {
  	this.getMessages();
  }

  getMessages() {
  	this.messageService.getMessages().subscribe(data => this.messageList = data);
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
