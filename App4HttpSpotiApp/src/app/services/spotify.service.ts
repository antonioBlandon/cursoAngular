import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDMM_oDamTngYzzJlOjAVANCjZgDeL8VUeRP6kmSGta_9zy-_nYQLC69RPwsY-XuQC6CcQLZYxMDvlb-sg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}