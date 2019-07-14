import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Roshambo';
  desc = "The Rock Paper Scissors Game";
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];  
  playerWeapon = 0;
  computerWeapon = 0; 
  scores = [0 , 0]; 
  result = 4;
  resultStrings = [
    'DRAW',
    'PLAYER WIN',
    'COMPUTER WIN',
    ''
  ];
  resultMsg = "AWAITING GAME COMMENCEMENT";

  calculateResult(): void{
    if( this.playerWeapon == this.computerWeapon){
      //DRAW
      this.result = 0;
    }else if(( (this.playerWeapon - this.computerWeapon + 3) % 3) == 1){
      //PLAYER WIN
      this.scores[0] += 1; 
      this.result = 1;
    }else{
      //COMPUTER WIN
      this.scores[1] += 1; 
      this.result = 2;
    }
    this.resultMsg = "Computer chooses " + this.weapons[this.computerWeapon] + " ||| " + this.resultStrings[this.result];
  }

  chooseWeapon( weapon: number): void { 
    this.playerWeapon = weapon; 
    console.log(this.playerWeapon);
    this.computerWeapon =  Math.floor(Math.random() * 3 );
    console.log(this.computerWeapon);
    this.calculateResult();
  }
}
