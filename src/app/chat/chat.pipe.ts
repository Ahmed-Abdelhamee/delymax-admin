import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from 'src/app/shared/interfaces/shop';
import { Customer } from '../shared/interfaces/customer';

@Pipe({
  name: 'shopPipe'
})
export class ShopPipe implements PipeTransform {
  
  constructor(){

  }
  
  transform(customer:Customer,value: any): any {
  
  
   
  }

}
