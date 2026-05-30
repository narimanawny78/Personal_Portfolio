import { Component } from '@angular/core';
import { PROJECT_CATEGORIES } from '../../core/data/project-categories.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  categories = PROJECT_CATEGORIES;
}
