import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";


@Injectable({
    providedIn: 'root'
  })
  export class CheckPermisson {

    checkPermisson(check){
      
      if (localStorage.getItem('adminUser')){
        const user = localStorage.getItem('adminUser');
        let jsonObj: any = JSON.parse(user); // string to generic object first
        const employee = <User>jsonObj;
        let permission = JSON.stringify(employee.permission)
        let d = permission.includes(check)
        console.log(permission)
        console.log(d)
        
        return d;

    }  

    }

    
  }