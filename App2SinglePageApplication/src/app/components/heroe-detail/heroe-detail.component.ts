import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent {

  heroe: any = {};
  heroeIsDC = true;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
      if ( this.heroe.casa === 'DC' ) {
          this.heroeIsDC = true;
      } else {
          this.heroeIsDC = false;
      }
    });
  }

}
