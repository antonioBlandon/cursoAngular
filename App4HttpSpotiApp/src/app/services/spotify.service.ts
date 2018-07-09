import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.getUrl('browse/new-releases').pipe( map( data => data['albums'].items));      
  }

  getArtist(termino: string) {
    return this.getUrl(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items));
  }

  getUrl(query: string) {
    
    //El token solo es valido por una hora. Si el servicio falla, esto deberia ser lo primero que se revise
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQATwfnBZhG1TEN3NuSQO5q-fPkXxiaOha0mk0_nTJGVdqZFA8zNm9iU-jdCFyzqYrHC_DL5mnVPwTlrc_k'
    });
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});

  }

}
