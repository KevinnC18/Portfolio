import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from "./pages/home/home.module";
import { NavBar } from "./layout/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('protfolio');
}
