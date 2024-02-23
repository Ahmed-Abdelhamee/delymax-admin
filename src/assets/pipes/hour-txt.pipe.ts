import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'hourTxt'
})
export class HourTxtPipe implements PipeTransform {
  
  transform(value: any): any {
    let sta = value
    if(sta==0){
        return "12:00 am"
    }else if(sta==1){
        return "01:00 am" 
    }else if(sta==2){
        return "02:00 am" 
    }else if(sta==3){
        return "03:00 am" 
    }else if(sta==4){
        return "04:00 am" 
    }else if(sta==5){
        return "05:00 am"
    }else if(sta==6){
        return "06:00 am"
    }else if(sta==7){
        return "07:00 am" 
    }else if(sta==8){
        return "08:00 am"
    }else if(sta==9){
        return "09:00 am" 
    }else if(sta==10){
        return "10:00 am" 
    }else if(sta==11){
        return "11:00 am" 
    }else if(sta==12){
        return "12:00 pm" 
    }else if(sta==13){
        return "01:00 pm"
    }else if(sta==14){
        return "02:00 pm" 
    }else if(sta==15){
        return "03:00 pm" 
    }else if(sta==16){
        return "04:00 pm" 
    }else if(sta==17){
        return "05:00 pm" 
    }else if(sta==18){
        return "06:00 pm"
    }else if(sta==19){
        return "07:00 pm" 
    }else if(sta==20){
        return "08:00 pm" 
    }else if(sta==21){
        return "09:00 pm" 
    }else if(sta==22){
        return "10:00 pm"
    } else{
        return "11:00 pm" 
    }

  }

}
