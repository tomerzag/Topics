import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[] | undefined, field: string, query: string | null): any[] {
    return !field || !query ?
      (array || []) :
      (array || [])
        .filter(a => a[field]
          .indexOf(query) > -1);
  }

}
