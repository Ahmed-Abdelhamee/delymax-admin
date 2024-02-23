export class Notification{
    id?:string;
    title?:string;
    content?:string;
    seen?:boolean;
    orderId?:string;
    shopId?:string;
    shopSeen?:boolean;
    userSeen?:boolean;
    custId?:string;
    date?:string;

    constructor(id:string,
        title:string,
        content:string,
        seen:boolean,
        orderId:string,
        shopId:string,
        shopSeen:boolean,
        userSeen:boolean,
        custId:string,
        date:string){
            this.id=id;
            this.title=title;
            this.content=content;
            this.seen=seen;
            this.shopSeen = shopSeen
            this.orderId=orderId;
            this.shopId=shopId;
            this.userSeen=userSeen;
            this.custId=custId;
            this.date=date;

    }

    
}