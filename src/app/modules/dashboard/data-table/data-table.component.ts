import { Component } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { FormStatusData } from './FormStatusData';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent {

  dataSource;
  displayedColumns: string[] = ['request_number', 'request_name', 'last_updated_date', 'completion', 'status'];
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  private async fetchPromiseMatTableSource() {
    const _url = "https://5d8fe12a-bde5-4c16-902a-473b479ca218.mock.pstmn.io/forms";
    const data = await this.http.get<any[]>(_url).toPromise();
    console.log("Data Received: ", data);
    let updatedData = data.map(info => new FormStatusData(info));
    console.log("Updated Data: ", updatedData);
    // data modification to be done here!
    this.dataSource = new MatTableDataSource(updatedData);
    console.log(this.dataSource);
  }

  ngOnInit(): void {
    this.fetchPromiseMatTableSource();
  }

  row;
  logData(templateRef, row) {
    console.log(row);
    this.row = row;
    const dialogRef = this.dialog.open(templateRef,{
      maxHeight: '450px'
     });
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
