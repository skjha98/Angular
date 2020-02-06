import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})

export class ParkingFormComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
  }

  submitted: any;
  data: any;

  parkingForm = this.fb.group({
    name: ['', Validators.required],
    employee_id: [, Validators.required],
    level_particular: [''],
    registration_number: ['', Validators.required],
    process_particular: [''],
    shift_particular: [''],
    address_of_residence: ['', Validators.required],
    contact_number: [, Validators.required],
    emergency_number: [, Validators.required],
    terms_conditions: [false, Validators.required]
  }, {
    validators: this.contactAndEmergencyContactValidator
  });

  /* gymForm = new FormGroup({
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
  }); */

  contactAndEmergencyContactValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const _contact_number = control.get('contact_number').value;
    const _emergency_number = control.get('emergency_number').value;
    return _contact_number == _emergency_number && _contact_number != null ? { 'same': true } : null;
  }

  onSubmit() {
    this.submitted = true;
    this.parkingForm.markAllAsTouched();
    if (this.parkingForm.invalid || this.parkingForm.errors != null) {
      return;
    } else if (!this.parkingForm.get('terms_conditions').value) {
      alert("You should agree with the Agreement and the Declaration!")
    } else {
      console.log(this.parkingForm.value, "Success");
      this.push2Server();
    }
    
  }

  async push2Server() {
    const _URL = "https://5d8fe12a-bde5-4c16-902a-473b479ca218.mock.pstmn.io/form_add";
    this.data = await this.http.post<any>(_URL, this.parkingForm.value).toPromise();
    console.log(this.data);
    if (this.data.form_received == true) {
      console.log('Form Uploaded!!!')
      this.route.navigate(['']);
      alert("Form submitted successfully");
    } else {
      alert("Something went wrong! Please try after sometime!");
    }
  }

}
