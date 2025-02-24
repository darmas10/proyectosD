
// navbar-home.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para usarlo en tu componente

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent {

  constructor(private router: Router) {} // Inyecta Router en el constructor

  navigateToLogin() {
    this.router.navigate(['/login']); // Define una función para navegar a /login
  }
}
