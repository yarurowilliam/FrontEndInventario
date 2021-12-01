import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  listArticulosComprados: Articulo[] = [];
  model: NgbDateStruct;
  model2: NgbDateStruct;
  loading = false;
  totalGastado: number;
  constructor(private articuloService: ArticuloService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.traerCostos(); 
  }

  traerCostos(): void {
    this.loading = true;
    this.articuloService.traerTotalGastos().subscribe(data => {
      this.totalGastado = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }


}
