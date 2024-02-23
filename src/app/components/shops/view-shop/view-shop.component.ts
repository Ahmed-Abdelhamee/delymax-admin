import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ShopService } from 'src/app/shared/service/shop.service';

@Component({
  selector: 'app-view-shop',
  templateUrl: './view-shop.component.html',
  styleUrls: ['./view-shop.component.scss']
})
export class ViewShopComponent implements OnInit {

  id:any;
  shop:any;
  constructor(private route:ActivatedRoute,private shopService:ShopService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id)
    this.getCustomer(this.id);
  }
  getCustomer(id: any) {
    this.shopService.getShop(id).subscribe(shop=>{
      this.shop = shop;
    })
  }

}
