import { LatLng } from "@agm/core";
import { DistanceM } from "./distance-m";
import { Package } from "./package";
import { RouteItem } from "./rout-item";

export class MapRoute{
    id:string = "";
    driverId:string="";
    wearHouseId:string = "";
    date:number =0;
    startPoint:LatLng;
    endPoint:LatLng;
    points:LatLng[] = [] ;
    route:any;
    routeItems:RouteItem[] = [] ;
    distances:DistanceM[] = [] ;
    packages:Package[] = [];
}