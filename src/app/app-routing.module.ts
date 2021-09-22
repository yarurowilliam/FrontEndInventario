import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { NuevoProveedorComponent } from './components/dashboard/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ProveedorComponent } from './components/dashboard/proveedores/proveedor/proveedor.component';
import { ProveedoresComponent } from './components/dashboard/proveedores/proveedores.component';
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
    { path: 'cambiarPassword', component: CambiarPasswordComponent },
    { path: 'verProveedor/:nit', component: ProveedorComponent},
    { path: 'proveedores' , component: ProveedoresComponent },
    { path: 'nuevoProveedor' , component: NuevoProveedorComponent}
  ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
