import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isDisabled = !this.isDisabled;
  }

}
