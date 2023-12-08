import { Component, OnInit } from '@angular/core';
import { MecanicasServiceService } from '../mecanicas-service.service';
import { Renegado } from '../shared/model/renegado/renegado.model';
import { AtributosBase } from '../shared/model/atributosBase/atributosBase.model';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  constructor(public mecanicasService: MecanicasServiceService) { }

  corVida: string = "";
  vidaBarra: string = "";
  manaBarra: string = "";
  staminaBarra: string = "";
  sanidadeBarra: string = "";
  vidaAtual: number = 0;
  manaAtual: number = 0;
  staminaAtual: number = 0;
  sanidadeAtual: number = 0;
  jogador: Renegado = new Renegado();
  monstro!: any;
  vidaMonstro: string = "";
  vidaAtualMonstro: number = 0;
  corMonstro: string = "";
  xp: number = 0;
  xpBarra: string = "";
  xpRequisitado: number = 0;
  melhoria: AtributosBase = new AtributosBase(0, 0, 0, 0, 0, 0, 0);
  pontosDeMelhoria: number = 0;
  ataque: number = 0;
  contadorDePartidas: number = 0;
  opcaoSelecionada: number = 0;



  ngOnInit(): void {
    this.vidaAtual = this.jogador.vida;
    this.manaAtual = this.jogador.mana;
    this.staminaAtual = this.jogador.stamina;
    this.sanidadeAtual = this.jogador.sanidade;
    this.xpBarra = this.jogador.xp.toString() + "%";
    this.vidaBarra = Math.round((this.vidaAtual * 100) / this.jogador.vida).toString();
    this.corVida = "hsl(calc(" + this.vidaBarra + " * 1.2), 80%, 50%)";
    this.vidaBarra = this.vidaBarra + "%";
    this.manaBarra = Math.round((this.manaAtual * 100) / this.jogador.mana).toString() + "%";
    this.staminaBarra = Math.round((this.staminaAtual * 100) / this.jogador.stamina).toString() + "%";
    this.sanidadeBarra = Math.round((this.sanidadeAtual * 100) / this.jogador.sanidade).toString() + "%";
  }

  meditacao() {
    document.getElementById("meditar")!.style.display = "block";
  }

  fecharModal() {
    document.getElementById("meditar")!.style.display = "none";
  }

  missaoFacil() {
    this.monstro = this.mecanicasService.partidaFacil();
    this.vidaAtualMonstro = this.monstro.vida;
    this.vidaMonstro = Math.round((this.vidaAtualMonstro * 100) / this.monstro.vida).toString();
    this.corMonstro = "hsl(calc(" + this.vidaMonstro + " * 1.2), 80%, 50%)";
    this.vidaMonstro = this.vidaMonstro + "%";
    this.opcaoSelecionada = 1;
  }
  missaoBoss() {
    this.monstro = this.mecanicasService.partidaBoss();
    this.vidaAtualMonstro = this.monstro.vida;
    this.vidaMonstro = Math.round((this.vidaAtualMonstro * 100) / this.monstro.vida).toString();
    this.corMonstro = "hsl(calc(" + this.vidaMonstro + " * 1.2), 80%, 50%)";
    this.vidaMonstro = this.vidaMonstro + "%";
    this.opcaoSelecionada = 4;
  }

  missaoCompleta(nivelDaMissao: number) {
    this.jogador.vida += (this.jogador.vida * 20) / 100;
    this.monstro = null;
    switch (nivelDaMissao) {
      case 1:
        this.jogador.xp = this.mecanicasService.missaoCompletaFacil(this.jogador.xp);
        break;
      case 2:
        this.jogador.xp = this.mecanicasService.missaoCompletaMedia(this.jogador.xp);
        break;
      case 3:
        this.jogador.xp = this.mecanicasService.missaoCompletaDificil(this.jogador.xp);
        break;
      case 4:
        this.jogador.xp = this.mecanicasService.missaoCompletaBoss(this.jogador.xp);
        break;
    }

    this.valorRequisitado();
    this.xpBarra = (Math.round((this.jogador.xp * 100) / this.xpRequisitado)).toString() + "%";
    this.contadorDePartidas++;
  }


  xpGasto() {
    this.xp = this.jogador.xp;
    this.jogador.xp = this.mecanicasService.xpGasto(this.jogador.xp);
    if (this.jogador.xp > 0) this.xpBarra = (Math.round((this.jogador.xp * 100) / this.xpRequisitado)).toString() + "%";
  }
  uparDeNivel() {
    if (this.mecanicasService.uparDeNivel(this.xp)) {
      this.jogador.nivel++;
      this.jogador.atributos.pontoLivre++;
      this.pontosDeMelhoria = this.jogador.atributos.pontoLivre;
    }
  }
  valorRequisitado() {
    this.xpRequisitado = this.mecanicasService.valorRequisitado();
  }
  uparAtributos(atributo: number) {
    if (this.pontosDeMelhoria > 0) {
      switch (atributo) {
        case 1:
          this.melhoria.forca++;
          break;
        case 2:
          this.melhoria.resistencia++;
          break;
        case 3:
          this.melhoria.agilidade++;
          break;
        case 4:
          this.melhoria.percepcao++;
          break;
        case 5:
          this.melhoria.inteligencia++;
          break;
        case 6:
          this.melhoria.carisma++;
          break;
        case 7:
          this.melhoria.sorte++;
      }
      this.pontosDeMelhoria--;
    }
  }
  confirmar() {
    this.jogador.atributos.forca = this.jogador.atributos.forca + this.melhoria.forca;
    this.jogador.atributos.resistencia = this.jogador.atributos.resistencia + this.melhoria.resistencia;
    this.jogador.atributos.agilidade = this.jogador.atributos.agilidade + this.melhoria.agilidade;
    this.jogador.atributos.percepcao = this.jogador.atributos.percepcao + this.melhoria.percepcao;
    this.jogador.atributos.inteligencia = this.jogador.atributos.inteligencia + this.melhoria.inteligencia;
    this.jogador.atributos.carisma = this.jogador.atributos.carisma + this.melhoria.carisma;
    this.jogador.atributos.sorte = this.jogador.atributos.sorte + this.melhoria.sorte;
    this.melhoria.forca = 0;
    this.melhoria.resistencia = 0;
    this.melhoria.agilidade = 0;
    this.melhoria.percepcao = 0;
    this.melhoria.inteligencia = 0;
    this.melhoria.carisma = 0;
    this.melhoria.sorte = 0;
    this.pontosDeMelhoria = 0;
    this.jogador.atributos.pontoLivre = 0;
  }


  atacar() {
    this.ataque = this.mecanicasService.atacar(this.jogador.atributos.forca);
    this.vidaAtualMonstro -= this.ataque;
    this.vidaMonstro = Math.round((this.vidaAtualMonstro * 100) / this.monstro.vida).toString();

    this.corMonstro = "hsl(calc(" + this.vidaMonstro + " * 1.2), 80%, 50%)";
    this.vidaMonstro = this.vidaMonstro + "%";

    this.ataque = this.mecanicasService.atacar(this.monstro.atributosBase.forca);
    this.vidaAtual -= this.ataque;

    this.vidaBarra = Math.round((this.vidaAtual * 100) / this.jogador.vida).toString();
    this.corVida = "hsl(calc(" + this.vidaBarra + " * 1.2), 80%, 50%)";
    this.vidaBarra = this.vidaBarra + "%";
    this.manaBarra = Math.round((this.manaAtual * 100) / this.jogador.mana).toString() + "%";
    this.staminaBarra = Math.round((this.staminaAtual * 100) / this.jogador.stamina).toString() + "%";
    this.sanidadeBarra = Math.round((this.sanidadeAtual * 100) / this.jogador.sanidade).toString() + "%";

    this.mecanicasService.morreu(this.vidaAtual);
    if (this.vidaAtualMonstro < 1) this.missaoCompleta(this.opcaoSelecionada);
  }



}
