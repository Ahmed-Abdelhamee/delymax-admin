import { Package } from "./package";
import { RouteItem } from "./rout-item";
import { RouteItemImport } from "./route-item-import";

export class RouteData{
    id:string;
    name:string;
    companyId:string;
    routeItems:[RouteItem];
    packages:[Package];
}