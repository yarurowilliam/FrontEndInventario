import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 //INTERCEPTORS
import { AddTokenInterceptor } from '../app/helpers/add-token.interceptor';
// Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoProductoComponent } from './components/dashboard/productos/nuevo-producto/nuevo-producto.component';
import { ProveedoresComponent } from './components/dashboard/proveedores/proveedores.component';
import { NuevoProveedorComponent } from './components/dashboard/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { CategoriasComponent } from './components/dashboard/categorias/categorias.component';
import { NuevaCategoriaComponent } from './components/dashboard/categorias/nueva-categoria/nueva-categoria.component';
import { CategoriaComponent } from './components/dashboard/categorias/categoria/categoria.component';
import { ProveedorComponent } from './components/dashboard/proveedores/proveedor/proveedor.component';
import { ProductoComponent } from './components/dashboard/productos/producto/producto.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { SidebarComponent } from './components/ventas/sidebar/sidebar.component';
import { CajaComponent } from './components/ventas/caja/caja.component';
import { ClienteComponent } from './components/ventas/cliente/cliente.component';
import { NuevoClienteComponent } from './components/ventas/cliente/nuevo-cliente/nuevo-cliente.component';
import { FiltroVentascPipe } from './pipe/filtro-ventasc.pipe';
import { ListaArticulosComponent } from './components/ventas/caja/lista-articulos/lista-articulos.component';
import { NuestrasVentasComponent } from './components/ventas/nuestras-ventas/nuestras-ventas.component';
import { DetallesVentasComponent } from './components/ventas/nuestras-ventas/detalles-ventas/detalles-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    NavbarComponent,
    ProductosComponent,
    LoadingComponent,
    NuevoProductoComponent,
    ProveedoresComponent,
    NuevoProveedorComponent,
    CategoriasComponent,
    NuevaCategoriaComponent,
    CategoriaComponent,
    ProveedorComponent,
    ProductoComponent,
    VentasComponent,
    SidebarComponent,
    CajaComponent,
    ClienteComponent,
    NuevoClienteComponent,
    FiltroVentascPipe,
    ListaArticulosComponent,
    NuestrasVentasComponent,
    DetallesVentasComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
