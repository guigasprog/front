import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonagemDTO } from '../model/personagemDTO.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private readonly api = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  public listarPersonagensDoUsuario(usuarioId: number):
    Observable<PersonagemDTO[]> {
    return this.http.get<PersonagemDTO[]>(
      `${this.api}/personagens/${usuarioId}`
    )
  }

}
