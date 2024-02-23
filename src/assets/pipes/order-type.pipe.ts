import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'orderType'
})
export class OrderType implements PipeTransform {
  
  transform(value: any): any {
    let sta = value
    if(sta=="1"){
        return "From Shop"
    }else if(sta=="2"){
        return "Shipping" 
    }else if(sta=="3"){
      return "Need Order" 
    }

  }

}
