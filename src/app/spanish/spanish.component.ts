import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ThankYouComponent } from '../thank-you/thank-you.component';
@Component({
  selector: 'app-spanish',
  templateUrl: './spanish.component.html',
  styleUrls: ['./spanish.component.css']
})
export class SpanishComponent {
  // router: any;
  constructor(
    
    private router: Router,
    
  ) {}

  registrationForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
      Validators.maxLength(50),
    ]),
    

    dob: new FormControl('', [Validators.required, Validators.maxLength(50)]),

    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),


    zip: new FormControl('', [Validators.required, Validators.maxLength(9)]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
      Validators.maxLength(50),
    ]),
    recaptcha: new FormControl('',[ Validators.required]),
    ssn: new FormControl(''),
    state: new FormControl(''),

    reason: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
      Validators.maxLength(50),
    ]),
  });

  message: boolean = false;


  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }
  get dob() {
    return this.registrationForm.get('dob');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get zip() {
    return this.registrationForm.get('zip');
  }
  get city() {
    return this.registrationForm.get('city');
  }
  get street() {
    return this.registrationForm.get('street');
  }
  get ssn() {
    return this.registrationForm.get('ssn');
  }
  get reason() {
    return this.registrationForm.get('reason');
  }
  get state() {
    return this.registrationForm.get('state');
  }

  resetForm() {
    this.registrationForm.reset();
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.gotoThankYou();
  }
  gotoThankYou() {
    this.router.navigate(['/thank-you']);
  }
  removeMessage() {
    this.message = false;
  }
  sitekey: string = '6LfDXKQlAAAAAKzcJ_6Xt4aFtDvtdR31_7LBPAuQ';

  selectedGender: string | undefined;

  english() {
    this.router.navigate(['/create-patient']);
  }
  spanish() {
    this.router.navigate(['/spanish']);
  }
}