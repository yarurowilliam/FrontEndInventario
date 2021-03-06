import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CategoriaComponent } from './components/dashboard/categorias/categoria/categoria.component';
import { CategoriasComponent } from './components/dashboard/categorias/categorias.component';
import { NuevaCategoriaComponent } from './components/dashboard/categorias/nueva-categoria/nueva-categoria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetallesVentasComponent } from './components/ventas/nuestras-ventas/detalles-ventas/detalles-ventas.component';
import { NuestrasVentasComponent } from './components/ventas/nuestras-ventas/nuestras-ventas.component';
import { NuevoProductoComponent } from './components/dashboard/productos/nuevo-producto/nuevo-producto.component';
import { ProductoComponent } from './components/dashboard/productos/producto/producto.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { NuevoProveedorComponent } from './components/dashboard/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ProveedorComponent } from './components/dashboard/proveedores/proveedor/proveedor.component';
import { ProveedoresComponent } from './components/dashboard/proveedores/proveedores.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { CajaComponent } from './components/ventas/caja/caja.component';
import { ClienteComponent } from './components/ventas/cliente/cliente.component';
import { NuevoClienteComponent } from './components/ventas/cliente/nuevo-cliente/nuevo-cliente.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
//Guards
import { AuthGuard } from './helpers/auth.guard';
import { CambiarRolComponent } from './components/dashboard/usuarios/cambiar-rol/cambiar-rol.component';
import { GestionarCompraComponent } from './components/dashboard/productos/gestionar-compra/gestionar-compra.component';
import { DetalleGestionComponent } from './components/dashboard/productos/gestionar-compra/detalle-gestion/detalle-gestion.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ClientesComponent } from './components/dashboard/clientes/clientes.component';
import { DetalleClienteComponent } from './components/dashboard/clientes/detalle-cliente/detalle-cliente.component';

const routes: Routes = [
  { path:'',redirectTo: '/inicio' , pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, children: [
    { path: '',component: BienvenidaComponent },
    { path: 'login', component:LoginComponent }
  ]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' } ,children: [
    { path: '', component: ProductosComponent},
    { path: 'register',component: RegisterComponent },
    { path: 'cambiarPassword', component: CambiarPasswordComponent },
    { path: 'verProveedor/:nit', component: ProveedorComponent},
    { path: 'proveedores' , component: ProveedoresComponent },
    { path: 'nuevoProveedor' , component: NuevoProveedorComponent},
    { path: 'verCategoria/:id', component: CategoriaComponent},
    { path: 'categorias', component: CategoriasComponent},
    { path: 'nuevaCategoria', component: NuevaCategoriaComponent },
    { path: 'verArticulo/:referencia', component: ProductoComponent},
    { path: 'nuevoArticulo', component: NuevoProductoComponent},
    { path: 'gestionarUsuarios', component: UsuariosComponent},
    { path: 'gestionarRol/:id', component: CambiarRolComponent },
    { path: 'gestionarCompra', component: GestionarCompraComponent},
    { path: 'detalleCompra/:referencia', component: DetalleGestionComponent},
    { path: 'reportes', component: ReportesComponent },
    { path: 'gestionClientes', component: ClientesComponent},
    { path: 'gestionarCliente/:identificacion', component:DetalleClienteComponent}
  ]},
  { path: 'ventas', component: VentasComponent, canActivate:[AuthGuard], children: [
    { path: '', component: CajaComponent },
    { path: 'nuevoCliente', component: NuevoClienteComponent },
    { path: 'listaVentas', component: NuestrasVentasComponent },
    { path: 'verDetallesVenta/:id', component: DetallesVentasComponent }
  ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
