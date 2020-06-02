import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelos'
})
export class FormatoModelosPipe implements PipeTransform {

  transform(modelos: number[], ...args: unknown[]): unknown {
    if (modelos[modelos.length - 1] == modelos[0] ) {
      return `[Unico: ${modelos[0]}]`;
    }
    return `[Desde: ${modelos[0]} Hasta: ${modelos[modelos.length -1]}]`;
  }

}
