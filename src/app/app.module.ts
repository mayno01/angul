import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { AfficherOffreComponent } from './afficher-offre/afficher-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { FormOffreComponent } from './form-offre/form-offre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OffreDetailsComponent,
    AfficherOffreComponent,
    UpdateOffreComponent,
    FormOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
