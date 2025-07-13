import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApproDocument } from '../models/chantier.model';

@Injectable({
  providedIn: 'root'
})
export class ApproService {
  private baseUrl = 'http://197.11.82.106:93/api/recherche/tbdata';

  constructor(private http: HttpClient) { }

  getApproDocuments(chantierId: string): Observable<ApproDocument[]> {
    return this.http.get<ApproDocument[]>(`${this.baseUrl}?tablere=batida&val=${chantierId}`);
  }
}

