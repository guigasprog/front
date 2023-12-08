import { AtributosBase } from "../atributosBase/atributosBase.model";

export class Templario {
  vida: number;
  mana: number;
  stamina: number;
  sanidade: number;
  nivel: number;
  xp: number;
  atributos: AtributosBase;

  constructor() {
    this.vida = 140;
    this.mana = 60
    this.stamina = 60;
    this.sanidade = 40;
    this.nivel = 0;
    this.xp = 0;
    this.atributos = new AtributosBase(6,6,2,6,6,0,4);
  }

}
