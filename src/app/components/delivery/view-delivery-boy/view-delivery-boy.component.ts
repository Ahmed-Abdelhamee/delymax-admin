import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { AccountDelivery } from 'src/app/shared/interfaces/account-delivery';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import { DataService } from 'src/app/shared/service/data.service';
import { Town } from 'src/app/shared/interfaces/town';
import { State } from 'src/app/shared/interfaces/state';
declare const $: any;
@Component({
  selector: 'app-view-delivery-boy',
  templateUrl: './view-delivery-boy.component.html',
  styleUrls: ['./view-delivery-boy.component.scss']
})
export class ViewDeliveryBoyComponent implements OnInit {

  id:any;
  dBoy:DeliveryBoy;
  towns:Town[]=[];
  states:State[]=[];
  tempId:any;
  idPhoto1:any;
  idPhoto2:any;
  mLPhoto:any;
  dLPhoto:any;
  fishPhoto:any;
  dbAcoount:AccountDelivery
  constructor(private route:ActivatedRoute,private deliveryService:DeliveryService,private router:Router,private dataService:DataService) { }

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
    this.dataService.getStates(this.dBoy.state).subscribe(states=>{
      this.states = states;
    });
  }
  getCustomer(id: any) {
    this.deliveryService.getDB(this.id).subscribe(user=>{
      this.dBoy = user;
      this.getStates();
      this.idPhoto1 = this.dBoy.idPhoto1||'assets/images/pro3/1.jpg';
      this.idPhoto2 = this.dBoy.idPhoto2||'assets/images/pro3/1.jpg';
      this.mLPhoto = this.dBoy.mLPhoto||'assets/images/pro3/1.jpg';
      this.dLPhoto = this.dBoy.dLPhoto||'assets/images/pro3/1.jpg';
      this.fishPhoto = this.dBoy.fishPhoto||'assets/images/pro3/1.jpg';
    })
  }

  getAccounting(id:string){
    this.deliveryService.getAllDeliveryBoyAccounting(id).subscribe(res=>{
      console.log(res)
      this.dbAcoount = res[0];
    })
  }

  onEdit(id){
    this.router.navigate(['/delivery/add-delivery-boy'],{ queryParams: {id: id}});
    }
  

  onActive(id){
    this.deliveryService.updateDeliveryStatus(this.id,"1");
    }

  onBlock(id){
    if(this.dBoy.block){
      this.deliveryService.updateDeliveryBlock(this.id,false);
    }else{
      this.deliveryService.updateDeliveryBlock(this.id,true);
    }
    
      }

  onCollect(){
   this.deliveryService.updateDeliveryCollect(this.id, this.dbAcoount.id,true).subscribe(i=>{
    $("#collect").modal("hide");
   });
  }

}
