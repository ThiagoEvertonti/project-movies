import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listMovies: any;
  listTrailers: any;
  idMovie: any;
  listIdMovie: any;
  getListMovieCard: any;
  elementId: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie() {
    this.listMovies = this.movieService.getListMovies().subscribe(
      (data) => {
        this.listMovies = data;
        //this.findGlobal(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}