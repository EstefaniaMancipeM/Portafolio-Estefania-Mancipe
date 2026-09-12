# Estefania Mancipe Montañez · Portafolio

[Ver portafolio](https://estefaniamancipem.github.io/Portafolio-Estefania-Mancipe/)

Mi portafolio reúne VidaFit, Mis pendientes y Clínica veterinaria. Presento mi aporte, las tecnologías y el alcance de cada proyecto.

## Tecnologías

HTML, CSS y JavaScript para la landing. Java 17, Spring Boot 3.5.16 y Maven para ejecutar el servidor local, con la configuración utilizada en VidaFit.

## Estructura principal

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

## Abrir en Visual Studio Code

Abre la carpeta del proyecto y ejecuta index.html con Live Server. También puedes abrir ese archivo directamente en el navegador. La landing no necesita instalar dependencias.

## Ejecutar con Java

Abre backend/pom.xml como proyecto Maven en IntelliJ y ejecuta PortafolioApplication. También puedes abrir una terminal en backend y ejecutar:

```sh
mvn spring-boot:run
```

Visita http://localhost:8080. El servidor entrega la misma landing; no necesita base de datos. El contacto abre el correo.

## Publicación

GitHub Pages publica desde la rama main y la carpeta raíz. Para actualizar el sitio, modifica los archivos de la landing, revisa el resultado y guarda los cambios en main. El backend Java se ejecuta localmente; GitHub Pages sirve HTML, CSS y JavaScript.

## Proyectos

- VidaFit: proyecto colaborativo. Mi contribución al catálogo, imágenes y estilos de contacto está en la [PR #9](https://github.com/FrancoSG2003/GenerartionsCo13_VidaFit/pull/9).
- Mis pendientes: gestión de tareas con JavaScript y almacenamiento local. La demo de esta versión está pendiente.
- Clínica veterinaria: aplicación de consola con Java, herencia e interfaces.

## Contacto

- [GitHub](https://github.com/EstefaniaMancipeM)
- [LinkedIn](https://www.linkedin.com/in/estefania-mancipe-76613648/)
- Correo: estefaniamancipe@gmail.com
