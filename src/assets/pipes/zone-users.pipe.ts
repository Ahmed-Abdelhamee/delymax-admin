import {Pipe, PipeTransform} from '@angular/core';
import { Hour, ZoneUser } from 'src/app/shared/interfaces/hour';

@Pipe({
 name: 'zoneUsersPipe'
})
export class ZoneUsersPipe implements PipeTransform{

 transform(array: ZoneUser[]): any {

 if(array!=null || array || array != undefined){
  var keys = Object.keys(array);
  var len = keys.length;
  return len;
 }else{
  return 0;  
 }

 
  
 }
}