import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-registro/login/login.component';
import { GameComponent } from './game/game/game.component';
import { GameplayComponent } from './game/gameplay/gameplay.component';

const routes: Routes = [
  {
    path: 'gameplay',
    component: GameplayComponent
  },
  {
    path: 'jogar',
    component: GameComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
