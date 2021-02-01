import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRegistrationComponent } from './application-registration/application-registration.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { ApplicationRegistrationService } from '../application-registration.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ApplicationRegistrationComponent,
    DataCollectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ApplicationRegistrationComponent,
    DataCollectionComponent
  ],
  providers:[ApplicationRegistrationService]
})
export class AdminModule { }
