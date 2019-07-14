import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Roshambo: The Rock Paper Scissors Game';

  scores = [0 , 0]; 
  playerWeapon = "";
  computerWeapon = 0;
  playerWinsRound = -1;
  enemyWinsRound  = -1;
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];  

  pick( weapon: string): void { 
    this.playerWeapon = weapon; 
    this.computerWeapon =  Math.floor(Math.random() * 3 ) ;
  }
}
