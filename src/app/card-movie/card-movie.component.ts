import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';
import { ModalTrailerComponent } from '../modal/modal-trailer/modal-trailer.component';
import { Paginator } from '../model/paginator';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit, AfterViewInit  {
 
  urlImagem: any;
  title: any;
  trailer: any;
  apiTrailer: any;
  concatTrailer: any;
  paginatorValues = new Paginator(3,1,0);

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() getListMovieCard: any;
  @Input() getListMovies: any;
  @Output() idTrailer: any;

  constructor(public dialog: MatDialog, private serviceMovie: MovieService) { 
     this.urlImagem = environment.urlImg;
     this.title = environment.titleOrigin;
     this.trailer = environment.titleTrailer;
     this.apiTrailer = environment.apiTrailer;
     this.concatTrailer = environment.apiTrailerConcact;
  }

  @ViewChild('idMovie')idMovie!: ElementRef; 
  
  ngAfterViewInit() {
   
 }
  
  ngOnInit(): void { 
     this.getListMovieCard = this.getListMovies;
  }
  
  openDialog() {
   const modalRef = this.dialog.open(ModalTrailerComponent);
         modalRef.componentInstance.idTrailer = this.idMovie.nativeElement.textContent;
  } 

  handlePageChange(event: number) {
   this.paginatorValues.page = event;
 }  

}