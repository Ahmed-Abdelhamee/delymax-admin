export interface Roles {
    admin: boolean;
  }
  
  export class Customer {
    public email: string;
    public photoURL?: string;
    public roles?: Roles;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public phone?: string;
    public orders?: object;
    public confirmPassword?: string;
    public uid?: string;
    public state?:string;
    public town?:string;
    public balanceH:number;
    public balanceM:number;
    public balanceW:number;
  
    
  }
  