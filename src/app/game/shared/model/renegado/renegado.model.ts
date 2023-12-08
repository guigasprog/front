import { AtributosBase } from "../atributosBase/atributosBase.model";

export class Renegado {
  vida: number;
  mana: number;
  stamina: number;
  sanidade: number;
  nivel: number;
  xp: number;
  atributos: AtributosBase;

  constructor() {
    this.vida = 120;
    this.mana = 20;
    this.stamina = 100;
    this.sanidade = 60;
    this.nivel = 0;
    this.xp = 0;
    this.atributos = new AtributosBase(8,8,6,4,2,0,2);
  }

}
/*

(F,R,A,C,I,S,P) ATRIBUTOS

(8,8,6,4,2,0,2) RENEGADO

(8,4,8,0,2,4,4) LADINO

(6,6,2,6,6,0,4) TEMPLARIO

(4,6,4,8,8,0,0) DRUIDA

(2,2,2,8,8,4,4) MAGO

*/
