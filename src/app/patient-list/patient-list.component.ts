import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
   patients:any[]=[{"id": "dc0ea5de-2b37-48f6-a542-7aa39947ac88",
   "firstName": "Ihor",
   "lastName": "joe",
   "gender": "M",
   "dob": "1950-04-30T18:30:00.000+00:00",
   "ssn": "323424242432",
   "street": "1 mark street",
   "address": "test",
   "zip": "2013012",
   "city": "san jose",
   "state": "virginia",
   "reason": "x-ray"},
   { "id": "a7da164d-495b-407f-be2c-d75f4d464065",
   "firstName": "bill",
   "lastName": "joe",
   "gender": "M",
   "dob": "1950-04-30T18:30:00.000+00:00",
   "ssn": "323424242432",
   "street": "1 mark street",
   "address": "test",
   "zip": "2013012",
   "city": "san jose",
   "state": "virginia",
   "reason": "x-ray"},];


  

}
