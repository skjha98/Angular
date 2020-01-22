import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent {

  displayedColumns: string[] = ['request_number', 'request_name', 'last_updated_date', 'completion', 'status'];

  ELEMENT_REQUEST = [];
  constructor(private _formDataService: FormDataService) {
    console.log("Before getting data: ", this.ELEMENT_REQUEST)
    this._formDataService.getformData()
    .subscribe((data:any) => {
      this.ELEMENT_REQUEST = data;
      console.log("Inside: ",data);
    }, err => {
      console.log(err);
    })
    console.log("After getting data: ", this.ELEMENT_REQUEST)
  }

  dataSource = new MatTableDataSource(this.ELEMENT_REQUEST);

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
