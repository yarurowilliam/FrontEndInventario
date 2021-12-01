import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { VentaService } from 'src/app/services/venta.service';
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
  totalGanancias: number;
  mejorCliente : string;
  perdidasTotales: number;
  constructor(private articuloService: ArticuloService,
    private ventaService: VentaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.traerCostos(); 
    this.traerGanancias();
    this.getMejorCliente();
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

  traerGanancias(): void {
    this.loading = true;
    this.ventaService.traerGanancias().subscribe(data => {
      this.totalGanancias = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }
  getMejorCliente(): void {
    this.loading = true;
    this.ventaService.getMejorCliente().subscribe(data => {
      this.mejorCliente = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });
  }
  reportGasto : number;
  getTotalPerdidas(): string {
    this.perdidasTotales = this.totalGastado - this.totalGanancias;
    if (this.perdidasTotales <= 0 ){
      this.reportGasto = 0;
      return "No hay perdidas"
    }else{
      this.reportGasto = this.perdidasTotales;
      return "Perdida";
    }
  }

}
