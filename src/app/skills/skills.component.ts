import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: any[] = [];

  constructor(private SkillsService: SkillsService) { }
  ngOnInit(): void {
    this.SkillsService.getSkills().subscribe((data: any[]) => {
      console.log(data);
      this.skills = data;
    });
  }

}
