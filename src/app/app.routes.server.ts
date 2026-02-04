import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './pages/projects/projects.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return PROJECTS.map((project) => ({
        slug: project.slug,
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
