# HTML_semantico_y_CCS
Ejercicio de diseño interfaces 
<img width="612" height="672" alt="Ejercicio1" src="https://github.com/user-attachments/assets/9ccb5251-869a-46f3-857a-a5bd1d6a7324" />

Este ejercicio es una maqueta web desarrollada en **HTML semántico y CSS**, cuyo objetivo es simular la gestión de direcciones MAC en un centro de estudios.
La web permite **visualizar, añadir y gestionar** las direcciones MAC de los equipos de las aulas, basándose en el sistema proporcionado por el profesor:
- Existe **un archivo de texto por cada clase** ('1DAW.txt', '2DAW.txt', etc.) que contiene las MACs de ese aula.
- Existe **un archivo único de profesores** ('profes.txt') que recoge sus dispositivos.
- Los profesores **sólo se añaden a las clases donde imparten docencia**.
- Una persona puede registrar **varios dipositivos** siempre que cada uno tenga un **comentario diferente**.

## Estructura del ejercicio
  
HTML_semantico/
|---- index.html # Página principal
|---- estilos.css # Estilos externos
|---- Practica1.excalidraw # Esbozo del diseño de la interfaz
|---- LICENSE # licencia gratuita
|----.gitignore
|---- Readme.md # Este archivo

## Tecnologías utilizadas
- **HTML5 semántico** -> uso de etiquetas
- **CSS3** -> se aplican estilos de 3 formas:
  1. **Externo** -> archivo 'estilos.css'.
  2. **Interno** -> bloque <style> dentro de 'index.html'.
  3. **En linea** -> 'style"..."' en algunos botones.
 
## Ejemplo de uso
1. El usuario abre la web.
2. Selecciona una **clase** en el desplegable y pulsa 'Cargar'.
3. La web muestra las **MACs registradas** en una tabla.
4. El usuario puede:
   - **Eliminar / Editar** registros existentes.
   - **Añadir una nueva MAC** indicando dirección y comentario.
- NOTA: En este prototipo HTML/CSS no hay lógica de backend implementada.

## Suposiciones importantes
- Será necesario poder **eliminar registros** (no indicado en el enunciado, pero se da por hecho).
- Los **profesores** se gestionan en un archivo aparte y se asocian sólo a las clases que imparten.
- El sistema debe permitir **múltiples dispositivos por persona** con comentarios diferentes.
- La autenticación de usuarios **no se ha implementado**, pero sería imprescindible para manipular los datos.

Autor: *Ana Jaime*
Año: 2025
