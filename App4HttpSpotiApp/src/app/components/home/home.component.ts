import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  newReleases: any[] = [];

  constructor(private spotifyService: SpotifyService) { 
    this.spotifyService.getNewReleases().subscribe( (result: any) => {
      this.newReleases = result;
      console.log(this.newReleases);
    });
  }

  ngOnInit() {
  }

}
