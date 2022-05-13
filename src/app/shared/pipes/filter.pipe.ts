import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(values: any[], searchByName: any): any {
  //   const result = values.filter((s: any) => s?.name.toLowerCase().includes(searchByName.toLowerCase()));
  //   return result;
  // }
  constructor() {

  }

  transform(values: any[], searchByName: any): any {
    if (searchByName) {
      const result = values.filter((s: any) => s?.name.toLowerCase().includes(searchByName.toLowerCase()));
      return result;
    }
    else {
      return values;
    }
  }
}
