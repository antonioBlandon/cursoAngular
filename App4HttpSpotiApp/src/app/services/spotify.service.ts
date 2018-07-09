import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
  
    //El token solo es valido por una hora. Si el servicio falla, esto deberia ser lo primero que se revise
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDy4_AJ7a8t6ufiVbNhHff1ONYLSco1NmVATCizCq3ZH_M_WtXLcpmN5OBkp1a-aX4TdYikggIJrNMJkQ8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(termino: string) {
  
    //El token solo es valido por una hora. Si el servicio falla, esto deberia ser lo primero que se revise
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDy4_AJ7a8t6ufiVbNhHff1ONYLSco1NmVATCizCq3ZH_M_WtXLcpmN5OBkp1a-aX4TdYikggIJrNMJkQ8'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }

}
