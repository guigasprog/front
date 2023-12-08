import { UsuarioDTO } from './../shared/model/usuarioDTO.model';
import { UsuarioService } from './../shared/service/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../shared/model/loginForms.model';
import { RegistrarForm } from '../shared/model/registrarForm.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: LoginForm = {nome: "", senha: ""};
  registrarForm: RegistrarForm = {nome: "", email: "", senha: "", senhaConfirmar: ""};
  usuario!: UsuarioDTO;
  contador: number = 0;

  constructor(private router: Router,
    private usuarioService: UsuarioService
  ) {}

  registrarLogar() {
    if(this.contador%2 == 0) {
      document.getElementById("background1")!.style.left = "-50%";
      document.getElementById("background2")!.style.left = "-50%";
    } else {
      document.getElementById("background1")!.style.left = "0%";
      document.getElementById("background2")!.style.left = "0%";
    }
    this.contador++;
  }

  entrar() {
    this.usuarioService.logarUsuario(this.loginForm).subscribe({
      error: () => {
	      alert("Tente mais tarde")
      },
      next: (dado) => {
        this.usuario = dado;
      }
    })
  }

  cadastro() {
    this.usuarioService.cadastrarUsuario(this.registrarForm).subscribe({
      error: () => alert("Erro ao cadastrar"),
      next: () => {
        alert("cadastro feito com sucesso")
        this.registrarForm = {nome: "", email: "", senha: "", senhaConfirmar: ""};
      }
    })
  }

}
