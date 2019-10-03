import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Hi is yourname ';
  public myname:string; 

  constructor(){
    //this.myname = this.myname == '' ? 'Please Enter Your Name' : this.myname;
  }
 
}
