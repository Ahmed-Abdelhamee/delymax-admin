import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Customer } from '../interfaces/customer';
import { AppSetting } from '../interfaces/app-setting.model';
import { Address } from '../interfaces/address';
import { UsersModule } from 'src/app/components/users/users.module';
import { User } from '../interfaces/user';

import { ok } from 'assert';
import { Token } from '../interfaces/token';
import { DeliveryBoy } from '../interfaces/delivery-boy';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { CollectorAccount } from '../interfaces/collector-account';
import { Company } from '../interfaces/company';
import { Wearhouse } from '../interfaces/wearhouse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  removeUser(id: any) {
    return this.db.database.ref('/managers/'+id).remove();
  }
  isAuthenticated():boolean {
    if (localStorage.getItem('adminUser')){
      const user = localStorage.getItem('adminUser');
      if(!user){
       return false; 
      }else{
        return true;  
      }
        
    }else{
      return false; 
    }
   
  }

  public user: Observable<User>;
  public appSetting: Observable<AppSetting>;
  public appS : AppSetting ;
  public managers:User[];
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private messageService: ToastrService
  ) {
    
    this.getUsers();

  }

  

  public getAppSetting(): Observable<AppSetting | null> {
    console.log("appcalled")
    return this.db
      .object<AppSetting>('AppSetting')
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
          
            this.appS = result;
            return of(result);
          } else {
            this.messageService.error(`Found no AppSetting`);
            return of(null);
          }
        }),
    
      );
  
  }

  public updateCollectorCollect(dId:string) {
    const dbOperation = this.db
      .object('managers/'+dId+'/balance')
      .set(0)
      .then((response) => {
        
        return status;
      })
      .catch((error) => {
        
        return error;
      });
    return fromPromise(dbOperation);
  }

  public addBalanceLogCollector(id:string,bId:string,time:number,type:string,amount:number) {
    this.db.object('/colloector/' + id + '/'+bId).update({
      id:bId,
      time: time,
      type: type,
      amount:amount,
      clientId:"admin",
      clientName:"admin"
    });
  }

  public getAllCollectorAccounting(id:string):Observable<CollectorAccount[]>{
    return this.db
    .list<CollectorAccount>('colloector/'+id, (ref) => ref)
    .valueChanges()
    .pipe(map((arr) => 
    arr.reverse()
    
    ));
  }

  public updateCollectorAdd(dId:string,balance:number) {
    const dbOperation = this.db
      .object('managers/'+dId+'/balance')
      .set(balance)
      .then((response) => {
        
        return status;
      })
      .catch((error) => {
        
        return error;
      });
    return fromPromise(dbOperation);
  }

  public getAddressess(uid): Observable<Address[]> {
    return this.db
    .list<Address>('address', (ref) => ref.orderByChild('custId').equalTo(uid))
      .valueChanges()
      .pipe(map((arr) => 
      arr.reverse()
      
      ));
  }

 

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  // Sign in with Facebook
 FacebookAuth() {
  return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    console.log("auth login")
    
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        console.log(result.additionalUserInfo)
        if(result.additionalUserInfo.isNewUser){
          let firstName = '';
          let lastName = '';
          firstName = result.additionalUserInfo.profile.given_name;
          if(result.additionalUserInfo.profile.family_name)
          lastName = result.additionalUserInfo.profile.family_name;
          this.db.object('/users/' + result.user.uid).update({
          firstName: firstName,
          lastName: lastName,
          phone: "",
          email: result.additionalUserInfo.profile.email,
          roles: {
            admin : false
          }
          
        }); 
        this.router.navigate(['/account/profile']);
        }else{
          console.log('successfully logged in!')  
          this.router.navigate(['/home']);
        }
       
       
        
        
       
    }).catch((error) => {
        console.log(error)
    })
    
  }

async register(email: string, password: string, firstname: string, lastname: string, phone: string) {
  var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
  this.sendEmailVerification();
  
}
/*
  public emailSignUp(email: string, password: string, firstname: string, lastname: string, phone: string,permission:any) {
    var authApp = firebase.initializeApp({
      apiKey: "AIzaSyAm55H7DefcfEs3McDQrFBADF7XZRGJPRU",
      authDomain: "bestwayadmin-bfb80.firebaseapp.com",
      projectId: "bestwayadmin-bfb80",
      storageBucket: "bestwayadmin-bfb80.appspot.com",
      messagingSenderId: "1024589754541",
      appId: "1:1024589754541:web:67c021a2b67845a9239624",
      measurementId: "G-CZ1B4JM140"
      }, 'authApp');
      var detachedAuth = authApp.auth();
    return detachedAuth
      .createUserWithEmailAndPassword(email, password)
      .then(
        (user) => {
          this.sendEmailVerification();
          this.updateNewUser(user.user,firstname,lastname,phone,permission);
          detachedAuth.signOut();
        },
        (error) => {
          throw error;
        }
      );
  }
  */

   sendEmailVerification() {
     this.afAuth.sendEmailVerification()
   // this.router.navigate(['admin/verify-email']);
}
ifExist(managerId: string) :Observable<Customer[]> {
  return this.db
  .list<Customer>('managers',(ref) => ref.orderByChild("uid").equalTo(managerId))
  .valueChanges()
  .pipe(map((arr) => 
    arr
    ));
}
  public sendEmail(){
   return this.afAuth.sendEmail()

  }

  public getUsers(): Observable<User[]> {
    return this.db
      .list<User>('managers', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      this.managers = arr
      
      ));
  
  }

  emailLogin(email: string, password: string) {
    this.getUsers().subscribe(res=>{
      //zz@z.com
      
      const user = res.find(x => x.email === email && x.password === password);
      if (!user) 
        this.messageService.error('Username or password is incorrect');
         console.log(user)
     
      this.user = of(user);
       localStorage.setItem('adminUser', JSON.stringify(user));
       if(user.roles){
        this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: user.shop}});
       }else{
        this.router.navigate(['/dashboard/default'])
       }
       
       
    })
  
            
  }

  public signOut() {
    localStorage.removeItem('adminUser');
    this.router.navigate(['/auth/login']);
    this.messageService.info('تم تسجيل الخروج');
  }

  public signOutE() {
    this.afAuth.signOut();
  }

  public updateProfile(userData: Customer) {
    this.updateExistingUser(userData);
    this.messageService.info('User profile has been updated!');
  }
