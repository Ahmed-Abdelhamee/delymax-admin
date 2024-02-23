import { RouteItem } from "./rout-item";

export class RouteItemM{
    id = "";
    routeOrder = 0;
    customerPhone = "";
    customerName = "";
    apptNo = "-";
    customerAddress = "";
    zipCode = "";
    longtude = 0.0;
    latitude = 0.0;
    startTime = 0;
    endTime = 0;
    status = 0;
    routeId = "";
    driverRouteId = "";
    jops=0;
    date :string;
    routeCreated = false;
    selected = false;

    constructor(routeItem:RouteItem){
    this.id = routeItem.id;
    this.routeOrder = routeItem.routeOrder;
    this.customerPhone = routeItem.customerPhone;
    this.customerName = routeItem.customerName;
    this. apptNo = routeItem.apptNo;
    this.customerAddress = routeItem.customerAddress;
    this.zipCode = routeItem.zipCode;
    this.longtude = routeItem.longtude;
    this.latitude = routeItem.latitude;
    this.startTime = routeItem.startTime;
    this.endTime = routeItem.endTime;
    this.status = routeItem.status;
    this.routeId = routeItem.routeId;
    this.driverRouteId = routeItem.driverRouteId;
    this.jops=routeItem.jops;
    this.date =routeItem.date;
    this.routeCreated = routeItem.routeCreated;
    this.selected = false;

    }

}
