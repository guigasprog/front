import { AtributosBase } from "../atributosBase/atributosBase.model";

export class MonstroFacil {
  vida: number;
  atributosBase: AtributosBase;
  constructor() {
    this.vida = Math.floor(Math.random()*(100 - 51) + 51)
    this.atributosBase = new AtributosBase(
      Math.floor(Math.random()*(6 - 3) + 3),
      Math.floor(Math.random()*(6 - 3) + 3),
      Math.floor(Math.random()*(6 - 3) + 3),
      0, 0, 0, 0
    )
  }
}