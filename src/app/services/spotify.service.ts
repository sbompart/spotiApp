import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];

  constructor( public http: HttpClient ) {
      console.log("servicio listo")
  }

  getArtists( artist:string ){

    let url = `https://api.spotify.com/v1/search?query=${ artist }&type=artist&offset=0&limit=20`;
    let token = 'BQC3HpYP7wUTkltxcsgcZKUGnT_guJYGrPHNbvN_xCktxfTJP7kCzpMgO_xnE6r35ItX6Yf4AsU4zTuneaI';
    let headers = new HttpHeaders({
      authorization: `Bearer ${ token }`
    });

    return this.http.get(url, { headers })
        .map( (resp : any) => {
          this.artists = resp.artists.items;
          return this.artists;
        });

  }

}
