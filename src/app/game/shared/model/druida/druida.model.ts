import { AtributosBase } from "../atributosBase/atributosBase.model";

export class Druida {
  vida: number;
  mana: number;
  stamina: number;
  sanidade: number;
  nivel: number;
  xp: number;
  atributos: AtributosBase;

  constructor() {
    this.vida = 100;
    this.mana = 80;
    this.stamina = 70;
    this.sanidade = 50;
    this.nivel = 0;
    this.xp = 0;
    this.atributos = new AtributosBase(4,6,4,8,8,0,0);
  }

}
