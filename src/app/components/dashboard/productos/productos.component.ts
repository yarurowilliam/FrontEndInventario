import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listArticulos: Articulo[] = [];
  loading = false;
  nombreUsuario: string;
  rolU: string;
  page = 1;
  pageSize = 6;

  constructor(private loginService: LoginService,
    private articuloService: ArticuloService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getArticulos();
  }

  getNombreUsuario(): void{
    this.nombreUsuario = this.loginService.getTokenDecoded().sub;
    this.rolU = this.loginService.getTokenDecoded().sid;
  }


  getArticulos(): void {
    this.loading = true;
    this.articuloService.getListArticulos().subscribe(data => {
      this.listArticulos = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }

  eliminarArticulo(referencia: string): void {
    if (confirm('Esta seguro que desea eliminar el articulo?')){
      this.loading = true;
      this.articuloService.deleteArticulo(referencia).subscribe(data =>{
        this.loading = false;
        this.toastr.success('El articulo fue eliminado con exito!', 'Registro eliminado');
        this.getArticulos();
      }, error => {
        this.loading = false;
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      });
    }
  }

  anuncio(): void{
    this.toastr.info('Ventas en construccion', 'ESTAMOS TRABAJANDO!');
  }



}
