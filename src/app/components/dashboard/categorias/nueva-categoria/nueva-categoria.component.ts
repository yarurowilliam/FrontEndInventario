import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {
  datosCategorias: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private router: Router,private categoriaService: CategoriaService, private toastr: ToastrService) 
  { 
    this.datosCategorias = this.fb.group({
      nombreCategoria: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  registrarCategoria(): void{


    console.log(this.datosCategorias);

    const categoria: Categoria ={
      nombreCategoria: this.datosCategorias.value.nombreCategoria
    };
    
    this.loading = true;
    setTimeout(()=>{
      this.categoriaService.saveCategoria(categoria).subscribe(data => {
        console.log(data);
        this.toastr.success('La categoria ' + categoria.nombreCategoria + ' fue registrada con exito!', 'Categoria Registrada!');
        this.router.navigate(['/dashboard/categorias']);
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
        this.toastr.error(error.error.message, 'Error!');
        this.datosCategorias.reset();

      });
   },3000);
  }

}
