import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [NgClass],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './navbar.html'
})
export class NavBar {

    isScrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50;
    }

}