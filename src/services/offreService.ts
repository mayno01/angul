import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from 'src/models/offre'; 


@Injectable({
    providedIn: 'root'
  })
  export class offreService {

    private baseUrl = 'http://localhost:6868/offres'; 

    constructor(private http: HttpClient) { }


    
    getAllOffre(): Observable<Offre[]> {
        return this.http.get<Offre[]>(`${this.baseUrl}/all`);
      }

      deleteOffre(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`);
      }

      addOffre(offre: Offre): Observable<Offre> {
        return this.http.post<Offre>(`${this.baseUrl}`, offre);
      }

      updateOffre(offre:Offre, id: number): Observable<Offre> {
        return this.http.put<Offre>(`${this.baseUrl}/${id}`, offre);
      }
      getOffreById(id: number): Observable<Offre> {
        return this.http.get<Offre>(`${this.baseUrl}/${id}`);
      }

  }