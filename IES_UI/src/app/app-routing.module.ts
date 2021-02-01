import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationRegistrationComponent } from './admin/application-registration/application-registration.component';
import { DataCollectionComponent } from './admin/data-collection/data-collection.component';

const routes: Routes = [
{path:"application-registration",component:ApplicationRegistrationComponent},
{path:"data-collection",component:DataCollectionComponent},
{path:"",redirectTo:"data-collection",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
