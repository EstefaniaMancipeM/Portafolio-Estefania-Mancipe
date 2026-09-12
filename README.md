# Estefania Mancipe Montañez · Portafolio

Mi portafolio reúne tres formas de trabajar: el catálogo de VidaFit, la gestión de tareas con JavaScript y el modelado de una clínica veterinaria con Java. Presento mi aporte, las tecnologías y el alcance de cada proyecto.

## Ver el portafolio

[Enlace de GitHub Pages del repositorio](https://estefaniamancipem.github.io/Portafolio-Estefania-Mancipe/)

El sitio público usa los archivos HTML, CSS y JavaScript de este repositorio.

## Estructura

Organicé la landing como el proyecto de Generation: HTML en la raíz, recursos en Assets y backend Java separado.

```text
index.html
Assets/
  Css/styles.css
  Js/main.js
  img/
backend/
  pom.xml
  src/main/
    java/com/generation/portafolio/PortafolioApplication.java
    resources/application.properties
README.md
```

## Abrir la landing

Abre `index.html` en el navegador o usa Live Server desde Visual Studio Code. No necesita Node.js ni instalar paquetes. El contenido está en HTML; los estilos, en CSS; JavaScript actualiza el año del pie de página.

## Ejecutar con Java

Requisitos: JDK 17 o superior y Maven. Desde la carpeta backend:

```sh
mvn spring-boot:run
```

Abre http://localhost:8080. Spring Boot sirve la misma landing. Para generar el ejecutable:

```sh
mvn clean package
java -jar target/portafolio-1.0.0.jar
```

El backend usa la estructura y versión de Spring Boot del proyecto VidaFit de Generation. Solo sirve el sitio: no tiene base de datos, autenticación ni formulario que guarde mensajes. El contacto abre el correo.

## Deploy en GitHub Pages

1. Edita `index.html`, `Assets/Css/styles.css` o `Assets/Js/main.js` y revisa el resultado con Live Server.
2. Sube los cambios a `main`.
3. En GitHub, abre Settings → Pages y selecciona Deploy from a branch, rama `main`, carpeta `/ (root)`.
4. Cuando finalice el despliegue, abre el enlace del portafolio y comprueba navegación, imágenes y contacto.

GitHub Pages publica HTML, CSS y JavaScript; no ejecuta Java. La landing funciona completa sin el servidor. Para alojar la variante Java se necesita un servicio con JDK 17 y ejecución del JAR.

## Contenido y alcance

- VidaFit: proyecto colaborativo. Mi aporte verificable está en la [PR #9](https://github.com/FrancoSG2003/GenerartionsCo13_VidaFit/pull/9). La demo enlaza al frontend; no se afirma que la integración completa esté terminada.
- Mis pendientes: aplicación con TaskManager y localStorage. Falta corregir el guardado del estado completado y publicar la versión actual. No se usa una demo de otra versión.
- Clínica veterinaria: programa de consola con abstracción, herencia e interfaces; no se presenta como sistema clínico en producción.
- Idiomas: inglés C1 y portugués A2, según los niveles que indiqué.

El diseño conserva mi fotografía y los recursos del portafolio anterior. Usa verde, amarillo, lila y naranja, títulos grandes y tarjetas de proyectos. No requiere fuentes externas. Las imágenes de lógica son diagramas, no capturas de aplicaciones.

## Verificación de esta entrega

Landing revisada a 390 y 1366 píxeles, sin desbordamiento horizontal, imágenes faltantes ni errores de consola. Navegación interna y recursos comprobados. GitHub y la demo VidaFit respondieron HTTP 200; LinkedIn bloqueó la comprobación automática (999), por lo que se conserva el enlace facilitado. El contacto utiliza mailto; no se envió ningún mensaje.

Backend compilado con Maven y JDK 17; inicio de Spring Boot y respuestas HTTP 200 para la página, CSS y fotografía verificados en localhost. No hay pruebas unitarias porque el servidor solo entrega archivos estáticos. La ejecución local se limita a 127.0.0.1; el alojamiento Java debe configurar la dirección de escucha y el puerto según su proveedor.

## Trabajo con las guías de Generation

Sigo la organización del proyecto VidaFit: HTML en la raíz, `Assets/Css`, `Assets/Js`, `Assets/img` y `backend` separado. Abro la carpeta completa en Visual Studio Code para trabajar la landing. Para Java, abro `backend/pom.xml` como proyecto Maven en IntelliJ y ejecuto `PortafolioApplication`.

Las [guías de Ana Alvarado](https://guiasvisuales.netlify.app/index.html), en las sesiones de fundamentos de JavaScript y fundamentos de Spring Boot, sirven de referencia para separar archivos, usar paquetes Java, configurar Maven y arrancar Spring Boot. Las sesiones de API presentan capas para gestionar datos; esta landing solo presenta contenido y no necesita un CRUD.

Conservo Java 17 y Spring Boot 3.5.16, las versiones del proyecto VidaFit local. El portal actualmente muestra Java 25 y Spring Boot 4.1.1; la estructura Maven y la clase de arranque se mantienen, sin exigir cambiar la instalación usada en VidaFit. JavaScript se usa en el navegador; Java ejecuta el servidor local opcional. Son lenguajes distintos.

No se requiere React, Next.js, TypeScript, Vite ni Node.js. No se incluyen copias del material de la profesora.
