import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  sideBarToggler(event:any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
