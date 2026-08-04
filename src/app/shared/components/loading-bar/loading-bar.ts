import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-loading-bar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div 
      class="fixed top-0 left-0 right-0 z-9999 pointer-events-none h-3px bg-transparent transition-opacity duration-300"
      [style.opacity]="opacity()"
    >
      <div 
        class="h-full bg-linear-to-r from-primary via-primary-light to-primary-hover transition-all duration-300 ease-out relative shadow-[0_0_12px_var(--color-primary),0_0_6px_var(--color-primary-light)]"
        [style.width.%]="progress()"
      >
        <!-- Destello brillante en la punta de la barra -->
        <div class="absolute right-0 top-0 bottom-0 w-12 bg-text-muted blur-[3px] transform translate-x-1/2"></div>
      </div>
    </div>
  `
})
export class LoadingBar implements OnInit, OnDestroy {
    private router = inject(Router);
    private subscription?: Subscription;

    progress = signal(0);
    opacity = signal(0);

    private progressInterval: any;
    private finishTimeout: any;

    ngOnInit() {
        if (typeof window === 'undefined') return;

        this.subscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.startLoading();
                this.scrollToTop();
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError
            ) {
                this.completeLoading();
                this.scrollToTop();
            }
        });
    }

    public scrollToTop() {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    private startLoading() {
        clearTimeout(this.finishTimeout);
        clearInterval(this.progressInterval);

        this.opacity.set(1);
        this.progress.set(15);

        // Incrementar el progreso gradualmente para simular la carga en tiempo real
        this.progressInterval = setInterval(() => {
            this.progress.update(current => {
                if (current >= 80) {
                    clearInterval(this.progressInterval);
                    return 80;
                }
                const step = (85 - current) * 0.2;
                return current + Math.max(step, 2);
            });
        }, 80);
    }

    private completeLoading() {
        clearInterval(this.progressInterval);
        this.progress.set(100);

        // Esperar a que la barra llegue al 100%, luego desvanecer
        this.finishTimeout = setTimeout(() => {
            this.opacity.set(0);
            setTimeout(() => {
                this.progress.set(0);
            }, 300);
        }, 250);
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
        if (typeof window !== 'undefined') {
            clearInterval(this.progressInterval);
            clearTimeout(this.finishTimeout);
        }
    }
}
