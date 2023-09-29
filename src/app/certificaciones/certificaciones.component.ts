import { Component, OnInit } from '@angular/core';
import { CertificacionesService } from '../services/certificaciones.service';
@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit{
  certificaciones: any[] = [];

  constructor(private certificacionesService: CertificacionesService) { }
  ngOnInit(): void {
    this.certificacionesService.getCertificaciones().subscribe((data: any[]) => {
      console.log(data);
      this.certificaciones = data;
    });
  }

}
