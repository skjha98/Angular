import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  selected;
  data;

  constructor(private http: HttpClient) { }

  private async fetchPromiseSelectOption() {
    const _url = "https://5d8fe12a-bde5-4c16-902a-473b479ca218.mock.pstmn.io/formtype";
    this.data = await this.http.get<any[]>(_url).toPromise();
    console.log("Select Options Received: ", this.data);
  }

  ngOnInit() {
    this.fetchPromiseSelectOption();
  }

  submitForm() {
    if(this.selected == 'PRK') {
      console.log("Parking Selected");
    } else if(this.selected == 'GYM') {
      console.log("Gym Member form selected");
    }
  }

}
