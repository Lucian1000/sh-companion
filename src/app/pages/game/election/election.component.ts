import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit, AfterViewInit {
  public president: Player;
  public showPresident: boolean = false;
  public color: string = '';
  public presidencyText: string = '';

  constructor(
    public game: GameService
  ) { }

  ngOnInit(): void {
    this.game.load();
    this.refresh();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const random = this.getRandom();
      this.color = random === 0 ? 'rgb(244, 67, 54)' : '#00bcd4';
      this.presidencyText = random === 0 ? 'May he/she reign fascistly!' : 'May he/she reign liberally!';
      this.showPresident = true;
    }, 2000);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandom() {
    return Math.round(Math.random());
  }

  refresh() {
    const randomIndex = this.getRandomInt(this.game.players.length - 1);
    this.president = this.game.players[randomIndex];
  }
}
