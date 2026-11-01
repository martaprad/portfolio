# Portfolio Profesional | Marta Pradillo Rodríguez

Portfolio personal interactivo y de alto rendimiento construido con **Angular 21** y **TypeScript**. Diseñado con una arquitectura moderna, reactividad basada en **Signals**, separación clara de datos y componentes, y un posicionamiento enfocado en **Full Stack Developer** (Frontend reactivo, Backend con FastAPI, datos en SQL Azure/Databricks y liderazgo de equipos).

## Enlaces & Contacto
- 🌐 **Live Demo (GitHub Pages)**: https://martaprad.github.io/portfolio/
- 👩‍💼 **LinkedIn**: https://linkedin.com/in/marta-pradillo
- 💻 **GitHub**: https://github.com/martaprad
- 📬 **Email**: martapradi@gmail.com

---

## Características Principales

1. **Posicionamiento Full Stack de Alto Impacto**:
   - Propuesta de valor clara combinando Frontend (Angular, PrimeNG, Tailwind), Backend (Python, FastAPI, SQLAlchemy), Persistencia/Cloud (SQL Azure, Databricks) y Habilidades de Liderazgo (coordinación de 15 personas).
   - Proyectos destacados con desglose arquitectónico (Frontend vs. Backend & Datos).

2. **Arquitectura y Código Simplificado**:
   - **Angular Signals**: Gestión reactiva de estados (pestañas de habilidades, filtros de proyectos, feedback de copia).
   - **Centralización de Datos**: Toda la información y textos residen en [`src/app/data/portfolio-data.ts`](file:///c:/Users/Marta/Proyectos/portfolio/src/app/data/portfolio-data.ts), facilitando su mantenimiento y actualización sin tocar lógica de componentes.
   - **Scroll Natural & Accesible**: Eliminación de bloqueos de scroll artificiales (scroll-jacking) en favor de un scroll nativo fluido y animaciones de aparición ligeras con `IntersectionObserver`.
   - **Reducción del Bundle**: Reducción de ~40% en el tamaño del bundle JavaScript inicial (de ~264 kB a ~165 kB).

3. **Integración con GitHub API**:
   - Carga dinámica y asíncrona de los repositorios públicos de GitHub con filtrado para descartar configuraciones internas y mostrar etiquetas por lenguaje.

---

## Tech Stack

- **Framework**: Angular 21 (Standalone Components, Signals, New Control Flow `@if` / `@for`)
- **Lenguaje**: TypeScript 5.9
- **Estilos**: SCSS modular con variables CSS, soporte para tema oscuro refinado y diseño 100% responsive
- **Testing**: Vitest + Angular TestBed

---

## Ejecución en Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

Navega a `http://localhost:4200/`

---

## Testing & Build

```bash
# Ejecutar tests unitarios
npm test -- --run

# Generar build de producción
npm run build
```

---

## Licencia
El código se distribuye bajo licencia MIT. Los textos e imágenes personales pertenecen a Marta Pradillo Rodríguez.
