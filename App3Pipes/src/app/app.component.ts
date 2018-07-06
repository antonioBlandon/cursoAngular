import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'Antonio';
  nombre2 = 'josE anTonIo blanDon toRRes';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  numberDecimal = 0.234;
  salario = 1234.5;
  fecha = new Date();
  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>resolve('Llegó la data!'), 3500);
  });
  heroe = {
    nombre:'Logan',
    clave:"Wolverine",
    edad:500,
    direccion : {
      calle: 'Primera',
      casa: '19'
    }
  };
}
