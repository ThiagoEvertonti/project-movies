import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Movie } from '../model/movie';
import { Trailer } from '../model/trailer';

@Injectable({
  providedIn: 'root'
})
export class MovieService{

  environmentUrl: any;
  listMovie: any;
  apiTrailer: any;
  concatTrailer: any;

  constructor(public httpClient: HttpClient) {
    this.environmentUrl = environment.apiUrl;
    this.apiTrailer = environment.apiTrailer;
    this.concatTrailer = environment.apiTrailerConcact;   
   }

   getListMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.environmentUrl);
   }

  getListTrailers(idValueMovie: any): Observable<Trailer[]>{
     return this.httpClient.get<Trailer[]>(this.apiTrailer + idValueMovie + this.concatTrailer)
  }

}
