import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

   skillCategories = SKILL_CATEGORIES;
}
