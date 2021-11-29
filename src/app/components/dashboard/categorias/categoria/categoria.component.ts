import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  id: number;
  loading = false;
  categoria: any = {};

  constructor(private categoriaService: CategoriaService,
    private aRoute: ActivatedRoute) {
      this.id = parseInt(this.aRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.getCategoria();
  }
  getCategoria(): void {
    this.loading = true;
    this.categoriaService.getCategoria(this.id).subscribe(data => {
      this.loading = false;
      this.categoria = data;
      console.log(data);
    });
  }
}
