import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/models/offre'; 
import { offreService } from 'src/services/offreService'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})
export class AfficherOffreComponent  implements OnInit{
  offres: any[] = []; 
  selectedOffre: Offre | undefined;
  constructor(private router: Router, private offreserservice: offreService) { }
  ngOnInit(): void {
    this.getAllOffres();
  }


  getAllOffres() {
    this.offreserservice.getAllOffre().subscribe(
      (data: Offre[]) => { 
        this.offres = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    }

    deleteOffre(id: number) {
      const confirmDelete = confirm(`Are you sure you want to delete offre with ID ${id}?`);
      if (confirmDelete) {
        this.offreserservice.deleteOffre(id).subscribe(
          () => {
            console.log('offre deleted');
            this.getAllOffres();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
    showDetails(offre: Offre) {
      this.selectedOffre = offre;
    }

    updateOffre(offre: Offre): void {
      const id = offre.id;
      this.router.navigate(['/update-offre', id]);
    }
}
