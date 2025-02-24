import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class AdminPanelComponent {
  constructor(private router: Router) {}

  navigateToDrivers(): void {
    this.router.navigate(['/driver']);
  }

  navigateToVehicles(): void {
    this.router.navigate(['/vehicle']);
  }
   navigateToHome(): void {
    this.router.navigate(['/home'])
   }
  navigateToAssignments(): void {
    this.router.navigate(['/assignment']);
  }
}


