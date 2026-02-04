import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { Project, PROJECTS } from '../projects.data';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './project-detail.html'
})
export class ProjectDetail {
    private readonly route = inject(ActivatedRoute);

    project = toSignal(
        this.route.paramMap.pipe(
            map((params) => params.get('slug')),
            map((slug) => PROJECTS.find((p) => p.slug === slug) ?? null)
        ),
        { initialValue: null as Project | null }
    );
}
