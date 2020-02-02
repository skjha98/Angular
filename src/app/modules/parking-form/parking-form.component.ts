import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})
export class ParkingFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  gymForm = new FormGroup({
    name: new FormControl(''),
    employee_id: new FormControl(),
    level_particular: new FormControl(''),
    registration_number: new FormControl(''),
    process_particular: new FormControl(''),
    shift_particular: new FormControl(''),
    address_of_residence: new FormControl(''),
    contact_number: new FormControl(),
    emergency_number: new FormControl(),
    terms_conditions: new FormControl(false)
  });

  onSubmit() {
    console.log(this.gymForm.value);
    this.push2Server();
  }

  push2Server() {
    const _URL = "http://localhost:4000/form_data";
    this.http.post<any>(_URL, this.gymForm.value).subscribe(
      data => console.log("success",data),
      error => console.log("Error", error)
    );
  }

}
