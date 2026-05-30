import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../core/interfaces/project';
import { PROJECTS } from '../../../../core/data/projects.data';
import { ProjectCardComponent } from "../../../../shared/components/project-card/project-card.component";

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];

  constructor( private activateRoute : ActivatedRoute){}

  ngOnInit(): void {
    const category = this.activateRoute.snapshot.paramMap.get('category');
    this.projects = PROJECTS.filter((project) => project.category === category);
  }


}
