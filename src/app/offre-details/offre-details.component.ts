import { Component,Input } from '@angular/core';
import { Offre } from 'src/models/offre'; 

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent {
  
  @Input() offre: Offre | undefined;
}
