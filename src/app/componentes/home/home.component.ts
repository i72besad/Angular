import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('aniBoton', [
      state('inactive', style({
        backgroundImage: 'green'
      })),
      state('active', style({
        backgroundImage: '#ff0000'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  public state:string = "inactive";


  constructor() { }

  ngOnInit() {
  }

  toggleBoton(){
    this.state = this.state === 'active' ? 'inactive' : 'active';/*esto es un if en una linea*/
  }

}
