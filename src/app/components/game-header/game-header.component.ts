import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})
export class GameHeaderComponent implements OnInit {
  @Input() public title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
