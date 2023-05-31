import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpanishComponent } from './spanish/spanish.component';
import { PatientListComponent } from './patient-list/patient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    ThankYouComponent,
    SpanishComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    NgxCaptchaModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
  export function httpTranslateLoader(http:HttpClient) {
    return new TranslateHttpLoader(http);
    
  }
 
