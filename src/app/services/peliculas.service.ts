import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apikey     = 'fcfac026766f09d1df8a699b23afd0d0';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas:any[] = [];

  constructor(private http: HttpClient) { }


  getPopulares(){

    let url = `${ this.urlMoviedb }/movie/popular?api_key=${ this.apikey }&language=en-US&page=1`;
    return this.http.get( url )
      .pipe( map( (res: any) => res.results ) );
  }

  buscarPelicula( texto: string){
  
    let url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&language=en-US&query=${ texto }&page=1&include_adult=false`;
    return this.http.get( url )
      .pipe( map( (res: any) => {
        this.peliculas = res.results;
        return res.results;
      }) );
    
    

  }

  getCartelera(){

    let url = `${ this.urlMoviedb }/movie/now_playing?api_key=${ this.apikey }&language=en-US&page=1&region=US`;
    return this.http.get( url )
      .pipe( map( (res: any) => res.results) );
  }

  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/movie/top_rated?api_key=${ this.apikey }&language=en-US&page=1&region=us`;

    return this.http.get( url )
      .pipe( map( (res: any) => res.results) );
  }

  getPelicula(id: string){

    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }`;

    console.log(url);

    return this.http.get( url )
      .pipe( map( (res: any) =>  res) );
  }




}
