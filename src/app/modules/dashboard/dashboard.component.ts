import { Component, OnInit } from '@angular/core';
import { requests } from '../../../datamodel/requests.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  requests: requests[] = [];
  request_name: string;


  constructor() { }

  ngOnInit() {
    this.requests = [{
      request_name: "Gym Facility",
      last_updated_date: "20/12/2019",
      status: "Pending",
      completion: "20%"
    },{
      request_name: "Car Parking Sticker",
      last_updated_date: "12/01/2020",
      status: "Completed",
      completion: "100%"
    },{
      request_name: "Access Card Request",
      last_updated_date: "02/01/2020",
      status: "Pending",
      completion: "50%"
    }]
  }

  search() {
    if (this.request_name == "") {
      this.ngOnInit();
    } else {
      this.requests = this.requests.filter(res => {
        return res.request_name.toLocaleLowerCase().match(this.request_name.toLocaleLowerCase());
      })
    }
  }

}
