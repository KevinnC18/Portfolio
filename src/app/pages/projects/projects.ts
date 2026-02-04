import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from './projects.data';
import { PROJECTS } from './projects.data';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './projects.html'
})
export class Projects {
    projects: Project[] = PROJECTS;
}
