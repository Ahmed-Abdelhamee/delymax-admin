import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'routStatusPipe'
})
export class RoutStatusPipe implements PipeTransform {
  
  transform(value: any): any {
    let sta = value
    if(sta=="1"){
        return "New"
    }else if(sta=="2"){
        return "Started" 
    }else if(sta=="3"){
      return "Complete" 
    }else if(sta=="4"){
      return "Return" 
    }else if(sta=="5"){
        return "Damaged" 
    }else if(sta=="6"){
        return "Lost" 
    }

  }

}