import { Pipe, PipeTransform } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
@Pipe({
  name: 'filtroProveedor'
})
export class FiltroProveedorPipe implements PipeTransform {


  transform(proveedores: Proveedor[], searchText: string) {
    if (searchText == null) return proveedores;
    return proveedores.filter(proveedor =>
      proveedor.nit.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      proveedor.razonSocial.toLowerCase().indexOf(searchText.toLowerCase())  !== -1 
    );
  }
}
