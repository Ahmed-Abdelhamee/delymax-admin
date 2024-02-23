import { DistanceM } from "./distance-m";
import { LatLng } from "./lat-lng";
import { Package } from "./package";
import { RouteItem } from "./rout-item";

export class MapRoute{
    id:string;
    driverId:string;
    companyId:string;
    date:number;
    name:string;
    startPoint:LatLng;
    endPoint:LatLng;
    points:[LatLng];
    packages:[Package]
    route:any;
    routeItems:[RouteItem];
    distances:[DistanceM];
    mainRouteId:string;
    wearHouseId:string;

    constructor(id:string,
        mainRouteId:string,
        name:string,
        companyId:string,
        date:number,
        packages:[Package],
        routeItems:[RouteItem]){
            this.id = id;
            this.mainRouteId=mainRouteId;
            this.name = name;
            this.driverId = "";
            this.date = date;
            this.companyId = companyId;
            this.packages = packages;
            this.routeItems = routeItems;
        }
}