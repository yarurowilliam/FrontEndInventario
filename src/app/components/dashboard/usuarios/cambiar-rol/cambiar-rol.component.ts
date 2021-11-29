import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'
import { Usuario } from 'src/app/models/usuario';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cambiar-rol',
  templateUrl: './cambiar-rol.component.html',
  styleUrls: ['./cambiar-rol.component.css']
})
export class CambiarRolComponent implements OnInit {

  usuario: Usuario;
  stask: string;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private location: Location,
    private router: Router
  ) { }
  ngOnInit() {
    this.get();
  }
  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(id)
      .subscribe(hero => this.usuario = hero);
  }
  update(): void {

    this.loading = true;
    setTimeout(()=>{
      this.usuarioService.cambiarRol(this.usuario).subscribe(data => {
        this.toastr.info(data.message);
        this.router.navigate(['/dashboard/gestionarUsuarios']);
      }, error => {
        this.loading = false;
        this.toastr.error(error.error.message, 'Error!');
      });
    },3000);
  }


  goBack(): void {
    this.location.back;
  }
}
