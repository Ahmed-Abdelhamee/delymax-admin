import { Pipe, PipeTransform } from '@angular/core';
import { RouteItem } from 'src/app/shared/interfaces/rout-item';
import { State } from 'src/app/shared/interfaces/state';

@Pipe({
  name: 'lostPipe'
})
export class LostPipe implements PipeTransform {
  

  
  transform(items:RouteItem[]): any {
  let complete  = items.filter(item=>item.status == 6);
   if(complete!=null){
    return complete.length ;
   }
  
   
  }

}
