import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SpanishComponent } from './spanish/spanish.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
const routes: Routes = [
  { path: 'create-patient', component: CreatePatientComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'spanish', component: SpanishComponent },
  { path: 'patient-list',component:PatientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
