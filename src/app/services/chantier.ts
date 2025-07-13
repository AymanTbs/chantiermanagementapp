import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chantier } from '../models/chantier.model';

@Injectable({
  providedIn: 'root'
})
export class ChantierService {
  private baseUrl = 'http://197.11.82.106:93/api/recherche/tbdata';

  constructor(private http: HttpClient) { }

  getChantiers(): Observable<Chantier[]> {
    return this.http.get<Chantier[]>(`${this.baseUrl}?tablere=batiAffairelist&param=admin`);
  }
}

