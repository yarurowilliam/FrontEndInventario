import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  { path:'',redirectTo: '/inicio' , pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, children: [
    { path: '',component: BienvenidaComponent },
    { path: 'register',component: RegisterComponent },
    { path: 'login', component:LoginComponent }
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: ProductosComponent},
    { path: 'cambiarPassword', component: CambiarPasswordComponent }
  ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
