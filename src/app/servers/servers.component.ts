import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
@Input() Name:string;
@Input() ServerId:Number;
@Input() Status:string;
@Input() data: any= [];
constructor(){
  this.Name = "";
  this.ServerId=0;
  this.Status="Online";
}
}
