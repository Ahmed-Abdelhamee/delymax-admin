import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { MSCust } from 'src/app/shared/interfaces/ms-cust';


@Pipe({
  name: 'customerNamePipe'
})
export class CustomerName implements PipeTransform {
  

  transform(customers:Customer[],value: any): any {
  let cust  = customers.filter(cu=>cu.uid === value);

  return cust[0].firstName+" "+cust[0].lastName ;
   
  }

}