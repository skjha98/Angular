import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  selected;
  data;

  constructor(private http: HttpClient, private route: Router) { }

  private async fetchPromiseSelectOption() {
    let data_received = sessionStorage.getItem("selectOptions");
    if (data_received == null) {
      const _url = "https://5d8fe12a-bde5-4c16-902a-473b479ca218.mock.pstmn.io/formtype";
      this.data = await this.http.get<any[]>(_url).toPromise();
      sessionStorage.setItem("selectOptions", JSON.stringify(this.data));
    } else {
      this.data = JSON.parse(data_received);
    }
  }

  ngOnInit() {
    this.fetchPromiseSelectOption();
  }

  submitForm() {
    if (this.selected == 'PRK') {
      console.log("Parking Selected");
      this.route.navigate(['parking_form'])
    } else if (this.selected == 'GYM') {
      console.log("Gym Member form selected");
    }
  }

}
