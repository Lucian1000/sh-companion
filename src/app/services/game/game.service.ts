import { Injectable } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public players: Player[] = new Array<Player>();
  public isSocialistGame: boolean = false;

  constructor() { }

  clear() {
    this.players = new Array<Player>();
    localStorage.removeItem('players');
    localStorage.removeItem('socialist');
  }

  save() {
    localStorage.setItem('players', JSON.stringify(this.players));
    localStorage.setItem('socialist', String(this.isSocialistGame));
  }

  load() {
    this.players = JSON.parse(localStorage.getItem('players'));
    this.isSocialistGame = localStorage.getItem('socialist') == "true";
  }
}
