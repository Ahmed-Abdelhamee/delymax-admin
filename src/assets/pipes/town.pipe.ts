import { Pipe, PipeTransform } from '@angular/core';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';

@Pipe({
  name: 'townPipe'
})
export class TownPipe implements PipeTransform {
  

  
  transform(towns:Town[],value: any): any {
  let town  = towns.filter(item=>item.id == value);
   if(town[0]!=null){
    return town[0].name ;
   }
  
   
  }

}
