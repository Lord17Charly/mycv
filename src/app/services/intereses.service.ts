import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteresesService {
  private apiUrl = 'https://apicv-service-lord17charly.cloud.okteto.net/'; 

  constructor(private http: HttpClient) { }

  getIntereses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/intereses`)
      .pipe(
        map((response: any) => response.intereses)
      );
  }
}