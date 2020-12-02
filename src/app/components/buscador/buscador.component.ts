import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  buscar = '';

  constructor( public peliculasService: PeliculasService,
               public route: ActivatedRoute) { 

    this.route.params.subscribe( parametros => {
      if( parametros['texto'] ){
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit(): void {
  }

  buscarPelicula(){

    if( this.buscar.length === 0 ){return ; }


    this.peliculasService.buscarPelicula( this.buscar )
      .subscribe();

  }

}
