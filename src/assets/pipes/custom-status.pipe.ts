import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customStatus'
})
export class CustomStatus implements PipeTransform {
  
  transform(value: any): any {
    let sta = value
    if(sta=="0"){
        return "New"
    }else if(sta=="1"){
        return "Prepare" 
    }else if(sta=="2"){
      return "Stored" 
    }else if(sta=="3"){
      return "Dispatching" 
    }else if(sta=="4"){
      return "Delivered" 
    }else{
      return "Cancelled" 
    }

  }

}
