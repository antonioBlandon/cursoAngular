import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    if(termino.length > 0) {
      this.loading = true;
    }
    this.spotifyService.getArtists(termino).subscribe( (result: any) => {
      this.artists = result;
      console.log(this.artists);
      this.loading = false;
    });
  }

}
