import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [

    {
      title: 'Graduation Project',

      description:
      `Praecox supports Alzheimer’s patients and
      uses AI to detect dementia stages using MRI images.`,

      mainImage: 'assets/images/GR-icon.png',

      hoverImage: 'assets/images/GR-Project.png',

      projectLink:
      'https://narimanawny78.github.io/Praecox-GR-Project/'
    },

    {
      title: 'Landing Page Design',

      description:
      `A modern and responsive landing page designed
      to showcase products and improve engagement.`,

      mainImage: 'assets/images/landing-icon.png',

      hoverImage: 'assets/images/landing-project.png',

      projectLink: '#'
    },

    {
      title: 'E-commerce Platform',

      description:
      `A complete e-commerce experience with
      responsive design and modern UI.`,

      mainImage: 'assets/images/E-commerce-icon.png',

      hoverImage: 'assets/images/E-commerce-Project.png',

      projectLink: '#'
    }

  ];
}
