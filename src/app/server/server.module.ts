export class ServerModule
{
    public Name: string;
    public ServerId:Number;
    public Status: string;
    constructor(Name: string,ServerId:Number,Status: string)
    {
        this.Name = Name;
        this.ServerId = ServerId;
        this.Status = Status;
    } 
}