import { Pipe, PipeTransform } from '@angular/core';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { Shop } from 'src/app/shared/interfaces/shop';

@Pipe({
  name: 'dBoyNamePipe'
})
export class DBoyNamePipe implements PipeTransform {
  

  
  transform(dboys:DeliveryBoy[],value: any): any {
  let dBoy  = dboys.filter(item=>item.phone == value);
   if(dboys[0]!=null){
    return dboys[0].name ;
   }
  
   
  }

}
