import { Pipe, PipeTransform } from '@angular/core';
import { State } from 'src/app/shared/interfaces/state';

@Pipe({
  name: 'statePipe'
})
export class StatePipe implements PipeTransform {
  

  
  transform(states:State[],value: any): any {
  let state  = states.filter(item=>item.id == value);
   if(state[0]!=null){
    return state[0].name ;
   }
  
   
  }

}
