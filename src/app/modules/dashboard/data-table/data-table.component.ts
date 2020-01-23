import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent {

  dataSource;
  displayedColumns: string[] = ['request_number', 'request_name', 'last_updated_date', 'completion', 'status'];
  constructor(private http: HttpClient) { }

  private async fetchPromiseMatTableSource() {
    const _url = "/assets/data/form_data.json";
    const data = await this.http.get<any[]>(_url).toPromise();
    // data modification to be done here!
    this.dataSource = new MatTableDataSource(data);
    console.log(this.dataSource);
  }

  ngOnInit(): void {
    this.fetchPromiseMatTableSource();
  }

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
