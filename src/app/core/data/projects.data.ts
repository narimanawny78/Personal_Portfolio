import { Project } from "../interfaces/project";

export const PROJECTS: Project[] = [

  {
    id: 1,

    title: 'Clothes E-Commerce',

    description:
      'E-commerce application built with JavaScript and Firebase.',

    image: 'assets/images/projects/clothes-ecommerce.png',

    githubUrl: '',

    liveDemoUrl: 'https://jsproj-group.web.app/index.html',

    technologies: [
      'JavaScript',
      'Firebase',
      'HTML',
      'CSS'
    ],

    category: 'iti'
  },

  {
    id: 2,

    title: 'Resume Builder',

    description:
      'Angular application for creating and exporting professional resumes.',

    image: 'assets/images/projects/resume-builder.png',

    githubUrl: '',

    liveDemoUrl: 'https://resume-app-xi-three.vercel.app/',

    technologies: [
      'Angular',
      'TypeScript',
      'SCSS'
    ],

    category: 'iti'
  },

  {
    id: 3,

    title: 'Book E-Commerce',

    description:
      'Full stack book store built using MongoDB, Express, Angular and Node.js.',

    image: 'assets/images/projects/book-ecommerce.png',

    githubUrl: '',

    liveDemoUrl: 'https://book-store-client-ten-alpha.vercel.app/',

    technologies: [
      'MongoDB',
      'Express',
      'Angular',
      'Node.js'
    ],

    category: 'iti'
  },

  {
    id: 4,

    title: 'EcoCycle',

    description:
      'Recycling platform built with React and Laravel.',

    image: 'assets/images/projects/ecocycle.png',

    githubUrl: 'https://github.com/EcoRenew',

    liveDemoUrl: '',

    technologies: [
      'React',
      'Laravel',
      'MySQL'
    ],

    category: 'iti'
  },
  {
  id: 5,

  title: 'Movie App',

  description:
    'Movie discovery application built with Angular and external APIs.',

  image: 'assets/images/projects/movie-app.png',

  githubUrl: 'https://github.com/narimanawny78/Angular_MovieApp.git',

  liveDemoUrl: '',

  technologies: [
    'Angular',
    'TypeScript',
    'RxJS',
    'REST API'
  ],

  category: 'frontend'
},
{
  id: 6,

  title: 'E-Commerce Platform',

  description:
    'Full stack e-commerce platform built with Angular, Firebase and NgRx Signal Store.',

  image: 'assets/images/projects/fullstack_Angular_ecommerce.png',

  githubUrl: 'ecommerce: https://github.com/narimanawny78/Angular_Ecommerce',

  liveDemoUrl: '',

  technologies: [
    'Angular',
    'Firebase',
    'NgRx Signal Store',
    'TypeScript'
  ],

  category: 'fullstack'
}

];
