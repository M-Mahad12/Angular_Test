import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    Name = "";
    ServerId = 2;
    Status = "";
    server:any = [];
    @Output() SendData = new EventEmitter<any>()
    OnSubmit() {
      this.server = {
        Name: this.Name,
        ServerId: this.ServerId,
        Status: this.Status
      };
      this.SendData.emit(this.server);
    }
}
