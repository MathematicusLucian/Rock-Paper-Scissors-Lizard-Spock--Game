import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Roshambo: The Rock Paper Scissors Game';

  scores = [0 , 0]; 
  playerWinsRound = -1;
  enemyWinsRound  = -1;
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];  
}
