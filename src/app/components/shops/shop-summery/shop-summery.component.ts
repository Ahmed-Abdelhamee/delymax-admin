import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-shop-summery',
  templateUrl: './shop-summery.component.html',
  styleUrls: ['./shop-summery.component.scss']
})
export class ShopSummeryComponent implements OnInit {
  shopId:any;
  allOrders:Order[]=[];
 deliveredOrders :any=[];
 deliveredOrdersThisMonth:any=[];
 thisMonthOrders:Order[]=[];
 allPayments:any;
 curdate:any;
 thisMonthPayments:any;
  constructor(private orderService:OrderService,private route:ActivatedRoute) { 
    
   
  }

  ngOnInit(): void {
    this.shopId= this.route.snapshot.queryParams["id"];
    if(this.shopId){
      console.log(this.shopId)
      
    }

    this.orderService.getOrdersByShop(this.shopId).subscribe(orders=>{
      this.allOrders = orders;
      this.deliveredOrders = this.allOrders.filter(item=>item.status == "3");
      this.allPayments=this.totalPrice();
      this.curdate = "01-"+(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
      this.thisMonthOrders = this.allOrders.filter(item=>item.date > this.curdate);
      this.deliveredOrdersThisMonth = this.thisMonthOrders.filter(item=>item.status == "3");
      this.thisMonthPayments = this.totalPriceThisMonth();
      console.log(orders)
    })

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
