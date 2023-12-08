import { AtributosBase } from "../atributosBase/atributosBase.model";

export class Boss {
  vida: number;
  mana: number;
  stamina: number;
  atributosBase: AtributosBase;
  constructor() {
    this.vida = Math.floor(Math.random()*(600 - 451) + 451);
    this.mana = Math.floor(Math.random()*(600 - 301) + 301);
    this.stamina = Math.floor(Math.random()*(600 - 301)+ 301);
    this.atributosBase = new AtributosBase(
      Math.floor(Math.random()*(400 - 231) + 231),
      Math.floor(Math.random()*(250 - 131) + 131),
      Math.floor(Math.random()*(50 - 31) + 31),
      0,10,5,10
    );
  }
}