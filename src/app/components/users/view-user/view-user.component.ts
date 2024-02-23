import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDelivery } from 'src/app/shared/interfaces/account-delivery';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DataService } from 'src/app/shared/service/data.service';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
declare const $: any;
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  id:any;
  collector:User;
  towns:Town[]=[];
  states:State[]=[];
  tempId:any;
  idPhoto1:any;
  amount = 0;
  idPhoto2:any;
  mLPhoto:any;
  dLPhoto:any;
  fishPhoto:any;
  dbAcoount:AccountDelivery
  constructor(private route:ActivatedRoute,private deliveryService:DeliveryService,private router:Router,private dataService:DataService,private authService:AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id)
    this.getCustomer(this.id);
    this.getAccounting(this.id);
    this.getFillters()
  }
  getFillters() {
    this.dataService.getTowns().subscribe(towns=>{
      this.towns = towns;
    });
  }

  getStates(){
    this.dataService.getStates(this.collector.state).subscribe(states=>{
      this.states = states;
    });
  }
  getCustomer(id: any) {
    this.authService.getUser(this.id).subscribe(user=>{
      this.collector = user;
      this.getStates();
      
    })
  }

  getAccounting(id:string){
    this.deliveryService.getAllDeliveryBoyAccounting(id).subscribe(res=>{
      console.log(res)
      this.dbAcoount = res[0];
    })
  }

  onEdit(id){
    this.router.navigate(['/users/edit-user'],{ queryParams: {id: id}});
    }
  

 

  onCollect(){
    const timestamp = new Date().getTime();
    const bId = timestamp+""
    this.authService.addBalanceLogCollector(this.id,bId,timestamp,"collect",this.collector.balance);
   this.authService.updateCollectorCollect(this.id).subscribe(i=>{
    
    $("#collect").modal("hide");
   });
  }

  onAdd(){

    let balance  = this.collector.balance;
    let b = balance + this.amount;
    this.authService.updateCollectorAdd(this.id,b).subscribe(i=>{
      const timestamp = new Date().getTime();
      const bId = timestamp+""
     this.authService.addBalanceLogCollector(this.id,bId,timestamp,"add",this.amount);
     $("#add").modal("hide");
    });
   }

}
