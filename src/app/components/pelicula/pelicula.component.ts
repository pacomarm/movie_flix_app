import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA = '';
  busqueda = '';

  constructor( public peliculasService: PeliculasService,
    public route: ActivatedRoute) { 

      this.route.params.subscribe( parametros => {
        this.regresarA = parametros['pag'];

        if( parametros['busqueda'] ){
          this.busqueda = parametros['busqueda'];
        }

        this.peliculasService.getPelicula(parametros['id'])
          .subscribe( pelicula => this.pelicula = pelicula );
    });
}

  ngOnInit(): void {
  }

}
