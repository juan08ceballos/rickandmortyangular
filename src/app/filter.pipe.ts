import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultFilter = [];
    args= args.toLowerCase();
    for (const key of value ) {
      if (key.name.toLowerCase().indexOf(args) > -1) {

        resultFilter.push(key);

      }
    }
    return resultFilter;
  }

}
