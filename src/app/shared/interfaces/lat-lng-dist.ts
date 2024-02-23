export class LatLngDis{
    latitude:number;
    longitude:number;
    distance:number = 0;

    constructor(latitude:number,
        longitude:number,
        distance:number){
            this.latitude=latitude;
            this.longitude=longitude;
            this. distance=  distance;
        }
}