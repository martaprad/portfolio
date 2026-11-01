export interface Profile {
  name: string;
  role: string;
  badge: string;
  tagline: string;
  location: string;
  availability: string;
  languages: { name: string; level: string }[];
  metrics: { value: string; label: string; detail: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  skills: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Data & Cloud';
  badge: string;
  description: string;
  solution: string;
  stack: string[];
  frontendStack?: string[];
  backendStack?: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  stack: string[];
  githubUrl: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  tags?: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  action?: 'link' | 'copy';
}

export const PORTFOLIO_DATA: {
  profile: Profile;
  valuePillars: { icon: string; title: string; description: string }[];
  skillCategories: SkillCategory[];
  featuredProjects: FeaturedProject[];
  personalProjects: PersonalProject[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  contactLinks: ContactLink[];
} = {
  profile: {
    name: 'Marta Pradillo Rodríguez',
    role: 'Full Stack Developer',
    badge: 'Angular • FastAPI • Cloud & Data',
    tagline:
      'Desarrolladora Full Stack (DAW) con experiencia en consultoría tecnológica, desarrollo web moderno con Angular y FastAPI, e ingeniería de datos con SQL Azure y Databricks. Aporto visión técnica integral, capacidad analítica y más de 6 años liderando equipos.',
    location: 'Madrid, España',
    availability: 'Disponible para proyectos Full Stack (Remoto / Híbrido)',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2 Profesional' }
    ],
    metrics: [
      { value: 'Full Stack', label: 'Especialización', detail: 'Frontend + Backend + Data' },
      { value: '6+ Años', label: 'Liderazgo & Gestión', detail: 'Equipos de hasta 15 personas' },
      { value: 'DAW', label: 'Titulación Oficial', detail: 'Desarrollo de Apps Web' }
    ]
  },

  valuePillars: [
    {
      icon: 'layers',
      title: 'Desarrollo Full Stack Moderno',
      description:
        'Construcción de arquitecturas desacopladas y mantenibles: interfaces reactivas en Angular (Signals, PrimeNG, Tailwind) y APIs REST de alto rendimiento con Python (FastAPI, SQLAlchemy).'
    },
    {
      icon: 'database',
      title: 'Datos, Pipelines & Cloud',
      description:
        'Modelado relacional y análisis de datos en SQL Azure y Databricks. Capacidad para integrar analítica avanzada y automatizaciones en la capa de aplicación.'
    },
    {
      icon: 'users',
      title: 'Consultoría & Liderazgo de Equipos',
      description:
        'Más de 6 años coordinando equipos multidisciplinares, comunicándome directamente con stakeholders, analizando necesidades funcionales y traduciéndolas en soluciones de negocio de alto impacto.'
    }
  ],

  skillCategories: [
    {
      id: 'frontend',
      name: 'Frontend Engineering',
      tag: 'UI / UX & Reactividad',
      description:
        'Desarrollo de interfaces intuitivas, componentes reutilizables y aplicaciones web progresivas orientadas al usuario final.',
      skills: [
        'Angular (v17 - v21)',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'PrimeNG',
        'SCSS / CSS3',
        'Angular Signals & RxJS',
        'HTML5 Semántico',
        'Bootstrap 5',
        'Diseño Responsive & Accesibilidad'
      ]
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      tag: 'Arquitectura & Servicios',
      description:
        'Servicios web robustos, APIs RESTful documentadas, patrones de diseño limpios y seguridad.',
      skills: [
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'Pydantic',
        'Java / Spring Boot',
        'RESTful APIs',
        'Swagger / OpenAPI',
        'Autenticación JWT',
        'Arquitectura en Capas'
      ]
    },
    {
      id: 'data',
      name: 'Data & Cloud Ecosystem',
      tag: 'Bases de Datos & Analítica',
      description:
        'Diseño relacional, consultas analíticas optimizadas y procesamiento de datos en entornos cloud empresariales.',
      skills: [
        'SQL Azure',
        'PostgreSQL',
        'MySQL',
        'Databricks',
        'PySpark / Notebooks',
        'ETL & Pipelines de Datos',
        'Modelado Relacional'
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Herramientas',
      tag: 'Automatización & Calidad',
      description:
        'Control de versiones colaborativo, integración continua y despliegues controlados.',
      skills: [
        'Git & GitHub',
        'GitLab CI/CD',
        'GitHub Actions',
        'Docker & Docker Compose',
        'Azure VMs / VDI',
        'Vitest / Testing Unitario',
        'Postman / Insomnia'
      ]
    },
    {
      id: 'leadership',
      name: 'Liderazgo & Soft Skills',
      tag: 'Gestión & Metodologías',
      description:
        'Habilidades interpersonales y metodológicas que aseguran una entrega de valor ágil y coordinada.',
      skills: [
        'Gestión y coordinación de equipos (15 personas)',
        'Toma de requisitos con clientes / stakeholders',
        'Metodologías Ágiles (Scrum / Kanban)',
        'Resolución de problemas complejos',
        'Comunicación asertiva y mentoring'
      ]
    }
  ],

  featuredProjects: [
    {
      id: 'hotel-front',
      title: 'Hotel MDV — Plataforma de Gestión Hotelera & Reservas',
      category: 'Full Stack',
      badge: 'Full Stack • Java Spring Boot + JS + MySQL + Docker',
      description:
        'Proyecto final del Ciclo Superior de Desarrollo de Aplicaciones Web (DAW). Sistema web completo para la reserva de habitaciones, contratación de actividades y traslados, con gestión de perfiles de usuario y panel de administración.',
      solution:
        'Arquitectura cliente-servidor desacoplada. Frontend dinámico con JavaScript ES6, Bootstrap 5 y llamadas asíncronas vía Fetch API a una API REST en Java 17 con Spring Boot 3, autenticación y autorización mediante Spring Security y JWT, persistencia relacional con MySQL y orquestación con Docker Compose.',
      stack: ['JavaScript ES6', 'Bootstrap 5', 'Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'MySQL', 'Docker Compose'],
      frontendStack: ['HTML5 / CSS3', 'JavaScript ES6', 'Bootstrap 5', 'Fetch API', 'Responsive Layout'],
      backendStack: ['Java 17', 'Spring Boot 3', 'Spring Security & JWT', 'MySQL', 'Docker & Compose'],
      highlights: [
        'Autenticación robusta y control de acceso basado en roles (clientes vs. administradores) mediante JWT',
        'Gestión integral de reservas activas, historial, cancelaciones y módulo de reseñas',
        'Panel administrativo para la visualización y control centralizado de todas las operaciones',
        'Contenedorización completa con Docker Compose para un despliegue homogéneo y reproducible'
      ],
      githubUrl: 'https://github.com/martaprad/HotelFront',
      status: 'Proyecto Final DAW'
    },
    {
      id: 'portfolio-web',
      title: 'Interactive Portfolio & Cloud Showcase',
      category: 'Frontend',
      badge: 'Angular 21 + TypeScript + Signals + GitHub API',
      description:
        'Portfolio interactivo de alto rendimiento desarrollado con la versión más reciente de Angular, arquitectura modular reactiva mediante Signals y sincronización en tiempo real con GitHub.',
      solution:
        'Construido aplicando buenas prácticas modernas de Angular 21: reactividad nativa con Signals (eliminando re-renders y ciclos innecesarios), separación estricta entre datos y lógica, diseño dark mode refinado con glassmorphism, animaciones no intrusivas con IntersectionObserver y testing unitario con Vitest.',
      stack: ['Angular 21', 'TypeScript', 'SCSS', 'Angular Signals', 'GitHub API', 'Vitest', 'GitHub Pages'],
      frontendStack: ['Angular 21', 'TypeScript 5.9', 'SCSS Modular', 'Signals & Computed', 'Responsive Layout'],
      backendStack: ['GitHub REST API v3', 'GitHub Actions CI/CD', 'GitHub Pages'],
      highlights: [
        'Consumo asíncrono y en tiempo real de la API oficial de GitHub con manejo reactivo de estados',
        'Reducción del bundle en un 38% y eliminación de scroll-jacking para una navegación natural',
        'Suite de pruebas unitarias automatizada con Vitest y Angular TestBed',
        'Flujo de despliegue continuo automatizado con GitHub Actions'
      ],
      githubUrl: 'https://github.com/martaprad/portfolio',
      liveUrl: 'https://martaprad.github.io/portfolio/',
      status: 'En producción / Online'
    }
  ],

  personalProjects: [
    {
      id: 'cumple-lore',
      title: 'Cumple Lore — Retos & Dinámicas Web',
      category: 'Web Interactiva & Ocio',
      tag: 'JavaScript & Creatividad',
      description:
        'Aplicación web interactiva desarrollada para una celebración de cumpleaños con juegos de pistas, preguntas y dinámicas lógicas personalizadas.',
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Lógica Interactiva'],
      githubUrl: 'https://github.com/martaprad/cumple-lore'
    },
    {
      id: 'skyroads',
      title: 'Skyroads Remake — Juego Retro',
      category: 'Videojuego & POO',
      tag: 'Java & Algoritmia',
      description:
        'Adaptación en Java del clásico juego espacial de carreras de MS-DOS Skyroads, implementando programación orientada a objetos, control de físicas y obstáculos.',
      stack: ['Java', 'POO', 'Control de Físicas', 'Game Loop'],
      githubUrl: 'https://github.com/martaprad/Skyroads'
    },
    {
      id: 'rps',
      title: 'Rock, Paper, Scissors',
      category: 'Scripting & Lógica',
      tag: 'Python',
      description:
        'Implementación del juego clásico de piedra, papel o tijera en Python, trabajando control de flujo, validación de entradas de usuario y modularidad.',
      stack: ['Python', 'Control de Flujo', 'Validación'],
      githubUrl: 'https://github.com/martaprad/RPS'
    },
    {
      id: 'teachers-pet',
      title: 'TeachersPet',
      category: 'Diseño & Maquetación',
      tag: 'CSS & Frontend',
      description:
        'Proyecto enfocado en la práctica de maquetación avanzada, selectores CSS, tipografía responsiva y componentes visuales.',
      stack: ['CSS3', 'HTML5', 'Diseño Responsivo'],
      githubUrl: 'https://github.com/martaprad/teachersPet'
    }
  ],

  experiences: [
    {
      period: 'Ene 2025 - Presente',
      role: 'Full Stack Developer & Data Analyst',
      company: 'NovaQuality Consulting SL',
      location: 'Alcobendas, Madrid',
      type: 'Consultoría Tecnológica',
      summary:
        'Desarrollo de aplicaciones web de extremo a extremo para clientes corporativos, diseño de servicios backend, analítica de datos en la nube y consultoría funcional.',
      achievements: [
        'Diseño y desarrollo de aplicaciones web full stack combinando interfaces reactivas en Angular (PrimeNG, Tailwind) con microservicios en FastAPI (Python).',
        'Modelado relacional, consultas complejas y pipelines de extracción y transformación de datos (ETL) utilizando Databricks y SQL Azure.',
        'Implementación y mantenimiento de flujos de integración y entrega continua (CI/CD) con GitLab, asegurando código limpio y despliegues estables.',
        'Interlocución directa con clientes y stakeholders para la toma de requerimientos funcionales, refinamiento y entrega de soluciones orientadas a negocio.'
      ],
      technologies: ['Angular', 'FastAPI', 'Python', 'SQL Azure', 'Databricks', 'GitLab CI/CD', 'PrimeNG', 'Tailwind']
    },
    {
      period: 'Sep 2018 - Dic 2024',
      role: 'Jefa de Equipo / Coordinadora de Operaciones',
      company: 'Perse Responde SL',
      location: 'Madrid',
      type: 'Gestión & Operaciones',
      summary:
        'Liderazgo y coordinación integral de un equipo operativo de 15 personas, asegurando calidad de servicio, optimización de flujos y cumplimiento de objetivos.',
      achievements: [
        'Coordinación operativa diaria de un equipo de 15 personas, gestión de turnos, motivación y resolución de bloqueos.',
        'Diseño e impartición de planes de formación y onboarding técnico para nuevos miembros del equipo.',
        'Elaboración y análisis de informes de rendimiento y cuadros de mando (KPIs) para la dirección de la empresa.',
        'Mejora continua de procesos internos, reduciendo tiempos de respuesta y elevando los índices de satisfacción de servicio.'
      ],
      technologies: ['Gestión de Equipos', 'Liderazgo', 'Análisis de KPIs', 'Resolución de Conflictos', 'Optimización de Procesos']
    },
    {
      period: 'Ago 2014 - Dic 2024',
      role: 'Especialista en Tramitación & Análisis de Casos',
      company: 'GAB Centro Peritaciones SL',
      location: 'Madrid',
      type: 'Análisis & Negociación',
      summary:
        'Interpretación técnica de pólizas, tramitación de siniestros complejos y atención a clientes corporativos (puesto compatibilizado con el rol de jefa de equipo).',
      achievements: [
        'Análisis riguroso de expedientes periciales y aplicación estricta de normativas contractuales.',
        'Negociación y resolución de discrepancias técnicas entre partes interesadas con alto nivel de diplomacia y asertividad.'
      ],
      technologies: ['Análisis Crítico', 'Atención al Cliente', 'Resolución de Discrepancias', 'Organización Rigurosa']
    }
  ],

  education: [
    {
      period: '2023 - 2025',
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
      institution: 'Ciclo Formativo de Grado Superior (Titulación Oficial)',
      description:
        'Formación reglada en desarrollo de software integral: arquitectura cliente-servidor, bases de datos relacionales (MySQL, SQL), desarrollo frontend (HTML5/CSS3/JavaScript), desarrollo backend (Java, Spring Boot) y despliegue con contenedores (Docker).',
      tags: ['DAW', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'Web Standards']
    },
    {
      period: '2025 - Presente',
      title: 'Especialización Continua en Python, FastAPI & Cloud Data',
      institution: 'Consultoría Tecnológica & Entorno Profesional',
      description:
        'Desarrollo práctico de microservicios con FastAPI, consultas analíticas optimizadas y pipelines de datos empresariales en Databricks y SQL Azure.',
      tags: ['FastAPI', 'Python', 'Databricks', 'SQL Azure', 'GitLab CI/CD', 'PrimeNG']
    },
    {
      period: 'Trayectoria previa',
      title: 'Gestión Operativa, Liderazgo de Equipos & Administración',
      institution: 'Experiencia Profesional Ejecutiva',
      description:
        'Sólida base en resolución de conflictos, gestión de personas, control de SLAs y orientación a cliente.'
    }
  ],

  contactLinks: [
    {
      label: 'Email Profesional',
      value: 'martapradi@gmail.com',
      href: 'mailto:martapradi@gmail.com',
      icon: 'mail',
      action: 'copy'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/marta-pradillo',
      href: 'https://www.linkedin.com/in/marta-pradillo',
      icon: 'linkedin',
      action: 'link'
    },
    {
      label: 'GitHub',
      value: 'github.com/martaprad',
      href: 'https://github.com/martaprad',
      icon: 'github',
      action: 'link'
    }
  ]
};
