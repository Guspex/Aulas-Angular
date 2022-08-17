import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicapor'
})
export class MultiplicaporPipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
