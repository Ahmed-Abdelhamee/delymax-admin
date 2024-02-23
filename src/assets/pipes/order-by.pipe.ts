import {Pipe, PipeTransform} from '@angular/core';
import { Hour } from 'src/app/shared/interfaces/hour';

@Pipe({
 name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform{

 transform(array: Hour[]): Hour[] {

  if(!array || array === undefined || array.length === 0) return null;

    array.sort((a: any, b: any) => {
      if (a.hour < b.hour) {
        return -1;
      } else if (a.hour > b.hour) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}