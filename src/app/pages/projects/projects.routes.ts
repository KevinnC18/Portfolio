import { Routes } from '@angular/router';
import { Projects } from './projects';
import { ProjectDetail } from './project-details/project-detail';

export const PROJECTS_ROUTES: Routes = [
    { path: '', component: Projects },
    { path: ':slug', component: ProjectDetail }
];
