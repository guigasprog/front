import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{

  constructor(public router: Router) { }

  contador: number = 0;

  loader: boolean = true;


  public loading() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }


  ngOnInit() {
    this.loading();
  }

  warriorBackground() {
    document.getElementById('selecao')!.style.width = "120%";
    document.getElementById('selecao')!.style.marginTop = "-10%"
  }

  warriorClick() {
    document.getElementById('warrior')!.style.left = "60%";
    this.contador++
    if(this.contador == 2) this.router.navigate(['gameplay']);
  }

  templarioBackground() {
    document.getElementById('selecao')!.style.width = "120%";
    document.getElementById('selecao')!.style.marginTop = "-8%"
    document.getElementById('selecao')!.style.marginLeft = "-6%"
  }

  templarioClick() {
    document.getElementById('templario')!.style.left = "60%";
    this.contador++
    if(this.contador == 2) this.router.navigate(['gameplay']);
  }

  arcanoBackground() {
    document.getElementById('selecao')!.style.width = "120%";
    document.getElementById('selecao')!.style.marginTop = "-8%"
    document.getElementById('selecao')!.style.marginLeft = "-10%"
  }

  arcanoClick() {
    document.getElementById('arcano')!.style.left = "60%";
    this.contador++
    if(this.contador == 2) this.router.navigate(['gameplay']);
  }

  ladinoBackground() {
    document.getElementById('selecao')!.style.width = "120%";
    document.getElementById('selecao')!.style.marginTop = "-9%"
    document.getElementById('selecao')!.style.marginLeft = "-15%"
  }

  ladinoClick() {
    document.getElementById('ladino')!.style.left = "0%";
    this.contador++
    if(this.contador == 2) this.router.navigate(['gameplay']);
  }

  druidaBackground() {
    document.getElementById('selecao')!.style.width = "120%";
    document.getElementById('selecao')!.style.marginTop = "-10%"
    document.getElementById('selecao')!.style.marginLeft = "-19%"
  }

  druidaClick() {
    document.getElementById('druida')!.style.left = "0%";
    this.contador++
    if(this.contador == 2) this.router.navigate(['gameplay']);
  }

  voltarNormalBackground() {
    document.getElementById('selecao')!.style.width = "110%";
    document.getElementById('selecao')!.style.marginTop = "0%"
    document.getElementById('selecao')!.style.marginLeft = "-5%"
    document.getElementById('warrior')!.style.left = "100%"
    document.getElementById('templario')!.style.left = "100%";
    document.getElementById('arcano')!.style.left = "100%";
    document.getElementById('ladino')!.style.left = "-100%";
    document.getElementById('druida')!.style.left = "-100%";
    this.contador = 0;
  }

}
