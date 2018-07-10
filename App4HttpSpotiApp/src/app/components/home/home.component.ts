import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  newReleases: any[] = [];
  loading: boolean;
  isErrorService = false;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) { 
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe( (result: any) => {
      this.newReleases = result;
      console.log(this.newReleases);
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.isErrorService = true;
      this.errorMessage = error.error.error.message;
      console.log(error);
    });
  }

}
