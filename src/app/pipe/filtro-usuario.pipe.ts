import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(usuarios: Usuario[], searchText: string) {
    if (searchText == null) return usuarios;
    return usuarios.filter(usuario =>
      usuario.nombreUsuario.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      usuario.rolUser.toLowerCase().indexOf(searchText.toLowerCase())  !== -1 
    );
  }
}
