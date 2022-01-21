import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'top'
})
export class TopPipe implements PipeTransform {

  transform(array: any[] | undefined, pageNumber: number, pageSize: number): any[] {
    const page = (pageNumber - 1);
    return (array || []).slice(page * pageSize, page * pageSize + pageSize);
  }
}
