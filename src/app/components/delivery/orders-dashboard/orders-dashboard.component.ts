import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { User } from 'src/app/shared/interfaces/user';
import { DataService } from 'src/app/shared/service/data.service';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-orders-dashboard',
  templateUrl: './orders-dashboard.component.html',
  styleUrls: ['./orders-dashboard.component.scss']
})
export class OrdersDashboardComponent implements OnInit {
 
  selectedTown='';
  states:State[]=[];
  selectedState:any;
  towns:Town[]=[];
  Allorders:Order[]=[];
  user:User;
  allZone:boolean = false;
  constructor(private dataService:DataService,private orderService:OrderService,private router:Router) {
    const user = localStorage.getItem('adminUser');
      if(user){
      console.log(user) 
      let jsonObj: any = JSON.parse(user); // string to generic object first
      this.user = <User>jsonObj;
      console.log(this.user)
      this.allZone = this.user.allZone;

      if(this.allZone){
        this.getTowns()
      }else{
        this.selectedTown = this.user.town;
        this.selectedState = this.user.state;
        this.getAllOrders();
      }
      }
   
   }

  ngOnInit(): void {

  }
  
  getStates(){
    this.dataService.getStates(this.selectedTown).subscribe(states=>{
      this.states = states;
    })
  }

  progress(){
    document.getElementById("dialog").click();
  }

  getTowns(){
    this.dataService.getTowns().subscribe(towns=>{
      this.towns = towns;
    })
  }

  getAllOrders(){
    this.Allorders = [];
  this.orderService.getAllOrdersByState(this.selectedState).subscribe(res=>{
    this.Allorders = res;

  });
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
 }

  chat(){
    
  }
 
 
}
