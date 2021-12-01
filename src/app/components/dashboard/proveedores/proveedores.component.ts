import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  listProvedores: Proveedor[] = [];
  loading = false;
  page = 1;
  pageSize = 6;
  searchText: string;

  constructor(private proveedorService: ProveedorService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProveedores();
    this.searchText = "";
  }


  getProveedores(): void {
    this.loading = true;
    this.proveedorService.getListProveedores().subscribe(data => {
      this.listProvedores = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }

  eliminarProveedor(nitProveedor: string): void {
    if (confirm('Esta seguro que desea eliminar el proveedor?')){
      this.loading = true;
      this.proveedorService.deleteProveedor(nitProveedor).subscribe(data =>{
        this.loading = false;
        this.toastr.success('El proveedor fue eliminado con exito!', 'Registro eliminado');
        this.getProveedores();
      }, error => {
        this.loading = false;
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      });
    }
  }
}
