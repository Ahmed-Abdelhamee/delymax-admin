import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapRoute } from 'src/app/shared/interfaces/map-route';
import { Package } from 'src/app/shared/interfaces/package';
import { RouteItemImport } from 'src/app/shared/interfaces/route-item-import';
import { AuthService } from 'src/app/shared/service/auth.service';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-view-wearhouse',
  templateUrl: './view-wearhouse.component.html',
  styleUrls: ['./view-wearhouse.component.scss']
})
export class ViewWearhouseComponent implements OnInit {

  id:any;
  client:any;

  constructor(private route:ActivatedRoute,private authService:AuthService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id)
    this.getCustomer(this.id);
  }
  getCustomer(id: any) {
    this.authService.getWearHouse(id).subscribe(customer=>{
      this.client = customer;

    });

   
  }
}