import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  allowNameReset = false;
  details = [];
  displayDetails = true;
  counter = 0;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000 );
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
  }


  addDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.details.push({text: 'The time is ' + new Date().getTime(), counter: this.counter++});
  }
}
