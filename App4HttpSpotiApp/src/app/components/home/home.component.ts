import { Component, OnInit } from '@angular/core';

import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  paises: any[] = [];

  constructor(private paisesService: PaisesService) { 
    this.paisesService.getAllCountries().subscribe( (result: any[]) => {
      this.paises = result;
      console.log(this.paises);
      
    });
  }

  ngOnInit() {
  }

}
