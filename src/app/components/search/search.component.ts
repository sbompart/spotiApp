import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino:string;

  constructor( private _spotify: SpotifyService ) { }

  buscarArtista(){
    if(this.termino.length > 0){
      this._spotify.getArtists(this.termino)
      .subscribe( resp => {
        console.log(resp);
      });
    }
  }

}
