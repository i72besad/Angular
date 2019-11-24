import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  public myId = "testId";
  public isDisabled = true;
  public name="Carlos";
  public myColor="red";

  constructor() { }

  ngOnInit() {
  }

  onClickInterpolation(value) {
    this.name = value;
  }

  onClickDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  onClickStyle() {
    if (this.myColor == "red")
      this.myColor = "blue";
    else this.myColor = "red";
  }

}
