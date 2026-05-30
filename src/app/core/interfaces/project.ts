export interface Project {

  id: number;

  title: string;

  description: string;

  image: string;

  githubUrl: string;

  liveDemoUrl: string;

  technologies: string[];

  category: string;

  featured?: boolean;
  
}
