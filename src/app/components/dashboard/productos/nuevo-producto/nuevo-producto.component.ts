import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  datosArticulos: FormGroup;
  loading = false;
  listCategoria: Categoria[] = [];
  listProvedores: Proveedor[] = [];
  constructor(private fb: FormBuilder, private router: Router,private articuloService: ArticuloService, private toastr: ToastrService,private categoriaService: CategoriaService,private proveedorService: ProveedorService) 
  { 
    this.datosArticulos = this.fb.group({
      referencia: ['', Validators.required],
      nombre: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      precio: ['', [Validators.required, Validators.min(0)]],
      categoriaId: ['', Validators.required],
      proveedorNit: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getProveedores();
  }

  getProveedores(): void {
    this.loading = true;
    this.proveedorService.getListProveedores().subscribe(data => {
      this.listProvedores = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. No se cargaron los proveedores', 'Error');
    });
  }
  getCategorias(): void {
    this.loading = true;
    this.categoriaService.getListCategorias().subscribe(data => {
      this.listCategoria = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. No se cargaron las categorias', 'Error');
    });
  }

  registrarArticulo(): void{


    console.log(this.datosArticulos);

    const articulo: Articulo ={
      referencia: this.datosArticulos.value.referencia,
      nombre: this.datosArticulos.value.nombre,
      cantidad: this.datosArticulos.value.cantidad,
      precio: this.datosArticulos.value.precio,
      categoriaId: this.datosArticulos.value.categoriaId,
      proveedorNit: this.datosArticulos.value.proveedorNit
    };
    
    this.loading = true;
    setTimeout(()=>{
      this.articuloService.saveArticulo(articulo).subscribe(data => {
        console.log(data);
        this.toastr.success('El articulo ' + articulo.nombre + ' fue registrado con exito!', 'Articulo Registrado!');
        this.router.navigate(['/dashboard']);
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
        this.toastr.error(error.error.message, 'Error!');
        this.datosArticulos.reset();

      });
   },3000);
  }


}
