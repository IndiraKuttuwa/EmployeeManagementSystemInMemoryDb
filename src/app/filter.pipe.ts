

import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './Employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], par2: string): Employee[] {
    if(!value)
    return [];
    if(!par2) return value;
    var search=par2.toLowerCase();
    return value.filter((a)=>{
      return a.name.toLowerCase().startsWith(search);
    })
  }

}