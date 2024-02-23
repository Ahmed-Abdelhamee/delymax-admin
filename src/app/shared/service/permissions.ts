import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class Permissons implements CanActivate {
    employee:User;
    permission:any;
    d:any;
    constructor(private toastr:ToastrService,private translate:TranslateService ,private router:Router) {

        if (localStorage.getItem('adminUser')){
            const user = localStorage.getItem('adminUser');
            let jsonObj: any = JSON.parse(user); // string to generic object first
            this.employee = <User>jsonObj;

        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       
           if(route.data || (route.data && this.employee.permission)){ 
               this.permission = JSON.stringify(this.employee.permission)
               this.d =this.permission.includes(route.data.permission)
               console.log(this.permission)
               console.log(this.d)
               if(!this.d){
                   let message = "";
                   this.translate.get("Not Authorized").subscribe(txt=>{
                       message = txt;
                   }) ;
                this.toastr.error(message) ;
                
               }
               return this.d;
           }else{
            this.toastr.error("Not Authorized");
            this.router.navigate(['/dashboard/default']);
             return false
           }
           

           return true;
      
    }
  
}

export class editProduct implements CanActivate {
    employee:User;
    constructor(private toastr:ToastrService) {

        if (localStorage.getItem('adminUser')){
            const user = localStorage.getItem('adminUser');
            let jsonObj: any = JSON.parse(user); // string to generic object first
            this.employee = <User>jsonObj;
        }
    }

    canActivate(): boolean {
        if (this.employee){
           if(this.employee.permission.edit_product){
               return true;
           }else{
            this.toastr.error("Not Authorized")
             return false
           }
            
        }else{
            return false;
        }
       
        
    }
  
}

export class deleteProduct implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
  
}