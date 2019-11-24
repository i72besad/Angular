import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-arquitectura',
  templateUrl: './arquitectura.component.html',
  styleUrls: ['./arquitectura.component.css']
})
export class ArquitecturaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) =>{
      if (!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0)
    })
  }

}
