import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ShopService } from 'src/app/shared/service/shop.service';
import { Category } from 'src/app/shared/interfaces/category.model';
import { Unit } from 'src/app/shared/interfaces/unit';

@Pipe({
  name: 'unitNamePipe'
})
export class UnitNamePipe implements PipeTransform {
  

  
  transform(units:Unit[],value: any): any {
  let cat  = units.filter(item=>item.id == value);
    
  return cat[0].unit ;
   
  }

}
