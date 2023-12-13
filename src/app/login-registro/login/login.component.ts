import { UsuarioDTO } from './../shared/model/usuarioDTO.model';
import { UsuarioService } from './../shared/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../shared/model/loginForms.model';
import { RegistrarForm } from '../shared/model/registrarForm.model';
import { PersonagemDTO } from '../shared/model/personagemDTO.model';
import { PersonagemService } from '../shared/service/personagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = new LoginForm();
  registrarForm: RegistrarForm = new RegistrarForm();
  usuario!: UsuarioDTO;
  contador: number = 0;
  logar: boolean = true;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private personagemService: PersonagemService
  ) { }

  registrarLogar() {
    if (this.contador % 2 == 0) {
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
        this.loginForm = new LoginForm();
        this.logar = false;
        this.texto += this.usuario.nome;
        this.escrevendo();
        this.listarPersonagensDoUsuario();
      }
    })
  }

  cadastro() {
    this.usuarioService.cadastrarUsuario(this.registrarForm).subscribe({
      error: () => alert("Erro ao cadastrar"),
      next: () => {
        alert("cadastro feito com sucesso")
        this.loginForm.nome = this.registrarForm.nome;
        this.loginForm.senha = this.registrarForm.senha;
        this.entrar();
        this.registrarForm = new RegistrarForm();
      }
    })
  }

  listarPersonagensDoUsuario() {
    this.personagemService.listarPersonagensDoUsuario(this.usuario.id).subscribe({
      error: () => alert("Erro ao listar Personagens"),
      next: (personagens) => {
        alert("Listagens foi um sucesso")
        this.personagensDoUsuario = personagens;
        console.log(this.personagensDoUsuario)
      }
    })
  }

  texto: string = "";
  i: number = 0;
  textoHtml: string = "";
  stylesBomDia: any = null;
  stylesSlots: any = null;

  personagensDoUsuario: PersonagemDTO[] = [];

  ngOnInit(): void {
    this.verificacaoHorario();
  }

  escrevendo(): any {
    if (this.i < this.texto.length) {
      this.textoHtml += this.texto[this.i];
      this.i++;
      setTimeout(() => this.escrevendo(), 130)
    }
    if (this.i == this.texto.length) {
      setTimeout(() => this.bomdiaIndoParaCima(), 1000)
    }
  }

  bomdiaIndoParaCima() {
    this.stylesBomDia = {
      'margin-top': '-38%',
      'animation': 'none',
      'border-right': 'none',
      'font-size': '20px'
    };
    setTimeout(()=>this.stylesSlots = {
      'opacity': '1'
    }, 1500)
    return this.stylesBomDia;
  }

  verificacaoHorario(): string {
    const data = new Date().getHours();
    if (data > 7 && data < 18) return this.texto = "Bom Dia, ";
    else return this.texto = "Boa Noite, "
  }


}
