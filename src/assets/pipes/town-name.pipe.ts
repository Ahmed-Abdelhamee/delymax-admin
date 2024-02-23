import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Unit } from 'src/app/shared/interfaces/unit';
import { Town } from 'src/app/shared/interfaces/town';


@Pipe({
  name: 'townNamePipe'
})
export class TownNamePipe implements PipeTransform {
  

  
  transform(towns:Town[],value: any,lang:any): any {
  let town  = towns.filter(item=>item.id == value);
    if(lang=='ar'){
        return town[0].name ;
    }else{
        return town[0].name_En ;
    }
  
   
  }

}
