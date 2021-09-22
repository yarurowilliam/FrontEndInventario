import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  nitProveedor: string;
  loading = false;
  proveedor: any = {};

  constructor(private proveedorService: ProveedorService,
    private aRoute: ActivatedRoute) {
      this.nitProveedor = this.aRoute.snapshot.paramMap.get('nit');
  }


  ngOnInit(): void {
    this.getProveedor();
  }

  getProveedor(): void {
    this.loading = true;
    this.proveedorService.getProveedor(this.nitProveedor).subscribe(data => {
      this.loading = false;
      this.proveedor = data;
      console.log(data);
    });
  }
}
