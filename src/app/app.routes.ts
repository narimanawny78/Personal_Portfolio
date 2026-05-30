import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsListComponent } from './features/projects/pages/projects-list/projects-list.component';

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'projects/:category',
      component: ProjectsListComponent
    },
  ]
  }
];
