import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  nombreHeroe: string;
  constructor( private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.nombreHeroe = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes( this.nombreHeroe );
    });
  }

  verHeroe(index: number) {
    this.router.navigate(['heroe', index]);
  }

}
