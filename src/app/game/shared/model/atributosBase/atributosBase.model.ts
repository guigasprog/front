export class AtributosBase {
  forca: number;
  resistencia: number;
  agilidade: number;
  carisma: number;
  inteligencia: number;
  sorte: number;
  percepcao: number;
  pontoLivre: number;

  constructor(forca: number,
    resistencia: number,
    agilidade: number,
    carisma: number,
    inteligencia: number,
    sorte: number,
    percepcao: number
  ) {
    this.forca = forca;
    this.resistencia = resistencia;
    this.agilidade = agilidade;
    this.carisma = carisma;
    this.inteligencia = inteligencia;
    this.sorte = sorte;
    this.percepcao = percepcao;
    this.pontoLivre = 0;
  }

}
