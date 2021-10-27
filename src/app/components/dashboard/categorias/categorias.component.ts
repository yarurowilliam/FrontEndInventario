import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listCategoria: Categoria[] = [];
  loading = false;
  page = 1;
  pageSize = 6;

  constructor(private categoriaService: CategoriaService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getCategorias();
  }

    
  getCategorias(): void {
    this.loading = true;
    this.categoriaService.getListCategorias().subscribe(data => {
      this.listCategoria = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }

  eliminarCategoria(id: number): void {
    if (confirm('Esta seguro que desea eliminar la categoria?')){
      this.loading = true;
      this.categoriaService.deleteCategoria(id).subscribe(data =>{
        this.loading = false;
        this.toastr.success('La categoria fue eliminada con exito!', 'Registro eliminado');
        this.getCategorias();
      }, error => {
        this.loading = false;
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      });
    }
  }
}
