import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface RequestElement {
  request_name: string;
  request_number: number;
  last_updated_date: string;
  status: number;
  completion: string;
}

const ELEMENT_REQUEST: RequestElement[] = [
  {request_number: 1, request_name: 'Hydrogen', last_updated_date:'01/12/2019', status: 10, completion: 'Pending'},
  {request_number: 2, request_name: 'Helium', last_updated_date:'05/12/2019', status: 25, completion: 'Pending'},
  {request_number: 3, request_name: 'Lithium', last_updated_date:'10/12/2019', status: 20, completion: 'Pending'},
  {request_number: 4, request_name: 'Beryllium', last_updated_date:'15/12/2019', status: 50, completion: 'Pending'},
  {request_number: 5, request_name: 'Boron', last_updated_date:'20/12/2019', status: 30, completion: 'Pending'},
  {request_number: 6, request_name: 'Carbon', last_updated_date:'25/12/2019', status: 70, completion: 'Pending'},
  {request_number: 7, request_name: 'Nitrogen', last_updated_date:'30/12/2019', status: 60, completion: 'Pending'},
  {request_number: 8, request_name: 'Oxygen', last_updated_date:'01/01/2020', status: 100, completion: 'Completed'},
  {request_number: 9, request_name: 'Fluorine', last_updated_date:'05/01/2020', status: 80, completion: 'Pending'},
  {request_number: 10, request_name: 'Neon', last_updated_date:'07/01/2020', status: 90, completion: 'Pending'},
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
