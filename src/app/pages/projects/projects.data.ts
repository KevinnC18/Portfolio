export interface Project {
    slug: string;
    name: string;
    type: string;
    technologies: string[];
    context?: string;
    solution?: string;
    challenges?: string;
    demoUrl?: string;
    repoUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        slug: 'mundo-marcial',
        name: 'Mundo Marcial',
        type: 'Web App',
        technologies: ['Angular', 'Bootstrap', 'NgBootstrap', 'FontAwesome'],
        context:
            'La academia necesitaba una presencia digital moderna que permitiera mostrar información clave, horarios y facilitar el contacto con nuevos estudiantes.',
        solution:
            'Desarrollé una SPA desarrollada con Angular, con un diseño moderno y responsivo incluyendo ruteo y despliegue.',
        challenges:
            'Implementar una estructura modular en Angular me permitió mejorar la mantenibilidad del proyecto y comprender mejor la separación de responsabilidades.',
        demoUrl: 'https://mundomarcial.vercel.app/',
        repoUrl: 'https://github.com/KevinnC18/MundoMarcialPage'
    },
    {
        slug: 'gestion-inventario',
        name: 'Sistema de Gestión de Inventario',
        type: 'CRUD',
        technologies: ['Spring Boot', 'Angular', 'Base de datos (H2)'],
        context:
            'Necesitabamos un proyecto final para la materia de Programación Orientada a Objetos y decidimos crear una aplicación full-stack que permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre un catálogo de productos.',
        solution:
            'Se desarrolló una interfaz de usuario con Angular, con un diseño moderno y responsivo incluyendo comunicación con una API REST desarrollada con Spring Boot que permite realizar operaciones CRUD sobre un catálogo de productos.',
        challenges:
            'La separación de responsabilidades entre el frontend y el backend fue un desafío interesante, ya que requirió una comunicación efectiva entre ambos.',
        repoUrl: 'https://github.com/KevinnC18/SpringBoot-Angular'
    },
    {
        slug: 'videojuego',
        name: 'Videojuego por consola',
        type: 'Consola',
        technologies: ['Java', 'Git/GitHub'],
        context:
            'Necesitaba crear un proyecto final para el curso intensivo de Java, durante las clases se inció con el proyecto guiado por el profesor, y al final debiamos completarlo por nuestra cuenta.',
        solution:
            'Desarrollé un videojuego por consola que simula una batalla por turnos entre dos criaturas con diferentes habilidades. Cada criatura posee atributos como nombre, vida, ataque y defensa. Durante el juego, el jugador puede elegir entre atacar o usar un comportamiento especial y al acabar la batalla, el sistema crea un registro de batallas que se guarda en un archivo .txt.',
        challenges:
            'El principal desafio fue crear la lógica del juego, ya que requirió una comunicación efectiva entre todos los elementos del juego. Otro gran desafio fue la gestión de archivos para guardar los registros de batallas ya que no se habia visto en clase y tuve que aprender e investigar por mi cuenta.',
        demoUrl: 'https://youtu.be/VjZ1fve7vqk',
        repoUrl: 'https://github.com/KevinnC18/ProyectoFinalM4'
    }
];
