import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit {
  datosProveedores: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private router: Router,private proveedorService: ProveedorService, private toastr: ToastrService) 
  { 
    this.datosProveedores = this.fb.group({
      nit: ['', Validators.required],
      razonSocial: ['', Validators.required],
      direccion: ['', Validators.required],
      nombreEnc: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrarProveedor(): void{


    console.log(this.datosProveedores);

    const proveedor: Proveedor ={
      nit: this.datosProveedores.value.nit,
      razonSocial: this.datosProveedores.value.razonSocial,
      direccion: this.datosProveedores.value.direccion,
      nombreEnc: this.datosProveedores.value.nombreEnc,
      telefono: this.datosProveedores.value.telefono,
      email: this.datosProveedores.value.email
    };
    
    this.loading = true;
    setTimeout(()=>{
      this.proveedorService.guardarProveedor(proveedor).subscribe(data => {
        console.log(data);
        this.toastr.success('El proveedor ' + proveedor.razonSocial + ' fue registrado con exito!', 'Proveedor Registrado!');
        this.router.navigate(['/dashboard']);
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
        this.toastr.error(error.error.message, 'Error!');
        this.datosProveedores.reset();

      });
   },3000);
  }

}
