export interface Project {
    slug: string;
    name: string;
    type: string;
    technologies: string[];
    context: string;
    solution: string;
    challenges: string;
    demoUrl?: string;
    repoUrl?: string;
    repoUrlBack?: string;
    repoUrlFront?: string;
}

export const PROJECTS: Project[] = [
    {
        slug: 'mundo-marcial',
        name: 'Web Mundo Marcial',
        type: 'Web App',
        technologies: ['Angular', 'Bootstrap', 'NgBootstrap', 'FontAwesome'],
        context:
            'La academia requería una presencia digital moderna que permitiera centralizar información clave, mostrar horarios de entrenamiento y facilitar el contacto con nuevos estudiantes. Además, necesitaba una plataforma clara y accesible que transmitiera su identidad y profesionalismo.',
        solution:
            'Desarrollé una Single Page Application (SPA) utilizando Angular, implementando un diseño moderno y completamente responsivo. La aplicación incluye sistema de ruteo, estructura modular y despliegue en producción, garantizando una navegación fluida y una experiencia de usuario óptima.',
        challenges:
            'La implementación de una arquitectura modular en Angular me permitió mejorar significativamente la mantenibilidad del proyecto y comprender con mayor profundidad la separación de responsabilidades. Además, reforcé mis conocimientos en organización de componentes, estructuración de carpetas y buenas prácticas en el desarrollo frontend.',
        demoUrl: 'https://mundomarcial.vercel.app/',
        repoUrlFront: 'https://github.com/KevinnC18/MundoMarcialPage'
    },
    {
        slug: 'gestion-inventario',
        name: 'Sistema de Gestión de Inventario',
        type: 'CRUD',
        technologies: ['Spring Boot', 'Angular', 'Base de datos (H2)'],
        context:
            'Como proyecto final de la materia de Programación Orientada a Objetos, debíamos desarrollar una solución completa que aplicara los principios vistos en clase. Decidimos crear una aplicación full-stack que permitiera gestionar un catálogo de productos mediante operaciones CRUD (Create, Read, Update, Delete).',
        solution:
            'Se desarrolló una interfaz de usuario utilizando Angular, con un diseño moderno y completamente responsivo. El frontend se comunica con una API REST construida con Spring Boot, encargada de gestionar la lógica de negocio y las operaciones CRUD sobre el catálogo de productos. La arquitectura implementada permitió una clara separación entre cliente y servidor, facilitando la escalabilidad y el mantenimiento del sistema.',
        challenges:
            'Uno de los principales retos fue lograr una correcta separación de responsabilidades entre el frontend y el backend, asegurando una comunicación eficiente a través de servicios HTTP. Este proyecto fortaleció mis conocimientos en arquitectura cliente-servidor, diseño de APIs REST, manejo de peticiones HTTP y organización estructurada del código en aplicaciones full-stack.',
        repoUrl: 'https://github.com/KevinnC18/SpringBoot-Angular'
    },
    {
        slug: 'videojuego',
        name: 'Videojuego por consola',
        type: 'Consola',
        technologies: ['Java', 'POO', 'Git/GitHub'],
        context:
            'Como proyecto final del modulo 4 del curso intensivo de Java, debía completar de manera autónoma una aplicación iniciada en clase bajo la guía del profesor. El reto consistía en aplicar los conceptos aprendidos de programación orientada a objetos para construir una solución funcional y estructurada.',
        solution:
            'Desarrollé un videojuego por consola que simula una batalla por turnos entre dos criaturas con habilidades distintas. Cada criatura cuenta con atributos como nombre, puntos de vida, ataque y defensa. Durante la partida, el jugador puede elegir entre realizar un ataque básico o ejecutar una habilidad especial. Al finalizar cada combate, el sistema genera un registro de batalla, el cual se almacena en un archivo .txt, permitiendo llevar un historial de enfrentamientos.',
        challenges:
            'El principal desafío fue diseñar y estructurar la lógica interna del juego, asegurando una interacción coherente entre clases, atributos y métodos. Esto implicó aplicar correctamente principios como encapsulamiento y separación de responsabilidades. Otro reto importante fue la gestión de archivos, ya que no se había abordado en profundidad durante el curso. Tuve que investigar por mi cuenta cómo crear, escribir y almacenar información en archivos .txt, lo que fortaleció mi autonomía y capacidad de aprendizaje.',
        demoUrl: 'https://youtu.be/VjZ1fve7vqk',
        repoUrl: 'https://github.com/KevinnC18/ProyectoFinalM4'
    },
    {
        slug: 'gestion-productos',
        name: 'Gestión de productos',
        type: 'API REST',
        technologies: ['Spring Boot', 'Angular', 'PostgreSQL'],
        context:
            'Durante el curso intensivo de Java, desarrollamos este proyecto como parte del proceso de aprendizaje práctico, con acompañamiento y guía del profesor. El objetivo era comprender la estructura y funcionamiento de una aplicación full-stack conectada a base de datos.',
        solution:
            'Se implementó un sistema de gestión de productos utilizando Spring Boot para el backend y PostgreSQL como base de datos. El frontend fue desarrollado en Angular, consumiendo la API REST del backend para realizar operaciones CRUD sobre un catálogo de productos. <br> El proyecto permitió integrar todas las capas de una aplicación moderna: persistencia de datos, lógica de negocio y presentación.',
        challenges:
            'Al tratarse de un proyecto guiado, mi participación estuvo enfocada principalmente en comprender la estructura y el flujo completo de la aplicación. Sin embargo, esta experiencia fue clave para entender la arquitectura de un sistema full-stack, la comunicación entre frontend y backend y el manejo de bases de datos relacionales. <br> Este proyecto se convirtió en una base sólida que posteriormente me permitió desarrollar soluciones similares de manera autónoma.',
        repoUrlBack: 'https://github.com/KevinnC18/Product-Backend',
        repoUrlFront: 'https://github.com/KevinnC18/Product-Frontend'
    },
    {
        slug: 'ecommerce',
        name: 'Sistema de ecommerce',
        type: 'API REST',
        technologies: ['Spring Boot', 'React', 'MySQL'],
        context:
            'Como parte de un laboratorio universitario, debía desarrollar una aplicación full-stack con arquitectura basada en API REST para un sistema de e-commerce. El objetivo era implementar una solución funcional que integrara backend, base de datos y frontend en una aplicación completa.',
        solution:
            'Desarrollé una API REST con Spring Boot que permite realizar operaciones CRUD sobre un catálogo de productos del e-commerce. La aplicación incluye una interfaz de usuario construida en React, desde la cual se pueden registrar, consultar, actualizar y eliminar productos. El sistema se conecta a una base de datos MySQL, asegurando la persistencia y gestión adecuada de la información.',
        challenges:
            'El principal desafío fue adaptarme a la estructura y filosofía de desarrollo en React, ya que previamente solo había trabajado con Angular. Este proceso me permitió comprender mejor las diferencias entre ambos frameworks, especialmente en el manejo de componentes, estado y organización del proyecto. <br> Además, reforcé mis conocimientos en integración frontend-backend y en el diseño de APIs REST orientadas a aplicaciones de comercio electrónico.',
        repoUrlBack: 'https://github.com/KevinnC18/Eccomerce-Backend',
        repoUrlFront: 'https://github.com/KevinnC18/Eccomerce-Frontend'
    },
    {
        slug: 'gestion-empleados',
        name: 'Sistema de gestión de empleados',
        type: 'CRUD',
        technologies: ['Node.js', 'Express', 'React', 'MySQL'],
        context:
            'Como parte de un laboratorio universitario, desarrollamos con acompañamiento del profesor un sistema de gestión de empleados. El objetivo era comprender el funcionamiento de una arquitectura full-stack basada en API REST, integrando backend, base de datos y frontend.',
        solution:
            'Implementé un CRUD con Node.js para la gestión de empleados, permitiendo realizar operaciones de creación, consulta, actualización y eliminación de registros. La aplicación incluye una interfaz desarrollada en React, desde la cual es posible administrar la información de los empleados de forma dinámica. <br> El sistema se conecta a una base de datos MySQL, garantizando la persistencia y correcta gestión de los datos.',
        challenges:
            'Uno de los principales retos fue adaptarme a la estructura de un proyecto desarrollado con Node.js y React, ya que previamente había trabajado principalmente con Angular y Spring Boot. <br> Este proceso me permitió comprender mejor las diferencias entre frameworks frontend, especialmente en el manejo de componentes, estado y organización del proyecto. Además, reforcé mis conocimientos en integración frontend-backend y en el diseño de APIs REST orientadas a sistemas de gestión.',
        repoUrlBack: 'https://github.com/KevinnC18/Employees-Backend',
        repoUrlFront: 'https://github.com/KevinnC18/Employees-Frontend'
    },
    {
        slug: 'gestion-vehiculos',
        name: 'Gestión de vehículos',
        type: 'POO/Consola',
        technologies: ['Java', 'POO', 'Git/GitHub'],
        context:
            'Al iniciar el curso intensivo de Java en Dev Senior Code, decidí crear un proyecto personal con el objetivo de reforzar y aplicar de manera práctica los conceptos aprendidos en Programación Orientada a Objetos (POO).',
        solution:
            'Desarrollé una aplicación por consola en Java para la gestión de vehículos, específicamente carros y motos. <br> El sistema permite: <br> - Crear nuevos vehículos <br> - Listar los vehículos registrados <br> - Visualizar la información detallada de cada vehículo <br> La estructura del proyecto se diseñó aplicando principios de POO como encapsulamiento, uso de clases, atributos y métodos, además de una organización clara del código.',
        challenges:
            'El mayor desafío fue desarrollar el proyecto de forma completamente autónoma. Aunque ya había iniciado en POO, este fue uno de mis primeros proyectos personales, lo que implicó enfrentarme a decisiones de diseño y estructuración por mi cuenta. <br> A través de investigación y práctica constante, logré implementar una solución funcional, fortaleciendo mi lógica de programación y mi capacidad para desarrollar proyectos desde cero.',
        repoUrl: 'https://github.com/KevinnC18/Gestion-Vehiculos'
    },
    {
        slug: 'gestion-tareas',
        name: 'Gestión de tareas personales',
        type: 'POO/Consola',
        technologies: ['Java', 'POO', 'Git/GitHub'],
        context:
            'Después de finalizar la materia de Fundamentos de Programación en la universidad, decidí reforzar los conocimientos adquiridos mediante la creación de un proyecto personal. El objetivo era practicar la lógica de programación y comenzar a aplicar los primeros conceptos de Programación Orientada a Objetos (POO).',
        solution:
            'Desarrollé una aplicación por consola en Java para la gestión de tareas personales. El sistema permite: <br> - Crear nuevas tareas <br> - Eliminar tareas existentes <br> - Listar todas las tareas registradas <br> - Marcar tareas como completadas <br> El proyecto fue estructurado utilizando clases, atributos y métodos, organizando la lógica de forma clara y modular.',
        challenges:
            'El principal desafío fue estructurar el proyecto de manera autónoma. Al estar iniciando en POO, definir la organización de clases y responsabilidades no fue sencillo. A través de investigación, prueba y error, logré construir una solución funcional, fortaleciendo mi comprensión de la lógica de programación, la organización del código y la importancia de una buena estructura desde las primeras etapas del desarrollo.',
        repoUrl: 'https://github.com/KevinnC18/Gestor-Tareas'
    },
];
