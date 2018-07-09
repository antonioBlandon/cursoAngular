import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  )
  { 
    this.router.params.subscribe( params => {
      let id = params['id'];
      this.getArtista(id);
      this.getTopTracks(id);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe( result => {
      this.artista = result;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe( result => {
      this.topTracks = result;
      console.log(this.topTracks);
    });
  }

}
