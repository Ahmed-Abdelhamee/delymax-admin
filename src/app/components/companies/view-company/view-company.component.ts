import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapRoute } from 'src/app/shared/interfaces/map-route';
import { Package } from 'src/app/shared/interfaces/package';
import { RouteItemImport } from 'src/app/shared/interfaces/route-item-import';
import { AuthService } from 'src/app/shared/service/auth.service';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit {
  id:any;
  client:any;
  allOrders:MapRoute[]=[];
  allCompanyPacks:RouteItemImport[] = [];
  allPacks:Package[] = [];
  constructor(private route:ActivatedRoute,private authService:AuthService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id)
    this.getCustomer(this.id);
  }
  getCustomer(id: any) {
    this.authService.getCustomer(id).subscribe(customer=>{
      this.client = customer;

    });

    this.orderService.getOrders(this.id).subscribe(orders=>{
      this.allOrders = orders;
      
      this.allOrders.forEach(item=>{
        item.packages.forEach(item=>this.allPacks.push(item))
        
      })
      console.log(this.allPacks)
    })

   /* this.orderService.getCompanyOrders(this.id).subscribe(or=>{
      or.forEach(c=>
        {
          c.packages.forEach(p=>{
            this.allCompanyPacks.push(p)})
          });

    })
    */

    this.allCompanyPacks.forEach((u,index)=>{
      this.allPacks.forEach(pp=>{
         if(u.barcode == pp.barcode){
           console.log("found")
          this.allCompanyPacks[index].status ==pp.status;

         }});
      });
  }

}
