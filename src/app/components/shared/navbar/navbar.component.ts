import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  buscarPelicula( texto: string ){

    if( texto.length === 0 ) { return 0; }

    this.router.navigate(['buscador', texto]);
  }

}
