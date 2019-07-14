import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Roshambo: The Rock Paper Scissors Game';

  scores = [0 , 0]; 
  playerWeapon = 0;
  computerWeapon = 0; 
  result = 0;
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];  

  calculateResult(){
    if( this.playerWeapon == this.computerWeapon){
      //DRAW
      this.result = 0;
    }else if(1==1){
      //PLAYER WIN
      this.scores[0] += 1; 
      this.result = 1;
    }else{
      //COMPUTER WIN
      this.scores[1] += 1; 
      this.result = 2;
    }
  }

  pick( weapon: number): void { 
    this.playerWeapon = weapon; 
    this.computerWeapon =  Math.floor(Math.random() * 3 );
  }
}
