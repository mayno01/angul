import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherOffreComponent } from './afficher-offre/afficher-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { FormOffreComponent } from './form-offre/form-offre.component';

const routes: Routes = [

  { path: 'offre', component: AfficherOffreComponent },
  { path: 'update-offre/:id', component: UpdateOffreComponent },
  { path: 'addoffre', component: FormOffreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
