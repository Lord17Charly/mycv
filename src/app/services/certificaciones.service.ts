import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificacionesService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getCertificaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/certificaciones`)
      .pipe(
        map((response: any) => response.certificaciones)
      );
  }
}
