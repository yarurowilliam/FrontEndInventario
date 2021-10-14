import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/models/articulo';


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  datosVenta: FormGroup;
  loading = false;
  ident : string;
  client : Cliente;
  listArticulos: Articulo[];
  searchText: string;

  constructor( private articuloService: ArticuloService,private fb: FormBuilder, private clienteService: ClienteService, private toastr: ToastrService, private route: ActivatedRoute, private _router: Router) 
    {
        this.datosVenta = this.fb.group({
          identificacion: ['', Validators.required],
          nombre: ['', Validators.required],
        });
     }

  ngOnInit(): void {
    this.getArticulos();
  }

  get f() { return this.datosVenta.controls; }

  buscar() {
    this.clienteService.getCliente(this.datosVenta.value.identificacion).subscribe(cliente => {
      if (cliente != null) {
        this.f['nombre'].setValue(cliente.nombre+" "+cliente.apellido);
        this.toastr.success('El cliente ' + cliente.identificacion + ' fue encontrado!', 'Llenando campos...!');
      }else{
        this.toastr.error("El cliente no fue encontrado....", 'Redireccionando para registro!');
      }
    });
  }

  getArticulos(): void {
    this.loading = true;
    this.articuloService.getListArticulos().subscribe(data => {
      this.listArticulos = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('No se pudo cargar la lista de productos', 'Error');
    });
  }

}
