import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()  toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();

  }

}
