import { Offre } from 'src/models/offre';  
import { Component, OnInit ,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { offreService } from 'src/services/offreService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {

  offre: Offre = { id: 0, date: new Date(), title: '', idEntreprise: 0, description: '', location: '', remote: '', easyApply: false };
  
  constructor(private route: ActivatedRoute, private router: Router, private offreservice: offreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.offreservice.getOffreById(id).subscribe(data => {
          this.offre = data || { id: 0, date: new Date(), title: '', idEntreprise: 0, description: '', location: '', remote: '', easyApply: false };
        });
      }
    });
  }

  updateOffre(): void {
    if (this.offre) {
      this.offreservice.updateOffre(this.offre, this.offre.id).subscribe(updated => {
        this.router.navigate(['/offres']);
      }, error => {
 
      });
    }
  }
}