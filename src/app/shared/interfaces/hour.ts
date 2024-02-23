export class Hour{
    id?:string;
    hour?:number;
    bonus?:number;
    garanti?:number;
    sp?:boolean;
    hd?:boolean;
    enable?:boolean;
    dbId?:string;
    day?:string;
    zoneUsers?:ZoneUser[];
}

export class ZoneUser{
   dbId?:string;
}