import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template:`<app-server></app-server>
  // <h1>{{_name}}</h1>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  _name: string = 'My Name Is Bharani';

  allowEnable = false;
  serverNewStatus: string = 'On';
  serverStatus: string = 'Server is ';
  serverName:string;
  private _onOff: boolean = true;

  constructor() {
    setTimeout(() => {
      this.allowEnable = true;
    }, 5000);
  }

  onCreateServer() {
    if (this._onOff) {
      this.serverNewStatus = 'Off';
      this._onOff=false;
    } else {
      this.serverNewStatus = 'On';
      this._onOff=true;
    }

  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event)
  }

  ngOnInit() {
  }

}
