# Portfolio | Marta Pradillo Rodríguez

Portfolio personal interactivo construido con **Angular** en formato “scroll story”: la pantalla se organiza por secciones (hero, sobre mí, skills, proyectos, experiencia y contacto) y el usuario navega haciendo scroll mientras los elementos van apareciendo en escena.

## Demo
- 🌐 Live (GitHub Pages): https://martaprad.github.io/portfolio/  <!-- ajusta si tu URL final cambia -->
- 👩‍💼 LinkedIn: https://linkedin.com/in/marta-pradillo
- 📬 Email: martapradi@gmail.com

## Qué incluye
- Layout por secciones con navegación por anclas (hero → projects → contact).  
- Fondo tipo **parallax** con varias capas para dar profundidad.  
- Botón “**Volver arriba**” siempre disponible.  
- Sección **Proyectos** que carga repos públicos de GitHub y los muestra:
  - en lista (con título, descripción y tags)
  - y en un carrusel/“órbita” con flechas izquierda/derecha para rotar entre proyectos.

## Secciones
- Hero (presentación + CTAs)
- Sobre mí
- Skills (chips)
- Proyectos (lista + órbita)
- Experiencia (timeline)
- Contacto

## Tech Stack
- Angular + TypeScript
- SCSS
- (Pendiente / opcional) Animaciones scroll-driven con GSAP/ScrollTrigger

## Licencia y contenido
El codigo del repositorio se publica bajo licencia MIT. El contenido (textos, diseno e imagenes) pertenece a Marta Pradillo Rodriguez y no debe reutilizarse sin permiso.

## Ejecutar en local
```bash
npm install
npm start
```

Abre http://localhost:4200/

## Build
```bash
npm run build
```

## Deploy a GitHub Pages (notas importantes)
Este proyecto se publica en GitHub Pages, por lo que el base href debe apuntar al nombre del repositorio.
