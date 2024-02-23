import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
declare let Email: any;
@Injectable({
    providedIn: 'root'
  })
export class SendMailService {

  constructor(private _http: HttpClient , private toastr:MessageService,private router:Router) {}

  sendMessage(body) {
      const url = 'https://fcm.googleapis.com/fcm/send'
      const headers = {"Authorization": "key=AAAAIvR9q_E:APA91bGBXNAYbh7Zgi_js2yqdNgG5isOMs_BhAT-j75LMBXJSrVbrmivl9i2OOheiZNFqeiQYHF119JuGffNJz0gs9SOf_hu-IiHh__PMI5-2yW9xfr5C7AOOZHmYKhH8h4GGH1uc8dH",'Content-Type': "application/json"};
      this._http.post<any>(url, body, { headers }).subscribe(response => {
        console.log(response.data.succeeded)
        if(response.data.succeeded==1){
            this.toastr.add('Message sent successfully')
           // this.router.navigate(['/home']);
        }else{
            this.toastr.add('Message not sent ')

            this.toastr.addError('Error')
        }
    });
}
}