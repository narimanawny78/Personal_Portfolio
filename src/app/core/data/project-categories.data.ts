import { ProjectCategory } from "../interfaces/project-category";

export const PROJECT_CATEGORIES: ProjectCategory[] = [

  {
    id: 1,

    title: 'ITI Projects',

    description:
      'Projects developed during my ITI intensive training.',

    image: 'assets/images/projects/iti-projects.png',

    route: '/projects/iti'
  },

  {
    id: 2,

    title: 'Frontend Projects',

    description:
      'Responsive and modern frontend applications.',

    image: 'assets/images/projects/frontend-projects.png',

    route: '/projects/frontend'
  },

  {
    id: 3,

    title: 'Full Stack Projects',

    description:
      'Applications built with frontend and backend technologies.',

    image: 'assets/images/projects/fullstack-projects.png',

    route: '/projects/fullstack'
  }

];
