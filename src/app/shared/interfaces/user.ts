import { Permission } from "./permission";

export class User {
    public email: string;
    public roles?: boolean;
    public allZone?:boolean;
    public state?:string;
    public town?:string;
    public shop?: string;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public phone?: string;
    public id?: string;
    public type?:string;
    public permission:Permission;
    public balance?:number;
  
   
}