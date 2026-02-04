import { Routes } from '@angular/router';
import { HomeViews } from './pages/home/views/home-views/home-views';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeViews
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./pages/projects/projects.routes').then((m) => m.PROJECTS_ROUTES)
    }
];
