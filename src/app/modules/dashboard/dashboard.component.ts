import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  createRequest() {
    this.dialog.open(RequestDialogComponent);
  }

}
