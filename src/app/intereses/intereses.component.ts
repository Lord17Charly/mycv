import { Component, OnInit } from '@angular/core';
import { InteresesService } from '../services/intereses.service';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit{
  intereses: any[] = [];

  constructor( private InteresesService:InteresesService) { }
  ngOnInit(): void {
    this.InteresesService.getIntereses().subscribe((data: any[]) => {
      console.log(data);
      this.intereses = data;
    });
  }
}