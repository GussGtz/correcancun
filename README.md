# Corre Cancún

Sitio de un **club formativo de fútbol base** (proyecto de demostración, sin
afiliación oficial). El diseño y la arquitectura de navegación toman como
referencia **fcbarcelona.es**, pero con marca propia (escudo "Corre Cancún"),
paleta **naranja + carbón** y contenido reescrito para un club de cantera: no
se venden entradas, se gestionan inscripciones, cuotas y becas; "Corre TV" en
lugar de plataforma de pago; socios colaboradores en lugar de abonados;
categorías de la escuela (4 años) al juvenil, más femenino y sénior amateur.

No se incluye ningún activo, texto, fotografía, vídeo ni marca del FC Barcelona.

## Cómo verlo

Sitio estático, sin build:

```bash
cd "Corre Cancún"
python3 -m http.server 4599
# abrir http://localhost:4599
```

## Estructura

```
Corre Cancún/
├── index.html            portada
├── club.html             quiénes somos, historia, valores, staff, instalaciones
├── categorias.html       las 8 categorías (edad, horario, forma de acceso)
├── metodologia.html      modelo de juego, valores, plan por edades, programas
├── inscripciones.html    cómo inscribirse, cuotas, becas, FAQ + FORMULARIO
├── calendario.html       partidos y resultados con filtro por categoría
├── actualidad.html       listado de noticias con filtro por categoría
├── noticia.html          ficha de noticia (lee ?id=…)
├── corre-tv.html         rejilla de vídeos con lightbox
├── tienda.html           equipación y material del club
├── contacto.html         datos + FORMULARIO de contacto
├── buscar.html           buscador del sitio (?q=…)
├── css/
│   ├── tokens.css        variables (color, tipografía, espaciado) — base 10px
│   ├── base.css          reset, botones, helpers, placeholders .ph
│   ├── header.css        ribbon, barra principal, mega-menú, buscador
│   ├── components.css    hero, calendario, carruseles, tienda, jugadores…
│   ├── footer.css        cifras del club, redes, columnas, legal
│   ├── pages.css         páginas internas: page-hero, artículo, formularios,
│   │                     tablas, cat-card, video-card, lightbox, toast, idioma
│   └── responsive.css    breakpoints + menú móvil
├── js/
│   ├── data.js           CONTENIDO del sitio (noticias, categorías, calendario,
│   │                     vídeos, tienda, cuotas, valores, staff) + buscador
│   ├── layout.js         inyecta cabecera + pie compartidos en cada página y
│   │                     activa: mega-menú, menú móvil, buscador, selector de
│   │                     idioma, cabecera compacta, cookies, lightbox, toast
│   └── main.js           comportamiento de página: cuenta atrás, carruseles,
│                         formularios (validación + localStorage), render de
│                         listados desde data.js, anclas con offset
└── assets/
    ├── img/
    │   ├── logo.png / mark.png / favicon.ico / icon-*.png
    │   └── scenes/*.svg   43 ilustraciones SVG originales (generadas), estética
    │                      "sports brand" en la paleta del club — se usan como
    │                      imágenes de referencia en tarjetas, hero y portadas
    └── vendor/remixicon/  Remix Icon 4.9 (webfont, MIT) — iconos ri-*
```

### Cabecera y pie compartidos

Todas las páginas incluyen `<div data-layout-header data-active="…">` y
`<div data-layout-footer>`. `layout.js` los sustituye por el mismo HTML y marca
como activa la sección indicada en `data-active`. Editar la navegación = editar
`NAV_LEFT` / `NAV_RIGHT` en `js/layout.js`, un único sitio.

### Contenido

Todo el texto de listados vive en `js/data.js`. Añadir una noticia = añadir un
objeto a `noticias[]`; aparece automáticamente en la portada, en `actualidad.html`,
en "más noticias" y en el buscador.

## Funcionalidad

- **Formularios reales** (inscripción y contacto): validación en cliente
  (obligatorios, email, teléfono, casillas), estado de error/éxito y guardado
  en `localStorage` (`correfc.form.*`). Sin servidor: es una demo.
- **Buscador** (`buscar.html`): índice local sobre páginas, noticias y
  categorías; el panel de la cabecera y la caja de la página comparten motor.
- **Selector de idioma**: menú funcional ES / CA / EN, recuerda la elección en
  `localStorage` (la traducción de contenido no está incluida en la demo).
- **Lightbox de vídeo**: los "play" de Corre TV y del vídeo de portada abren un
  reproductor de demostración.
- **Filtros por categoría** en calendario y actualidad, **cuenta atrás** al
  próximo partido, **carruseles** con scroll-snap, **carrito** simulado en la
  tienda (toast), **cookies** con persistencia, **volver arriba**.

## Iconos

[Remix Icon](https://remixicon.com) 4.9 (MIT), instalado por npm y copiado a
`assets/vendor/remixicon/` para funcionar sin conexión. Uso: `<i class="ri-…-line">`
o `-fill`. Regenerar: `npm install` + copiar `node_modules/remixicon/fonts/`.

## Paleta

| Rol | Valor |
|---|---|
| Naranja marca | `#e2641e` |
| Naranja claro / oscuro | `#f2762c` / `#9c3f0f` |
| Ámbar (acentos) | `#f5a623` |
| Carbón (superficies oscuras) | `#101013` / `#0b0b0d` |

Tipografía: **Barlow Condensed** (títulos) + **Inter** (texto), Google Fonts.

---

Proyecto de demostración con fines de estudio de front-end y UX.
