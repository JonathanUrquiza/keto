# Lista de compras keto

Guia web estatica con menu semanal, recetas y lista de compras para una dieta
ketogenica combinada con ayuno intermitente. Todo corre en el navegador y
guarda el progreso en `localStorage`.

## Funcionalidades

- Navegacion por secciones (introduccion, menu, alimentos, ayuno, compras, tips).
- Menu semanal con recetas; modal con ingredientes y pasos.
- Seguimiento de comidas realizadas con barra de progreso.
- Lista de compras por categorias con busqueda y filtros.
- Progreso de compras, reinicio de lista y notificaciones.
- Persistencia local en el navegador.

## Como usar

1. Abre `index.html` en tu navegador.
2. Navega por las secciones y marca comidas o productos completados.
3. El progreso se guarda automaticamente en el navegador.

## GitHub Pages

Configura GitHub Pages para publicar desde `main` / `(root)`. El sitio
se sirve desde `index.html` en la raiz del repositorio.

## Estructura del proyecto

- `index.html`: estructura y contenido principal.
- `styles.css`: estilos de la interfaz.
- `app.js`: datos (recetas, menu, lista) y logica de la app.

## Personalizacion rapida

- Edita textos y secciones en `index.html`.
- Modifica colores y estilos en `styles.css`.
- Ajusta recetas, menu semanal y lista de compras en `app.js`.

## Notas

- No requiere instalacion ni dependencias.
- `localStorage` se limpia si borras los datos del sitio en el navegador.
