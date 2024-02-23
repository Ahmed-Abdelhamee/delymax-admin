import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from 'src/app/shared/interfaces/shop';

@Pipe({
  name: 'shopPipe'
})
export class ShopPipe implements PipeTransform {
  

  
  transform(shops:Shop[],value: any): any {
  let shop  = shops.filter(item=>item.shopId == value);
   if(shop[0]!=null){
    return shop[0].name ;
   }
  
   
  }

}
