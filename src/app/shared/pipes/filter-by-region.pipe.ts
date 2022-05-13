import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRegion'
})
export class FilterByRegionPipe implements PipeTransform {

  transform(values: any[], filterByRegion: any): any {
    if (filterByRegion) {
      const result = values.filter((s: any) => s?.name.includes(filterByRegion));
      return result;
    }
    else {
      return values;
    }
  }

}
