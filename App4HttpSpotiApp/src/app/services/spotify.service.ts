import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getArtist(id: string) {
    return this.getUrl(`artists/${ id }`);
  }

  getArtists(termino: string) {
    return this.getUrl(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items));
  }

  getNewReleases() {
    return this.getUrl('browse/new-releases').pipe( map( data => data['albums'].items));      
  }

  getTopTracks(id: string) {
    return this.getUrl(`artists/${id}/top-tracks?country=us`).pipe( map(data => data['tracks']));
  }

  getUrl(query: string) {
    
    //El token solo es valido por una hora. Si el servicio falla, esto deberia ser lo primero que se revise
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQADoUFhvz3B2g3VZzm4xl9_PEJLcsb3TB0vWI2T5XDwEgxd8Hd4ToICW9u3CZQFd1mezwOgGG3BmheqraM'
    });
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});

  }

}
