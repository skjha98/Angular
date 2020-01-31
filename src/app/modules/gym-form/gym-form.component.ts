import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gym-form',
  templateUrl: './gym-form.component.html',
  styleUrls: ['./gym-form.component.css']
})
export class GymFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gymForm = new FormGroup({
    name: new FormControl(''),
    employee_id: new FormControl(),
    address_of_residence: new FormControl(''),
    age: new FormControl(),
    chest: new FormControl(),
    hips: new FormControl(),
    height: new FormControl(),
    upper_arms: new FormControl(),
    thighs: new FormControl(),
    weight: new FormControl(),
    waist: new FormControl(),
    bmi: new FormControl(),
    cardiac_problem: new FormControl(false),
    kidney_malfunction: new FormControl(false),
    smoker: new FormControl(false),
    orthopaediac_ailment: new FormControl(false),
    diabetes: new FormControl(false),
    hypertensive: new FormControl(false),
    others: new FormControl(''),
    contact_number: new FormControl(),
    emergency_number: new FormControl(),
    agreement: new FormControl(false),
    declaration: new FormControl(false)
  });
  
  onSubmit() {
    console.log(this.gymForm.value);
  }

}
