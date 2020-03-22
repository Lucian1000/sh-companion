import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChildren(MatCheckbox) public checkboxes: QueryList<MatCheckbox>;
  public showBottomButtons: boolean = false;
  public liberalAmount: number = 0;
  public socialistPartyAmount: number = 0;
  public fascistPartyAmount: number = 0;
  public socialistSecretAmount: number = 0;
  public fascistSecretAmount: number = 0;

  constructor(
    public game: GameService,
    private cdRef : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.game.load();
    if (this.game.isSocialistGame) {
      switch(this.game.players.length) {
        case 7: case 6:
          this.liberalAmount = this.game.players.length - 3;
          this.socialistPartyAmount = 1;
          this.socialistSecretAmount = 1;
          this.fascistPartyAmount = 2;
          break;
        case 8:
          this.liberalAmount = this.game.players.length - 4;
          this.socialistPartyAmount = 1;
          this.socialistSecretAmount = 1;
          this.fascistPartyAmount = 3;
          break;
        case 9: case 10:
          this.liberalAmount = this.game.players.length - 5;
          this.socialistPartyAmount = 2;
          this.socialistSecretAmount = 2;
          this.fascistPartyAmount = 3;
          break;
        case 11: case 12:
          this.liberalAmount = this.game.players.length - 6;
          this.socialistPartyAmount = 2;
          this.socialistSecretAmount = 2;
          this.fascistPartyAmount = 4;
          break;
        case 13:
          this.liberalAmount = this.game.players.length - 7;
          this.socialistPartyAmount = 3;
          this.socialistSecretAmount = 3;
          this.fascistPartyAmount = 4;
          break;
      }
    } else {
      switch(this.game.players.length) {
        case 5: case 6:
          this.liberalAmount = this.game.players.length - 2;
          this.fascistPartyAmount = 2;
          break;
        case 7: case 8:
          this.liberalAmount = this.game.players.length - 3;
          this.fascistPartyAmount = 3;
          break;
        case 9: case 10:
          this.liberalAmount = this.game.players.length - 4;
          this.fascistPartyAmount = 4;
          break;
      }
    }

    this.fascistSecretAmount = this.fascistPartyAmount - 1;
  }

  ngAfterViewInit(): void {
    this.showBottomButtons = true;
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  areAllChecked(){
    return this.checkboxes.find(v => !v.checked && v.name != "alreadyPrepared") === undefined;
  }
}
