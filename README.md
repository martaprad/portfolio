# Portfolio Profesional | Marta Pradillo Rodríguez

Portfolio personal interactivo y de alto rendimiento construido con **Angular 21** y **TypeScript**. Diseñado con arquitectura moderna basada en **Signals**, separación estricta entre datos y componentes, traducción en tiempo real y un posicionamiento estratégico como **Full Stack Developer** (Frontend reactivo con Angular, Backend con FastAPI/Spring Boot, Persistencia en SQL Azure/Databricks/MySQL y experiencia en liderazgo de equipos).

## Enlaces & Contacto
- 🌐 **Live Demo (GitHub Pages)**: https://martaprad.github.io/portfolio/
- 👩‍💼 **LinkedIn**: https://linkedin.com/in/marta-pradillo
- 💻 **GitHub**: https://github.com/martaprad
- 📬 **Email**: martapradi@gmail.com

---

## Características Principales

1. **Posicionamiento Full Stack de Alto Impacto**:
   - Propuesta de valor integral combinando Frontend (Angular, PrimeNG, Tailwind, Bootstrap), Backend (Python/FastAPI, Java/Spring Boot), Persistencia/Cloud (SQL Azure, Databricks, MySQL) y Habilidades de Gestión (coordinación de 15 personas).
   - Titulación oficial acreditada: **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)**.

2. **Proyectos 100% Reales y Estructurados**:
   - **Proyectos Técnicos & Full Stack**:
     - **Hotel MDV** (Proyecto Final DAW): Arquitectura cliente-servidor desacoplada (JS ES6, Bootstrap 5, Fetch API + Java 17 Spring Boot 3, Spring Security, JWT, MySQL y Docker Compose).
     - **Portfolio Web**: Single Page Application con Angular 21, Signals, SCSS modular y testing con Vitest.
   - **Laboratorio & Ocio (Proyectos Personales & Creativos)**:
     - **Cumple Lore**: Web interactiva con pruebas lógicas y juegos en JavaScript.
     - **Skyroads Remake**: Adaptación en Java del clásico juego espacial de MS-DOS.
     - **Rock, Paper, Scissors (RPS)**: Scripting y control de flujo en Python.
     - **TeachersPet**: Práctica de maquetación avanzada con CSS3.

3. **Traducción en Tiempo Real (Inglés / Español)**:
   - Pestaña de cambio de idioma accesible en todo momento en la barra superior con banderas en alta definición (Reino Unido 🇬🇧 / España 🇪🇸).
   - Traducción instantánea in-situ mediante Google Website Translator sin necesidad de recargar la página ni duplicar proyectos.
   - Persistencia de idioma mediante cookies y estilos limpios (sin barras ni banners invasivos).

4. **Arquitectura y Rendimiento**:
   - **Angular Signals**: Manejo reactivo de estados (`signal()`, `computed()`) para filtrado de proyectos, categorías y modales.
   - **Centralización de Datos**: Información estructurada en [`src/app/data/portfolio-data.ts`](file:///c:/Users/Marta/Proyectos/portfolio/src/app/data/portfolio-data.ts) para facilitar su edición sin tocar la vista ni los componentes.
   - **Scroll Natural**: Sustitución de bloqueos de scroll (*scroll-jacking*) por animaciones ligeras con `IntersectionObserver` y transiciones CSS nativas.
   - **Optimización del Bundle**: Reducción de ~38% en el peso del archivo JavaScript principal (~172 kB en bruto, ~47 kB transferidos).

5. **Sincronización con GitHub API**:
   - Consulta asíncrona de repositorios públicos en tiempo real mediante la API oficial de GitHub (@martaprad).

---

## Tech Stack

- **Framework**: Angular 21 (Standalone Components, Signals, Control Flow `@if`, `@for`, `@empty`)
- **Lenguajes**: TypeScript 5.9, JavaScript (ES6+), HTML5, SCSS / CSS3
- **Testing**: Vitest + Angular TestBed
- **CI/CD & Hosting**: GitHub Actions + GitHub Pages

---

## Ejecución en Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

Abre [http://localhost:4200/](http://localhost:4200/) en tu navegador.

---

## Testing & Build

```bash
# Ejecutar suite de tests unitarios
npm test -- --run

# Generar build optimizado para producción
npm run build
```

---

## Despliegue en GitHub Pages

El repositorio cuenta con un flujo automatizado de CI/CD en `.github/workflows/deploy.yml`. Cada *push* a la rama `production` compila el proyecto con el `--base-href=/portfolio/` y lo publica automáticamente en GitHub Pages.

---

## Licencia
El código se distribuye bajo licencia MIT. Los contenidos personales pertenecen a Marta Pradillo Rodríguez.
