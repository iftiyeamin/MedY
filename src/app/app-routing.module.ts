import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { ContentComponent } from './content/content.component';

import { DrugclassesComponent } from './drugclasses/drugclasses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedicinesComponent } from './medicines/medicines.component';
const routes: Routes = [
  { path: 'medicines', component: MedicinesComponent },
  { path: 'brands', component: BrandsComponent },
  { path: '', component: HomepageComponent },
  {path:'drugclasses', component:DrugclassesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
