import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  constructor(private headerService : HeaderService) {}

  name: string = "fake name"
  titulos: string = "Tecnico en Programacion"
  mision: string = "Poder trabajar y serle de ayuda a la empresa"
  foto: string = "fake photo"
  email: string = "yadhirTV@gmail.com"
  cel: string = "(229) 968 5317";
  location: string = "Orizaba, Ver."
  social: string = "@yodoeaofi06"

  ngOnInit() : void {
    this.headerService.getHeaders()
    .subscribe( (data: any) =>  {
      console.log(data);
      alert(data)

      this.name = data.name;
      this.titulos = data.titulos;
      this.mision = data.mision;
      this.foto = data.foto;
      this.email = data.email;
      this.cel = data.cel;
      this.location = data.location;
      this.social = data.social;
    })
    
  }
}


