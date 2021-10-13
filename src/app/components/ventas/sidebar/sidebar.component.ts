import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private user: UsuarioService) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.loginService.removeLocalStorge();
    this.router.navigate(['/inicio']);
    this.toastr.warning('Gracias por utilizar nuestros servicios', 'Sesion finalizada');

  }
  rolU : string;

  getNombreUsuario(): void{
    this.rolU = this.loginService.getTokenDecoded().sid;
  }

  validacionRol(rolLlegando : string):boolean{
    this.getNombreUsuario();
    if (rolLlegando == this.rolU){
      return true;
    }else{
      return false;
    }

  }
}
