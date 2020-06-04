import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myMessage: string[];
  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.myMessage = this.messageService.messages;
  }

}
