import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-featured-projects',
  standalone: false,
  templateUrl: './featured-projects.html'
})
export class FeaturedProjects {
  public readonly projects: Project[] = [
    {
      title: 'Mundo Marcial',
      description:
        'Aplicación web desarrollada con Angular para una escuela de Taekwondo, enfocada en presentar información institucional de forma clara y profesional. Incluye diseño responsivo, navegación estructurada y despliegue en línea, garantizando una experiencia de usuario consistente en distintos dispositivos.',
      technologies: [
        'Angular - Framework principal',
        'Bootstrap - Framework CSS para diseño responsive',
        'FontAwesome - Iconografía'
      ],
      link: '/projects/mundo-marcial'
    },
    {
      title: 'Sistema de Gestión de Inventario',
      description:
        'Sistema de gestión de inventario basado en una API REST desarrollada con Spring Boot, que permite administrar productos y usuarios mediante operaciones CRUD con validaciones y persistencia de datos utilizando JPA y una base de datos relacional. Además, se implementó una interfaz frontend en Angular integrada a la API para facilitar la gestión y visualización de la información.',
      technologies: [
        'Spring Boot - Framework principal',
        'Angular - Framework principal',
        'Base de Datos (H2)'
      ],
      link: '/projects/gestion-inventario'
    },
    {
      title: 'Videojuego por consola',
      description:
        'Videojuego por consola desarrollado en Java, diseñado bajo principios de programación orientada a objetos y patrones de diseño. Implementa manejo de archivos para la persistencia de datos y una arquitectura modular que facilita el mantenimiento, la extensibilidad y la escalabilidad del sistema.',
      technologies: [
        'Java - Lenguaje principal',
        'POO - Programación Orientada a Objetos',
        'Git-GitHub - Control de versiones'
      ],
      link: '/projects/videojuego'
    }
  ];
}

