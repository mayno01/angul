import { Component, OnInit } from '@angular/core';
import { offreService } from 'src/services/offreService'; 
import { Router } from '@angular/router';
import { Offre } from 'src/models/offre';   


@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.css']
})
export class FormOffreComponent  implements OnInit{

  offre: any[] = []; 
  constructor(private router: Router, private offreservice: offreService) { }
  ngOnInit(): void {
    this.getOffre();
  }

  getOffre() {
    this.offreservice.getAllOffre().subscribe(
      (data: Offre[]) => { 
        this.offre = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    }
    addOffre(classData: any) { 
      this.offreservice.addOffre(classData).subscribe(
        (data: any) => {
          console.log('offre added:', data);
  
          this.getOffre(); 
        },
        (error) => {
          console.log(error);
       
        }
      );
    }

}
