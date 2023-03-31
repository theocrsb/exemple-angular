import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(item: any, ttc?: boolean): number {
    if(ttc) {
      return item.totalTTC();
    }
    return item.totalHT();
  }

}
