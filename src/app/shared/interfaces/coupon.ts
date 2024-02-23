export class Coupon{
    id?:number;
    code?:string;
    discount?:number;
    startDate?:string;
    endDate?:string;
    limit?:number;

   constructor(id:number,
    code:string,
    discount:number,
    startDate:string,
    endDate:string,
    limit:number){

    this.id=id;
    this.code=code;
    this.discount=discount;
    this.startDate=startDate;
    this.endDate=endDate;
    this.limit=limit;
   }
}   