import { Pipe, PipeTransform } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {

  transform(categorias: Categoria[], searchText: string) {
    if (searchText == null) return categorias;
    return categorias.filter(categoria =>
      categoria.nombreCategoria.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
    );
  }

}
