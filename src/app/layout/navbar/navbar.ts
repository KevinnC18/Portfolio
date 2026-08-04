import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './navbar.html'
})
export class NavBar {

    private router = inject(Router);

    goToHome() {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        this.router.navigate(['/home']);
    }

    isMobileMenuOpen = signal(false);

    toggleMenu() {
        this.isMobileMenuOpen.update(open => !open);
    }

    closeMenu() {
        this.isMobileMenuOpen.set(false);
    }

}