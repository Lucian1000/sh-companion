import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { MatCheckboxChange, MatCheckbox } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Player } from 'src/app/classes/player';
import { TimeoutError } from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public playersAmount: number[] = [];
  public selectedPlayerAmount: number;
  public playerNameInputDisabled: boolean = false;
  @ViewChild('changeSeatPosition') private changeSeatPositionCheckbox: MatCheckbox;
  @ViewChild('socialistCheckbox') private changeSocialistCheckbox: MatCheckbox;
  @ViewChild(MatTable) private table: MatTable<Player>;
  constructor(
    public game: GameService
  ) { }

  ngOnInit(): void {
    this.game.clear();
    for (let i = 5; i < 11; i++) {
      this.playersAmount.push(i);
    }
    this.selectedPlayerAmount = this.playersAmount[0];
  }

  changeSelectedPlayerAmount(event: MatSelectChange) {
    this.game.clear();
    this.table.renderRows();
    this.changeSeatPositionCheckbox.writeValue(false);
  }

  changeSocialistExpansion(event: MatCheckboxChange) {
    this.playersAmount = [];
    if (event.checked) {
      for (let i = 6; i < 14; i++) {
        this.playersAmount.push(i);   
      }
    } else {
      for (let i = 5; i < 11; i++) {
        this.playersAmount.push(i);   
      }
    }
    this.selectedPlayerAmount = this.playersAmount[0];
    this.game.clear();
    this.table.renderRows();
    this.changeSeatPositionCheckbox.checked = false;
  }

  changeSeatPositionAsPlayerName(event: MatCheckboxChange) {
    this.playerNameInputDisabled = event.checked;
    if (event.checked) {
      let players = new Array<Player>();
      for (let i = 1; i <= this.selectedPlayerAmount; i++) {
        let player = new Player(i, "Player " + i);
        players.push(player);
        this.game.players = players;
      }
    } else {
      this.game.clear();
      this.table.renderRows();
    }
  }

  onEnterPlayerName(playerName: string) {
    if (this.selectedPlayerAmount == this.game.players.length) {
      return;
    }
    const player = new Player(this.game.players.length + 1, playerName);

    this.game.players.push(player);
    this.table.renderRows();
  }

  removePlayer(player: Player) {
    const index = this.game.players.findIndex(v => v.name == player.name && v.position == player.position);
    this.game.players.splice(index, 1);

    let i = 1;
    this.game.players.forEach(v => {
      v.position = i;
      i++;
    });

    this.table.renderRows();
  }

  save() {
    this.game.isSocialistGame = this.changeSocialistCheckbox.checked;
    this.game.save();
  }
}
