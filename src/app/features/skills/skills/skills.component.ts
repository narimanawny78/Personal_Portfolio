import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

   skillCategories = [
    {

      title: 'Frontend',

      skills: [

        {
          name: 'Angular',
          level: 90,
          icon: 'fa-brands fa-angular'
        },

        {
          name: 'React',
          level: 75,
          icon: 'fa-brands fa-react'
        },

        {
          name: 'JavaScript',
          level: 90,
          icon: 'fa-brands fa-js'
        },

        {
          name: 'TypeScript',
          level: 85,
          icon: 'fa-solid fa-code'
        },

        {
          name: 'HTML5',
          level: 95,
          icon: 'fa-brands fa-html5'
        },

        {
          name: 'CSS3',
          level: 90,
          icon: 'fa-brands fa-css3-alt'
        }

      ]

    },

    {

      title: 'Backend',

      skills: [

        {
          name: 'Node.js',
          level: 75,
          icon: 'fa-brands fa-node-js'
        },

        {
          name: 'Laravel',
          level: 70,
          icon: 'fa-brands fa-laravel'
        },

        {
          name: 'PHP',
          level: 70,
          icon: 'fa-brands fa-php'
        }

      ]

    },

    {

      title: 'Database',

      skills: [

        {
          name: 'MySQL',
          level: 85,
          icon: 'fa-solid fa-database'
        },

        {
          name: 'MongoDB',
          level: 75,
          icon: 'fa-solid fa-leaf'
        }

      ]

    },

    {

      title: 'Tools',

      skills: [

        {
          name: 'Git',
          level: 85,
          icon: 'fa-brands fa-git-alt'
        },

        {
          name: 'GitHub',
          level: 90,
          icon: 'fa-brands fa-github'
        },

        {
          name: 'Postman',
          level: 80,
          icon: 'fa-solid fa-paper-plane'
        }

      ]

    }

  ];
}
