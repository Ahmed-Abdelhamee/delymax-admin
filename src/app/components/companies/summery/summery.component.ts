import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable , of} from 'rxjs';
import { map } from 'rxjs/operators';
import { MapRoute } from 'src/app/shared/interfaces/map-route';
import { Order } from 'src/app/shared/interfaces/order';
import { Package } from 'src/app/shared/interfaces/package';
import { RouteItem } from 'src/app/shared/interfaces/rout-item';
import { RouteItemImport } from 'src/app/shared/interfaces/route-item-import';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {
 clientId:string;


 deliveredOrders :any=[];
 deliveredOrdersThisMonth:any=[];
 thisMonthOrders:Order[]=[];
 @Input() allPacks:Package[];
 @Input() allCompanyPacks:RouteItemImport[];
 allPayments:any;
 curdate:any;
 thisMonthPayments:any;
  constructor(private orderService:OrderService,private route:ActivatedRoute) { 
    
   
  }

  ngOnInit(): void {
    this.clientId= this.route.snapshot.queryParams["id"];
    if(this.clientId){
      console.log(this.clientId)
      
    }

    

    
      let deliveredPacks =    this.allCompanyPacks.filter(u=>u.status == 3)
      this.deliveredOrders.push(deliveredPacks)
      this.curdate = "01-"+(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
      //let MonthOrders = item.packages.filter(item=>item. > this.curdate);
     
      //this.deliveredOrders = this.allOrders.filter(item=>item.status == "3");
      this.allPayments=this.totalPrice();
      
     // this.thisMonthOrders = this.allOrders.filter(item=>item.date > this.curdate);
      //this.deliveredOrdersThisMonth = this.thisMonthOrders.filter(item=>item.status == "3");
   
    

    console.log(this.curdate)

  }

  
  totalPrice() {
    let total = 0;
    for(let data of this.deliveredOrders){
      total += data.totalAmount;
    }
    return total;
  }

  totalPriceThisMonth() {
    let total = 0;
    for(let data of this.deliveredOrdersThisMonth){
      total += data.totalAmount;
    }
    return total;
  }
 

}
