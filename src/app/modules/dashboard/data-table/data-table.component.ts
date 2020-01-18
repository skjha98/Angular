import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface RequestElement {
  request_name: string;
  request_number: number;
  last_updated_date: string;
  completion: number;
  status: string;
}

const ELEMENT_REQUEST: RequestElement[] = [
  {request_number: 1, request_name: 'Car Parking Sticker', last_updated_date:'01/12/2019', completion: 10, status: 'Pending'},
  {request_number: 2, request_name: 'Access Card Request', last_updated_date:'05/12/2019', completion: 25, status: 'Pending'},
  {request_number: 3, request_name: 'Gym Membership Request', last_updated_date:'10/12/2019', completion: 20, status: 'Pending'},
  {request_number: 4, request_name: 'NSEZ ID Card Request', last_updated_date:'15/12/2019', completion: 50, status: 'Pending'},
  {request_number: 5, request_name: 'Sopra Steria ID Card Request', last_updated_date:'20/12/2019', completion: 30, status: 'Pending'},
  {request_number: 6, request_name: 'Carbon', last_updated_date:'25/12/2019', completion: 70, status: 'Pending'},
  {request_number: 7, request_name: 'Nitrogen', last_updated_date:'30/12/2019', completion: 60, status: 'Pending'},
  {request_number: 8, request_name: 'Oxygen', last_updated_date:'01/01/2020', completion: 100, status: 'Completed'},
  {request_number: 9, request_name: 'Fluorine', last_updated_date:'05/01/2020', completion: 80, status: 'Pending'},
  {request_number: 10, request_name: 'Neon', last_updated_date:'07/01/2020', completion: 90, status: 'Pending'},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  displayedColumns: string[] = ['request_number', 'request_name', 'last_updated_date', 'completion', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_REQUEST);

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
