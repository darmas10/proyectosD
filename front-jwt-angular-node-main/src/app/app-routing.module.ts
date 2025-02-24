import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { DriverComponent } from './components/driver/driver.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AdminPanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'home',component:HomeComponent},
  { path: 'signIn', component: SignInComponent },
  {path: 'driver',component:DriverComponent,canActivate:[AuthGuard]},
 {path: 'vehicle',component:VehicleComponent,canActivate:[AuthGuard]},
 {path:'assignment',component:AssignmentComponent,canActivate:[AuthGuard]},
 {path:'panel',component:AdminPanelComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
