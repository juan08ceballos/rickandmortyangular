import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultFilter = [];
    args= args.toLowerCase();

    if (args=='all') {
      for (const key of value ) {


          resultFilter.push(key);


      }
    } else {
      for (const key of value ) {
        if (key.status.toLowerCase().indexOf(args) > -1) {

          resultFilter.push(key);

        }
      }
    }


    return resultFilter;
  }

}
