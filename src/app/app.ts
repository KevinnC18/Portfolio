import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from "./pages/home/home.module";
import { NavBar } from "./layout/navbar/navbar";
import { Footer } from './layout/footer/footer';
import { LoadingBar } from './shared/components/loading-bar/loading-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule, NavBar, Footer, LoadingBar],
  templateUrl: './app.html',
  styles: []
})
export class App {
  protected readonly title = signal('portfolio');
}
