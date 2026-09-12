# Estefania Mancipe Montañez · Full Stack Junior

[Ver portafolio publicado](https://estefaniamancipem.github.io/Portafolio-Estefania-Mancipe/)

Mi primer portafolio reúne tres proyectos de aprendizaje: VidaFit, un planificador de tareas y un sistema de clínica veterinaria. Explico mi aporte y el alcance real de cada uno.

## Abrir en Visual Studio Code

Abre esta carpeta completa. Requiere Node.js 22.13 o superior.

```sh
npm ci
npm run dev
```

La terminal indica la dirección de la vista previa. Las dependencias están instaladas en la copia local; en GitHub se conserva package-lock.json para reinstalarlas.

## Archivos del proyecto

- app/page.tsx: contenido y estructura del portafolio.
- app/globals.css: estilos y adaptación a móvil.
- app/layout.tsx: documento y metadatos.
- public/: fotografías, logotipo e ilustraciones.
- components/ui/, hooks/ y lib/: componentes y utilidades del proyecto base.
- scripts/export-static.cjs: genera la versión estática para GitHub Pages.
- index.html, styles.css e imágenes en la raíz: versión publicada.
- REVISION-PROYECTOS.md: revisión y límites de los proyectos mostrados.

## Actualizar la publicación

Edita el código y ejecuta `npm run build`. El proceso actualiza los archivos estáticos de la raíz. Guarda en GitHub el código y estos archivos; Pages publica desde la rama main, carpeta raíz. El exportador sirve para esta página de presentación sin estado interactivo.

Puedes abrir index.html directamente en un navegador para ver la versión estática sin instalar herramientas.

## Alcance

El portafolio es una página de presentación: no tiene servidor de datos, inicio de sesión ni formulario que almacene información. El enlace de contacto abre el correo. VidaFit es colaborativo; mi aporte presentado es el catálogo y las ideas para el desarrollo.
