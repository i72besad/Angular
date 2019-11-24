import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  public myId = "testId";
  public isDisabled = true;
  public displayHi = true;
  public name="Carlos";
  public myColor="red";
  public myClass="big";
  public framework = "Angular";
  public miCadena = "esto ES una Cadena";
  public miNumero = 0.25;
  public miFecha = new Date();

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

  onClickClass() {
    if (this.myClass == "big")
      this.myClass = "small";
    else this.myClass = "big";
  }

}
