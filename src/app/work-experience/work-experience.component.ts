import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  WorkExperience: any[] = [];

    constructor(private workexperienceService: WorkExperienceService) {}
    
  ngOnInit() : void {
    this.workexperienceService.getWorkExperience().subscribe((data: any[]) =>  {
      console.log(data);
      alert(data)

      // Asignar los datos al array trabajo
      this.WorkExperience = data;
  });
}
}