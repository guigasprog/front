import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameplayComponent } from './gameplay/gameplay.component';



@NgModule({
  declarations: [
    GameComponent,
    GameplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
