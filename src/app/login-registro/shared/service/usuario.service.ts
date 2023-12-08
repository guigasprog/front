import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginForm } from '../model/loginForms.model';
import { UsuarioDTO } from '../model/usuarioDTO.model';
import { RegistrarForm } from '../model/registrarForm.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly api = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  public logarUsuario(loginForm: LoginForm):
    Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(
      `${this.api}/usuarios/logar?loginNome=${loginForm.nome}&loginSenha=${loginForm.senha}`
    )
  }

  public cadastrarUsuario(registrarForm: RegistrarForm):
    Observable<RegistrarForm> {
      return this.http.post<RegistrarForm>(
        `${this.api}/usuarios/cadastrar`, registrarForm
      )
  }

}