/*
  public updatePassword(password: string) {
    return this.afAuth.currentUser
      .updatePassword(password)
      .then(() => {
        this.messageService.info('Password has been updated!');
      })
      .catch(function(error) {
        throw error;
      });
  }

  public updateEmail(email: string) {
    return this.afAuth.currentUser
      .updateEmail(email)
      .then(() => {
        this.updateExistingUser({ email: email });
        this.messageService.info('User email have been updated!');
      })
      .catch(function(error) {
        throw error;
      });
  }
  */

  updateNewUser(id:string,email:string,password:any,firstname: string,lastname: string,phone: string,roles:string,type:string,permission:any,allZone:boolean,state:string,town:string,balance:number) {
    this.db.object('/managers/' + id).update({
      id,
      firstName: firstname,
      lastName: lastname,
      allZone:allZone,
      state:state,
      town:town,
      type:type,
      phone: phone,
      password:password,
      email: email,
      roles:roles,
      permission,
      balance:balance
      
    });
  }
  public getDB(id: string): Observable< DeliveryBoy | null> {
    return this.db
      .object<DeliveryBoy>('DeliveryBoy/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {
            this.messageService.error(`Found no user with id=${id}`);
            return of(null);
          }
        }),
        
      );
  }
  updateNewDB(user:DeliveryBoy) {
    this.db.object('/DeliveryBoy/' + user.phone).update({
    name:user.name||"",
    passwored:user.passwored||"",
    phone:user.phone||"",
    email:user.email||"",
    country:user.country||"",
    state:user.state||"",
    town:user.town||"",
    role:user.role||"",
    currentLocation:"",
    status:user.status||"0",
    address:user.address||"",
    close:"",
    timeStamp:"",
    idNumber:user.idNumber||"",
    idPhoto1:user.idPhoto1||"",
    idPhoto2:user.idPhoto2||"",
    fishPhoto:user.fishPhoto||"",
    dLPhoto:user.dLPhoto||"",
    mLPhoto:user.mLPhoto||"",
    vType:user.vType||"",
    aType:user.aType||"",
    collectAmount:user.collectAmount||"",
    com:user.com||"",
   block:user.block||false,
   online:user.online||false,
   busy:user.busy||false
      
    });
  }


  public getCustomer(id: string): Observable<Company | null> {
    return this.db
      .object<Company>('companies/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {

            return of(null);
          }
        }),
        
      );
  }


  public getWearHouse(id: string): Observable<Wearhouse | null> {
    return this.db
      .object<Wearhouse>('wareHouses/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {

            return of(null);
          }
        }),
        
      );
  }


  public searchCutomers(filter: any): Observable<Company[]> {

     return this.getAllCustomers().pipe(map(customer => 
       customer.filter((item: Company) => {
         if (!filter.length) return true
         const Tags = filter.some((prev) => { // Match Tags
           if (item.id) {
             if (item.id.includes(prev)) {
               return prev
             }
           }
         })
         return Tags
       })
     ));
   }

  public getToken(id: string): Observable<Token | null> {
    return this.db
      .object<Token>('Tokens/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {
            this.messageService.error(`Found no Token with id=${id}`);
            return of(null);
          }
        }),
        
      );
  }

  public getUser(id: string): Observable< User | null> {
    return this.db
      .object<User>('managers/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {
            this.messageService.error(`Found no user with id=${id}`);
            return of(null);
          }
        }),
        
      );
  }


  public getAllCustomers():Observable<Company[]>{
    return this.db
    .list<Company>('companies', (ref) => ref)
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }
  public getAllUsers():Observable<Customer[]>{
    return this.db
    .list<Customer>('managers', (ref) => ref)
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }

  private updateExistingUser(userData) {
    const currentUser = firebase.auth().currentUser;
    const ref = this.db.object('users/' + currentUser.uid);
    ref
      .valueChanges()
      .pipe(
        take(1)
      )
      .subscribe((user) => {
        ref.update(userData);
      });
  }
}
