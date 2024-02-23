import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Category } from 'src/app/shared/interfaces/category.model';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {
  

  
  transform(categories:Category[],value: any): any {
  let cat  = categories.filter(item=>item.id == value);
    
  return cat[0].name ;
   
  }

}
