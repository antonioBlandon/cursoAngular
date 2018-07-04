import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.ts']
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: 'Antonio',
    apellido: 'blandon',
    correo: 'mail@correo.com'
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('formulario posteado');
    console.log(forma);
    console.log(forma.value);
    console.log(this.usuario);
  }

}
