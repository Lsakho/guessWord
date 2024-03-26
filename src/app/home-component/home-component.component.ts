import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  word: string = '';
  scrambledWord: string = '';
  gameStarted: boolean = false;

  startGame() {
    this.gameStarted = true;
    this.word = 'lamine'; // Le mot à deviner
    this.scrambleWord();
    setTimeout(() => {
      this.scrambledWord = this.word;
    }, 10000); // Afficher le mot correct après 10 secondes
  }

  scrambleWord() {
    const wordArray = this.word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    this.scrambledWord = wordArray.join('');
  }

}
