import { Injectable } from '@angular/core';
import { MonstroFacil } from './shared/model/monstroFacil/monstroFacil.model';
import { Boss } from './shared/model/boss/boss.model';

@Injectable({
  providedIn: 'root'
})
export class MecanicasServiceService {

  valorRequesitadoParaUpar: number = 50;

  constructor() { }

  missaoCompletaFacil(xp: number) {
    return xp += Math.floor(Math.random() * (10 - 5) + 5)
  }

  missaoCompletaMedia(xp: number) {
    return xp += Math.floor(Math.random() * (30 - 15) + 15)
  }

  missaoCompletaDificil(xp: number) {
    return xp += Math.floor(Math.random() * (60 - 45) + 45)
  }

  missaoCompletaBoss(xp: number) {
    return xp += Math.floor(Math.random() * (100 - 65) + 65)
  }

  uparDeNivel(xp: number): boolean {
    if (xp >= this.valorRequesitadoParaUpar) {
      xp = xp - this.valorRequesitadoParaUpar;
      this.valorRequesitadoParaUpar += Math.round(this.valorRequesitadoParaUpar / 2);
      return true;
    } else return false;
  }
  valorRequisitado() {
    return this.valorRequesitadoParaUpar;
  }
  xpGasto(xp: number): number {
    if (xp >= this.valorRequesitadoParaUpar) {
      xp = xp - this.valorRequesitadoParaUpar;
      return xp;
    } else return xp;
  }

  atacar(multiplicadorFisico: number) {
    let dadoDeAtaque: number = Math.floor(Math.random() * 20);
    if (dadoDeAtaque > 17) return multiplicadorFisico * 2;
    else if (dadoDeAtaque > 9 && dadoDeAtaque < 18) return multiplicadorFisico + (multiplicadorFisico / 2);
    else return multiplicadorFisico;
  }

  uparAtributo(pontoLivre: number) {
    if (pontoLivre > 0) return true;
    else return false;
  }

  morreu(hp: number) {
    if (hp < 1) {
      let i: number;
      let valor: number;
      for (i = 0; i < 3; i++) {
        valor = Math.floor(Math.random() * 20);
        if (valor > 18) {
          return false;
        }
      }
      return true;
    } else return false;
  }

  partidaFacil() {
    return new MonstroFacil();
  }

  partidaBoss() {
    return new Boss();
  }
}
