import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent implements OnInit {

  public currentPatch!: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getCurrentPatch().subscribe(
        data => {
            console.log('Data received:', data);
            this.currentPatch = data;
        },
        error => {
            console.error('There was an error!', error);
        }
    );
  }
//test
}
