import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})
export class ParkingFormComponent implements OnInit {

  constructor() { }

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
  }

}
