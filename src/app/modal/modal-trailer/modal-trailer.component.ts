import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/service/movie.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.css']
})
export class ModalTrailerComponent implements OnInit  {
  res: any;
  listMovies: any;
  listTrailers: any;
  idMovie: any;
  listIdMovie: any;
  getListMovieCard: any;
  elementId: any;
  renderLinksTrailer: any;
  @Input() idTrailer!:any;

  constructor(private serviceMovie: MovieService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie() {
    this.listMovies = this.serviceMovie.getListMovies().subscribe(
      (data) => {
        this.listMovies = data;
        this.findLinkTrailer(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMovieTrailer(idValueMovie: any) {
   this.serviceMovie.getListTrailers(idValueMovie).subscribe(
      (data) => {
        this.listTrailers = data;
        this.convertLink(this.listTrailers.results[0].key);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  findLinkTrailer = (value: any) => {
    value.results.forEach((element: any) => {
      if (element.id) {
        this.getMovieTrailer(element.id);
      }
    });
  }

  convertLink(valueLink: any){
    this.listMovies.results.forEach((element: any) => {
      if(element.id == this.idTrailer){
        this.res = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlT + valueLink);
      }
    });
   
    //this.res = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlT + valueLink);
    //this.renderLinksTrailer.push(this.res);
     //console.log(this.res);
  }
  
}
