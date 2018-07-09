import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activado: boolean = true): string {

    if(activado) {
      let contrasena = '';
      for (let i = 0; i < value.length; i++) {
        contrasena = contrasena + '*';
      }
      return contrasena;
    } 
    
    return value;
  }

}
