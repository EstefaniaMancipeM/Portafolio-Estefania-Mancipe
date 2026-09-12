# Selección y revisión de proyectos

Revisión: 11 de septiembre de 2026. Objetivo: Full Stack Junior.

## Selección y orden

| Orden | Proyecto | Evidencia y motivo | Mejora de mayor impacto |
|---|---|---|---|
| 1 | VidaFit | Aplicación colaborativa más amplia, catálogo, filtros y carrito. La PR #9 de Estefania está integrada y modifica catálogo, imágenes y estilos de contacto. | Documentar alcance por integrante, conectar backend y base de datos, revisar enlaces del README. |
| 2 | Mis pendientes (`planificador-tareas`) | TaskManager, validación, gestión de estados, delegación de eventos y localStorage. El historial muestra evolución funcional. | Guardar después de marcar DONE y publicar la versión correcta. |
| 3 | Sistema de Clínica Veterinaria | Clase abstracta Animal, herencia, interfaces y llamadas polimórficas. Aporta evidencia Java que complementa los proyectos de interfaz. | Añadir README con ejecución, ejemplos y pruebas de costos/vacunación. |

## Qué se revisó

Se consultó el listado de 18 repositorios públicos. Se compararon estructuras de `planificador-tareas`, `Proyecto-Final-Estefania`, `Sistema-de-Clinica-Veterinaria`, `SsistemaBancario`, `Taller-Tablero-Turnos` y el repositorio colaborativo VidaFit. Se leyeron archivos principales, README disponibles e historial de los elegidos. No se afirma una auditoría completa de los 18 repositorios.

`Proyecto-Final-Estefania` es una versión estática de la agenda: su descripción dice FullStack, pero los archivos revisados son HTML y CSS. No conviene presentarlo junto al planificador como si fueran dos capacidades diferentes.

`Taller-Tablero-Turnos` demuestra DOM, búsqueda y cola de turnos, pero solapa el aprendizaje JavaScript del planificador. `SsistemaBancario` también demuestra POO; Clínica Veterinaria ofrece mayor variedad de interfaces y modelos. Los talleres iniciales sirven como registro de progreso, no como las tres piezas principales.

## Hallazgos concretos

### VidaFit

- PR #9 `Feature/tefa catalogo contacto`: autor `EstefaniaMancipeM`, integrada. Archivos: `catalogo.html`, imágenes del catálogo y `Assets/Css/stylesContacto.css`.
- El filtrado combina precio, categoría, marca y disponibilidad, y actualiza el contador. El ordenamiento se calcula por separado.
- No se atribuye a Estefania la autoría de `filtros-catalogo.js`: no está entre los archivos de esa PR.
- El esquema `bases_de_datos/SQL.txt` por sí solo no equivale a un backend conectado.
- La demo abrió y mostró el catálogo de productos destacados. No se verificaron todas sus funciones ni se enviaron formularios.

### Mis pendientes

- La clase TaskManager separa la colección y sus métodos de los eventos de `index.js`.
- Crear/guardar/cargar y eliminar/guardar/cargar funcionaron en la prueba aislada.
- Al completar una tarea, el manejador modifica `task.status` y llama a `render()`, sin `save()`: al recargar, el cambio se pierde. Pendiente prioritario.
- Los valores escritos por una persona se interpolan en HTML en `createTaskHtml`. Conviene usar `textContent` o escapar datos antes de incorporarlos al DOM.
- `load()` no gestiona JSON local dañado. Añadir recuperación evita que una entrada corrupta impida iniciar la aplicación.
- El README enlaza la demo de `Proyecto-Final-Estefania`, cuya fuente revisada es una interfaz estática. No se presenta como demo de la versión actual.

### Clínica veterinaria

- Animal es abstracta; las especies definen costos de consulta. Vacunable y Asegurable expresan comportamientos separados.
- Main recorre colecciones Animal y Asegurable; también amplía el modelo con Conejo.
- Fuente Java leída, no ejecutada: no se encontró `javac` en el entorno consultado.
- Añadir README, requisitos, comandos de compilación y salida esperada; probar validaciones y evitar describirlo como sistema clínico de producción.

## Fuentes

- Perfil: https://github.com/EstefaniaMancipeM
- VidaFit: https://github.com/FrancoSG2003/GenerartionsCo13_VidaFit
- Aporte: https://github.com/FrancoSG2003/GenerartionsCo13_VidaFit/pull/9
- Demo VidaFit: https://francosg2003.github.io/GenerartionsCo13_VidaFit/
- Planificador: https://github.com/EstefaniaMancipeM/planificador-tareas
- Clínica: https://github.com/EstefaniaMancipeM/Sistema-de-Clinica-Veterinaria
- Figma facilitado: https://www.figma.com/design/xmvsIKl0WgVHIFQlZhcvd1/VidaFit?node-id=85-5
- Guía proporcionada: `Guia - Portafolio (1).pdf`, Natalia Díaz, Generation Colombia, 2026.

Las mejoras se documentaron sin modificar los repositorios originales. La personalidad y disposición a aprender proceden de la solicitud; no se inventaron experiencias, dificultades personales superadas ni métricas.
