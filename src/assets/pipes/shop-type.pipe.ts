import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'shopTypePipe'
})
export class ShopTypePipe implements PipeTransform {
  
  transform(value: any): any {
    let sta = value
    if(sta=="1"){
        return "Supermarket"
    }else if(sta=="2"){
        return "Restaurants" 
    }else if(sta=="3"){
      return "Pharmacy" 
    }else if(sta=="4"){
      return "Health" 
    }else if(sta=="5"){
        return "Clothes" 
    }else if(sta=="6"){
        return "Electronics" 
    }else if(sta=="7"){
        return "Other" 
    }

  }

}
