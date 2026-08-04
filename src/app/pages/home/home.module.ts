import { NgModule } from "@angular/core";
import { Home } from "./components/header/home";
import { FeaturedProjects } from "./components/featured-projects/featured-projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [
        Home,
        FeaturedProjects,
        TechStack
    ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        Home,
        FeaturedProjects,
        TechStack
    ]
})
export class HomeModule { }