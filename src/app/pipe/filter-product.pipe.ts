import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductPipe'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any[],filterText:string ): any[] {
   return value.filter(p=>p.name.toLowerCase().indexOf(filterText.toLowerCase())!==-1)
  }

}
