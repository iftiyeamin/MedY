import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.cpmponent';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { AllopathicComponent } from './medicines/allopathic/allopathic.component';
import { HerbalComponent } from './medicines/herbal/herbal.component';
import { BrandsComponent } from './brands/brands.component';


import { BrandListComponent } from './brand-list/brand-list.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { BrandListEditComponent } from './brand-list-edit/brand-list-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MedicinesComponent,
    MedicineListComponent,
    AllopathicComponent,
    HerbalComponent,
    BrandsComponent,
    HomepageComponent,
    
    
         BrandListComponent,
         MedicineEditComponent,
         MedicineDetailsComponent,
         BrandListEditComponent,
         ContentComponent,
         FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
