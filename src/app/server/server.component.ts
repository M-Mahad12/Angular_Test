import { Component, OnInit } from "@angular/core";
import { ServerModule } from "./server.module";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent
{
    
    Name = "";
    ServerId = 0;
    Status = "";
    OnSubmit()
    {
        const server = new ServerModule(this.Name = this.Name,this.ServerId = this.ServerId, this.Status = this.Status)
    }
}