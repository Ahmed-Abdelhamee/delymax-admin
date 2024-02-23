import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AdminPermissons implements CanActivate {
    employee:User;
    permission:any;
    d:any;
    constructor(private toastr:ToastrService,private translate:TranslateService,private router:Router) {

        if (localStorage.getItem('adminUser')){
            const user = localStorage.getItem('adminUser');
            let jsonObj: any = JSON.parse(user); // string to generic object first
            this.employee = <User>jsonObj;

        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       
           if(route.data || (route.data && this.employee)){ 
               if(this.employee.roles){
                this.toastr.error("Not Authorized");
                this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.employee.shop}});
                return false;
               }else{
                return true
               }
               
           }
           
      
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