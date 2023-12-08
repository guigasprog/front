import { AtributosBase } from "../atributosBase/atributosBase.model";

export class Maga {
  vida: number;
  stamina: number;
  sanidade: number;
  mana: number;
  nivel: number;
  xp: number;
  atributos: AtributosBase;

  constructor() {
    this.vida = 80;
    this.mana = 120;
    this.stamina = 20;
    this.sanidade = 80;
    this.nivel = 0;
    this.xp = 0;
    this.atributos = new AtributosBase(2,2,2,8,8,4,4);
  }

}
