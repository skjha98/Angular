import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-form',
  templateUrl: './gym-form.component.html',
  styleUrls: ['./gym-form.component.css']
})
export class GymFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  submitted: any;
  data: any;

  gymForm = this.fb.group({
    name: ['', Validators.required],
    employee_id: [, Validators.required],
    address_of_residence: ['', Validators.required],
    age: [, Validators.required],
    chest: [],
    hips: [],
    height: [, Validators.required],
    upper_arms: [],
    thighs: [],
    weight: [, Validators.required],
    waist: [],
    bmi: [0, Validators.required],
    cardiac_problem: [false],
    kidney_malfunction: [false],
    smoker: [false],
    orthopaediac_ailment: [false],
    diabetes: [false],
    hypertensive: [false],
    others: [''],
    contact_number: [, Validators.required],
    emergency_number: [, Validators.required],
    agreement: [false, Validators.required],
    declaration: [false, Validators.required]
  }, {
    validators: this.contactAndEmergencyContactValidator
  });

  /* gymForm = new FormGroup({
    name:(''),
    employee_id:(),
    address_of_residence:(''),
    age:(),
    chest:(),
    hips:(),
    height:(),
    upper_arms:(),
    thighs:(),
    weight:(),
    waist:(),
    bmi:(0),
    cardiac_problem:(false),
    kidney_malfunction:(false),
    smoker:(false),
    orthopaediac_ailment:(false),
    diabetes:(false),
    hypertensive:(false),
    others:(''),
    contact_number:(),
    emergency_number:(),
    agreement:(false),
    declaration:(false)
  }); */

  onSubmit() {
    this.updateBMI(0);
    this.submitted = true;
    this.gymForm.markAllAsTouched();
    if (this.gymForm.invalid || this.gymForm.errors != null) {
      return;
    } else if (!(this.gymForm.get('agreement').value && this.gymForm.get('declaration').value)) {
      alert("You should agree with the Agreement and the Declaration!")
    }
    else {
      console.log("Success!!!", this.gymForm.value);
      if (confirm("Do you really want to continue?")) {
        this.fetchPush2Server();
      }
    }
  }

  updateBMI(event: any) {
    let weight = this.gymForm.get('weight').value;
    let height = this.gymForm.get('height').value;

    this.gymForm.patchValue({
      bmi: (weight / (height * height)).toFixed(1)
    });
  }

  contactAndEmergencyContactValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const _contact_number = control.get('contact_number').value;
    const _emergency_number = control.get('emergency_number').value;
    return _contact_number == _emergency_number && _contact_number != null ? { 'same': true } : null;
  }

  private async fetchPush2Server() {
    const _url = "https://5d8fe12a-bde5-4c16-902a-473b479ca218.mock.pstmn.io/form_add";
    this.data = await this.http.post<any>(_url, this.gymForm.value).toPromise();
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
