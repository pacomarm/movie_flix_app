import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  
  constructor(public peliculasService: PeliculasService) { 

    this.peliculasService.getCartelera().subscribe( data => this.cartelera = data);
    this.peliculasService.getPopulares().subscribe( data => this.populares = data);
    this.peliculasService.getPopularesNinos().subscribe( data => this.popularesNinos = data);
  }

  ngOnInit(): void {
  

  }

}
