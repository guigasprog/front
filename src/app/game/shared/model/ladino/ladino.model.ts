import { AtributosBase } from "../atributosBase/atributosBase.model";

export class Ladino {
  vida: number;
  mana: number;
  stamina: number;
  sanidade: number;
  nivel: number;
  xp: number;
  atributos: AtributosBase;

  constructor() {
    this.vida = 100;
    this.mana = 40
    this.stamina = 80;
    this.sanidade = 80;
    this.nivel = 0;
    this.xp = 0;
    this.atributos = new AtributosBase(8,4,8,0,2,4,4);
  }

}
