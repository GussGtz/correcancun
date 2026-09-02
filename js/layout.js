/* ==========================================================================
   Corre Cancún — Layout compartido (cabecera + pie + chrome global)
   Inyecta el mismo header/footer en todas las páginas y activa su lógica:
   mega-menú, menú móvil, buscador, selector de idioma, cabecera compacta,
   modal de cookies, botón "volver arriba" y lightbox de vídeo.
   Uso:  <div data-layout-header data-active="club"></div> ... <div data-layout-footer></div>
   ========================================================================== */
(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ------------------------------------------------------------ Configuración */
  const NAV_LEFT = [
    { key: "club", label: "El Club", href: "club.html", mega: [
      { h: "Quiénes somos", links: [
        ["Historia y orígenes", "club.html#historia"],
        ["Escudo y valores", "club.html#valores"],
        ["Junta directiva", "club.html#junta"],
        ["Cuerpo técnico", "club.html#staff"] ] },
      { h: "Instalaciones", links: [
        ["Campo municipal", "club.html#instalaciones"],
        ["Ciudad deportiva", "club.html#instalaciones"],
        ["Cómo llegar", "contacto.html#mapa"] ] },
      { h: "Compromiso", links: [
        ["Protección del menor", "club.html#compromiso"],
        ["Igualdad y deporte", "club.html#compromiso"],
        ["Únete al staff", "contacto.html"] ] },
      { feature: { cls: "ph--grana", tag: "El club", tagCls: "tag--gold", h: "18 años de cantera",
        p: "Desde 2007 formando a niños y niñas dentro y fuera del campo.", href: "club.html#historia" } }
    ] },
    { key: "categorias", label: "Categorías", href: "categorias.html" },
    { key: "escuela", label: "Escuela", href: "inscripciones.html#escuela" },
    { key: "tv", label: "Corre TV", href: "corre-tv.html" }
  ];

  const NAV_RIGHT = [
    { key: "actualidad", label: "Actualidad", href: "actualidad.html", mega: [
      { h: "El club día a día", links: [
        ["Noticias", "actualidad.html"],
        ["Calendario", "calendario.html"],
        ["Resultados", "calendario.html#resultados"],
        ["Crónicas de partido", "actualidad.html"] ] },
      { h: "Equipos", links: [
        ["Todas las categorías", "categorias.html"],
        ["Jugadores de la cantera", "jugadores.html"],
        ["Fotos y vídeos", "corre-tv.html"] ] },
      { h: "Agenda", links: [
        ["Puertas abiertas", "actualidad.html"],
        ["Torneos y campus", "corre-tv.html"],
        ["Charlas para familias", "actualidad.html"] ] },
      { feature: { cls: "ph--blue", tag: "Agenda", h: "Puertas abiertas",
        p: "Ven a probar un entrenamiento gratis, sin compromiso.", href: "actualidad.html" } }
    ] },
    { key: "metodologia", label: "Metodología", href: "metodologia.html", mega: [
      { h: "Nuestro modelo", links: [
        ["Modelo de juego", "metodologia.html#modelo"],
        ["Valores del club", "metodologia.html#valores"],
        ["Plan formativo por edades", "metodologia.html#plan"] ] },
      { h: "Programas", links: [
        ["Tecnificación", "metodologia.html#programas"],
        ["Escuela de porteros", "metodologia.html#programas"],
        ["Campus de vacaciones", "metodologia.html#programas"] ] },
      { h: "Familias", links: [
        ["El papel de la familia", "metodologia.html#familias"],
        ["Alimentación y descanso", "actualidad.html"],
        ["Comunicación con el club", "contacto.html"] ] },
      { feature: { cls: "ph--navy", tag: "Formación", tagCls: "tag--blue", h: "Primero la persona",
        p: "Resultados sí, pero después de los valores y el disfrute.", href: "metodologia.html" } }
    ] },
    { key: "instalaciones", label: "Instalaciones", href: "club.html#instalaciones" },
    { key: "inscripciones", label: "Inscripciones", href: "inscripciones.html", mega: [
      { h: "Nueva temporada", links: [
        ["Cómo inscribirse", "inscripciones.html#como"],
        ["Pruebas de acceso", "inscripciones.html#pruebas"],
        ["Calendario de altas", "inscripciones.html#como"] ] },
      { h: "Cuotas", links: [
        ["Cuotas por categoría", "inscripciones.html#cuotas"],
        ["Becas y ayudas", "inscripciones.html#becas"],
        ["Hermanos y familias", "inscripciones.html#cuotas"] ] },
      { h: "Área de familias", links: [
        ["Acceso familias", "inscripciones.html#familias"],
        ["Documentación", "inscripciones.html#como"],
        ["Preguntas frecuentes", "inscripciones.html#faq"] ] },
      { feature: { cls: "ph--gold", style: "color:#121212", tag: "25/26", tagCls: "tag--blue", h: "Plazas abiertas",
        p: "Desde la escuela (4 años) hasta juvenil. Reserva la de tu hijo o hija.", href: "inscripciones.html" } }
    ] },
    { key: "femenino", label: "Femenino y Sénior", href: "categorias.html#femenino" }
  ];

  const IDIOMAS = [["es", "Castellano"], ["ca", "Català"], ["en", "English"]];

  /* --------------------------------------------------------------- Plantillas */
  const caret = '<svg class="caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 3.5 6 8l5-4.5"/></svg>';

  function megaHTML(item) {
    const cols = item.mega.map((col) => {
      if (col.feature) {
        const f = col.feature;
        return `<a class="mega__feature ph ${f.cls}" href="${f.href}" ${f.style ? `style="${f.style}"` : ""}>
          <span class="tag ${f.tagCls || ""}">${f.tag}</span>
          <h4>${f.h}</h4><p>${f.p}</p></a>`;
      }
      return `<div class="mega__col"><h3>${col.h}</h3>${
        col.links.map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</div>`;
    }).join("");
    return `<div class="mega"><div class="wrapper wrapper--wide mega__inner">${cols}</div></div>`;
  }

  function navItemHTML(item, active) {
    const cls = "mainnav__item" + (item.mega ? " mainnav__item--has-mega" : "") +
      (item.key === active ? " is-current" : "");
    const link = `<a class="mainnav__link" href="${item.href}"${
      item.mega ? ' aria-haspopup="true" aria-expanded="false"' : ""}>${item.label}${item.mega ? caret : ""}</a>`;
    return `<li class="${cls}">${link}${item.mega ? megaHTML(item) : ""}</li>`;
  }

  function headerHTML(active) {
    return `
<header class="site-header">
  <div class="ribbon">
    <div class="wrapper wrapper--wide ribbon__inner">
      <a class="ribbon__slogan" href="index.html">
        <i class="ri-football-fill ribbon__slogan-icon" aria-hidden="true"></i>
        <span class="ribbon__slogan-text"><b>#corre</b> por tus sueños</span>
      </a>
      <div class="lang" data-lang>
        <button class="ribbon__lang" type="button" aria-label="Seleccionar idioma" aria-haspopup="listbox" aria-expanded="false">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.5a15.6 15.6 0 0 0-1.3-3.6A8 8 0 0 1 18.9 8ZM12 4c.8 1.1 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.9 1.9-4ZM4.3 14a7.9 7.9 0 0 1 0-4h2.9a17 17 0 0 0 0 4H4.3Zm.8 2h2.5c.3 1.3.8 2.5 1.3 3.6A8 8 0 0 1 5.1 16ZM7.6 8H5.1a8 8 0 0 1 3.8-3.6C8.4 5.5 7.9 6.7 7.6 8ZM12 20c-.8-1.1-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.9-1.9 4Zm2.3-6H9.7a15 15 0 0 1 0-4h4.6a15 15 0 0 1 0 4Zm.6 5.6c.5-1.1 1-2.3 1.3-3.6h2.5a8 8 0 0 1-3.8 3.6Zm2-5.6a17 17 0 0 0 0-4h2.9a7.9 7.9 0 0 1 0 4h-2.9Z"/></svg>
          <span data-lang-current>ES</span>
          <svg class="ribbon__lang-caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 3.5 6 8l5-4.5"/></svg>
        </button>
        <ul class="lang__menu" role="listbox" hidden>
          ${IDIOMAS.map(([c, n]) => `<li role="option" data-lang-opt="${c}" data-name="${n}">${n}<span>${c.toUpperCase()}</span></li>`).join("")}
        </ul>
      </div>
    </div>
  </div>

  <div class="navbar">
    <div class="wrapper wrapper--wide navbar__inner">
      <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-controls="mobileNav" aria-expanded="false">
        <svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
      </button>
      <a href="index.html" class="brand" aria-label="Corre Cancún — inicio">
        <img src="assets/img/mark.png" alt="" width="46" height="46">
        <span class="brand__word"><b>Corre</b><i>Cancún</i></span>
      </a>
      <nav class="mainnav" aria-label="Navegación principal">
        <ul class="mainnav__list">${NAV_LEFT.map((i) => navItemHTML(i, active)).join("")}</ul>
        <ul class="mainnav__list mainnav__list--right">${NAV_RIGHT.map((i) => navItemHTML(i, active)).join("")}</ul>
      </nav>
      <div class="header-utils">
        <a href="inscripciones.html#familias" class="header-login"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.7-9 6v2h18v-2c0-3.3-4-6-9-6Z"/></svg><span>Familias</span></a>
        <a href="inscripciones.html" class="header-plans">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z"/></svg>
          <span>Inscríbete</span>
        </a>
        <button class="search-toggle" type="button" aria-label="Buscar" aria-expanded="false" aria-controls="searchPanel">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 2a8 8 0 1 0 4.9 14.3l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"/></svg>
        </button>
      </div>
    </div>
    <div class="navbar__underline" aria-hidden="true"></div>

    <div class="search-panel" id="searchPanel">
      <div class="wrapper wrapper--wide">
        <form role="search" action="buscar.html" method="get">
          <input type="search" name="q" placeholder="Buscar en Corre Cancún" aria-label="Buscar en Corre Cancún" autocomplete="off">
          <button type="submit" aria-label="Buscar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 2a8 8 0 1 0 4.9 14.3l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"/></svg>
          </button>
        </form>
        <div class="search-suggests">
          <a href="inscripciones.html">Inscripciones</a>
          <a href="categorias.html">Categorías</a>
          <a href="jugadores.html">Jugadores</a>
          <a href="calendario.html">Calendario</a>
          <a href="metodologia.html#programas">Escuela de porteros</a>
          <a href="tienda.html">Equipación</a>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="overlay" aria-hidden="true"></div>

<nav class="mobile-nav" id="mobileNav" aria-label="Menú móvil">
  <div class="mobile-nav__head">
    <span class="brand"><img src="assets/img/mark.png" alt="" width="40" height="40"><span class="brand__word"><b>Corre</b><i>Cancún</i></span></span>
    <button class="mobile-nav__close" type="button" aria-label="Cerrar menú">
      <svg viewBox="0 0 24 24"><path d="m6 5 13 13-1 1L5 6l1-1Zm13 1L6 19l-1-1L18 5l1 1Z"/></svg>
    </button>
  </div>
  ${[...NAV_LEFT, ...NAV_RIGHT].map((i) => i.mega
      ? `<details${i.key === active ? " open" : ""}><summary>${i.label}</summary><div>${
          i.mega.filter((c) => !c.feature).flatMap((c) => c.links).map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</div></details>`
      : `<a class="mobile-nav__flat" href="${i.href}">${i.label}</a>`).join("")}
  <div class="mobile-nav__cta">
    <a href="inscripciones.html#familias" class="btn btn--ghost btn--block">Área de familias</a>
    <a href="inscripciones.html" class="btn btn--grana btn--block">Inscríbete</a>
  </div>
</nav>`;
  }

  function footerHTML() {
    const social = [
      ["Facebook", "M13 22v-8h3l.5-4H13V7.5c0-1 .3-1.5 1.8-1.5H17V2.5C16.6 2.4 15.3 2.3 14 2.3c-2.9 0-4.9 1.8-4.9 5V10H6v4h3v8h4Z"],
      ["Instagram", "M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.4 1.3.5 2.3C21.9 9 22 9.3 22 12s0 3-.1 4.1c0 1-.2 1.7-.5 2.3a4.4 4.4 0 0 1-2.6 2.6c-.6.3-1.3.4-2.3.5C15 21.9 14.7 22 12 22s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5a4.4 4.4 0 0 1-2.6-2.6c-.3-.6-.4-1.3-.5-2.3C2.1 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3A4.4 4.4 0 0 1 5.2 3c.6-.3 1.3-.4 2.3-.5C9 2.1 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.3-3.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"],
      ["YouTube", "M22 12s0-3.3-.4-4.9a2.7 2.7 0 0 0-1.9-1.9C17.9 5 12 5 12 5s-5.9 0-7.7.4A2.7 2.7 0 0 0 2.4 7C2 8.7 2 12 2 12s0 3.3.4 4.9a2.7 2.7 0 0 0 1.9 1.9C6.1 19 12 19 12 19s5.9 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9C22 15.3 22 12 22 12Zm-12 3V9l5 3-5 3Z"],
      ["WhatsApp", "M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.2-3.7-.8-3.1-1.3-5.1-4.5-5.3-4.7-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.2.8-.1l2.3 1.1c.3.2.5.2.6.4.1.1.1.8-.1 1.5Z"]
    ];
    return `
<footer class="site-footer">
  <div class="wrapper wrapper--wide">
    <div class="footer-trophies">
      ${window.CorreData.cifras.map((c) => `<div class="trophy">
        <span class="trophy__icon"><i class="${c.icon}" aria-hidden="true"></i></span>
        <span><span class="trophy__count">${c.num}</span><br><span class="trophy__label">${c.label}</span></span>
      </div>`).join("")}
    </div>

    <div class="footer-social">
      <p>Sigue al Corre Cancún en redes sociales</p>
      <div class="footer-social__links">
        ${social.map(([n, d]) => `<a href="#" aria-label="${n}"><svg viewBox="0 0 24 24"><path d="${d}"/></svg></a>`).join("")}
      </div>
    </div>

    <div class="footer-cols">
      <div class="footer-col footer-squad">
        <h3>Categorías</h3>
        <div class="footer-squad__group"><span>Fútbol base</span><a href="categorias.html#escuela">Escuela</a><a href="categorias.html#prebenjamin">Prebenjamín</a><a href="categorias.html#benjamin">Benjamín</a><a href="categorias.html#alevin">Alevín</a></div>
        <div class="footer-squad__group"><span>Competición</span><a href="categorias.html#infantil">Infantil</a><a href="categorias.html#cadete">Cadete</a><a href="categorias.html#juvenil">Juvenil</a></div>
        <div class="footer-squad__group"><span>Femenino</span><a href="categorias.html#femenino">Sub-12</a><a href="categorias.html#femenino">Sub-16</a></div>
        <div class="footer-squad__group"><span>Sénior</span><a href="categorias.html">Primer equipo amateur</a></div>
      </div>
      <div class="footer-col">
        <h3>El club</h3>
        <ul>
          <li><a href="inscripciones.html">Inscripciones</a></li>
          <li><a href="inscripciones.html#cuotas">Cuotas y becas</a></li>
          <li><a href="metodologia.html">Metodología</a></li>
          <li><a href="metodologia.html#programas">Escuela de porteros</a></li>
          <li><a href="metodologia.html#programas">Campus de vacaciones</a></li>
          <li><a href="corre-tv.html">Corre TV</a></li>
          <li><a href="tienda.html">Tienda del club</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Información</h3>
        <ul>
          <li><a href="club.html">Quiénes somos</a></li>
          <li><a href="jugadores.html">Jugadores de la cantera</a></li>
          <li><a href="calendario.html">Calendario y resultados</a></li>
          <li><a href="club.html#instalaciones">Instalaciones</a></li>
          <li><a href="contacto.html">Únete al staff</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Historia</h3>
        <ul>
          <li><a href="club.html#historia">Nuestros orígenes (2007)</a></li>
          <li><a href="club.html#historia">El primer campo</a></li>
          <li><a href="club.html#historia">La llegada del femenino</a></li>
          <li><a href="club.html#historia">18 años de cantera</a></li>
          <li><a href="club.html#historia">Exjugadores del club</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-legal">
      <span class="footer-legal__brand">
        <img src="assets/img/mark.png" alt="" width="30" height="30">
        © <span class="js-year">2025</span> Corre Cancún · Club formativo de fútbol base · Proyecto de demostración sin afiliación oficial
      </span>
      <nav aria-label="Enlaces legales">
        <a href="#">Aviso legal</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Cookies</a>
        <a href="#">Protección del menor</a>
        <a href="#">Accesibilidad</a>
        <a href="contacto.html">Contacto</a>
      </nav>
    </div>
  </div>
</footer>

<button class="to-top" type="button" aria-label="Volver arriba">
  <svg viewBox="0 0 24 24"><path d="m12 6 8 8-1.5 1.5L12 9l-6.5 6.5L4 14l8-8Z"/></svg>
</button>

<div class="lightbox" data-lightbox hidden>
  <button class="lightbox__close" type="button" aria-label="Cerrar">
    <svg viewBox="0 0 24 24"><path d="m6 5 13 13-1 1L5 6l1-1Zm13 1L6 19l-1-1L18 5l1 1Z"/></svg>
  </button>
  <div class="lightbox__stage" role="dialog" aria-modal="true" aria-label="Reproductor de vídeo">
    <div class="lightbox__player">
      <span class="lightbox__badge">DEMO</span>
      <i class="ri-play-circle-line" aria-hidden="true"></i>
      <p data-lightbox-title></p>
      <small>Vídeo de demostración — no hay reproducción real en este proyecto.</small>
    </div>
  </div>
</div>

<div class="cookie" hidden>
  <div class="cookie__box" role="dialog" aria-modal="true" aria-label="Consentimiento de cookies">
    <span class="brand"><img src="assets/img/logo.png" alt="" width="150"></span>
    <p>Usamos cookies propias y de terceros para que la web funcione, recordar tus preferencias
      y entender cómo se usa. Puedes aceptarlas, configurarlas o rechazar las no esenciales en
      cualquier momento desde <a href="#">Configuración de cookies</a>.</p>
    <div class="cookie__actions">
      <button class="btn btn--gold" type="button" data-consent="all">Aceptar</button>
      <button class="btn btn--ghost" type="button" data-consent="custom" style="color:#121212;border-color:#ccced6">Configurar</button>
      <button class="btn btn--grana" type="button" data-consent="reject">Rechazar</button>
    </div>
  </div>
</div>`;
  }

  /* ---------------------------------------------------------------- Conducta */
  function initHeader() {
    const overlay = $(".overlay");
    const searchPanel = $(".search-panel");
    const searchToggle = $(".search-toggle");
    const megaItems = $$(".mainnav__item--has-mega");
    const mobileNav = $(".mobile-nav");
    const navToggle = $(".nav-toggle");
    let megaTimer;

    const hideOverlay = () => {
      if (![...megaItems].some((i) => i.classList.contains("is-open")) &&
          !searchPanel?.classList.contains("is-open") &&
          !mobileNav?.classList.contains("is-open")) overlay.classList.remove("is-visible");
    };

    function openMega(item) {
      clearTimeout(megaTimer);
      megaItems.forEach((i) => i !== item && closeMega(i));
      item.classList.add("is-open");
      $(".mainnav__link", item)?.setAttribute("aria-expanded", "true");
      overlay.classList.add("is-visible");
    }
    function closeMega(item) {
      item.classList.remove("is-open");
      $(".mainnav__link", item)?.setAttribute("aria-expanded", "false");
      hideOverlay();
    }
    megaItems.forEach((item) => {
      const link = $(".mainnav__link", item);
      item.addEventListener("mouseenter", () => openMega(item));
      item.addEventListener("mouseleave", () => { megaTimer = setTimeout(() => closeMega(item), 140); });
      link.addEventListener("click", (e) => {
        // en escritorio el enlace abre el panel; permite navegar con Ctrl/Cmd o segundo clic
        if (window.innerWidth <= 1024) return;
        e.preventDefault();
        item.classList.contains("is-open") ? (location.href = link.href) : openMega(item);
      });
    });

    searchToggle?.addEventListener("click", () => {
      const open = searchPanel.classList.toggle("is-open");
      searchToggle.setAttribute("aria-expanded", String(open));
      open ? overlay.classList.add("is-visible") : hideOverlay();
      if (open) setTimeout(() => $("input", searchPanel)?.focus(), 120);
    });

    function closeMobileNav() {
      mobileNav?.classList.remove("is-open");
      document.body.classList.remove("is-locked");
      navToggle?.setAttribute("aria-expanded", "false");
      hideOverlay();
    }
    navToggle?.addEventListener("click", () => {
      mobileNav.classList.add("is-open");
      overlay.classList.add("is-visible");
      document.body.classList.add("is-locked");
      navToggle.setAttribute("aria-expanded", "true");
    });
    $(".mobile-nav__close")?.addEventListener("click", closeMobileNav);

    overlay.addEventListener("click", () => {
      megaItems.forEach(closeMega);
      searchPanel?.classList.remove("is-open");
      searchToggle?.setAttribute("aria-expanded", "false");
      closeMobileNav();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      megaItems.forEach(closeMega);
      searchPanel?.classList.remove("is-open");
      closeMobileNav();
    });

    // Cabecera compacta
    const header = $(".site-header");
    const toTop = $(".to-top");
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 40);
      toTop?.classList.toggle("is-visible", y > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Selector de idioma
    const lang = $("[data-lang]");
    if (lang) {
      const btn = $(".ribbon__lang", lang);
      const menu = $(".lang__menu", lang);
      const cur = $("[data-lang-current]", lang);
      try {
        const saved = localStorage.getItem("correfc.lang");
        if (saved) cur.textContent = saved.toUpperCase();
      } catch (_) {}
      const closeLang = () => { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); };
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = menu.hidden;
        menu.hidden = !open;
        btn.setAttribute("aria-expanded", String(open));
      });
      $$("[data-lang-opt]", menu).forEach((li) => {
        li.addEventListener("click", () => {
          const code = li.dataset.langOpt;
          cur.textContent = code.toUpperCase();
          try { localStorage.setItem("correfc.lang", code); } catch (_) {}
          $$("[data-lang-opt]", menu).forEach((x) => x.setAttribute("aria-selected", x === li));
          closeLang();
          toast(`Idioma: ${li.dataset.name}. La traducción completa no está disponible en esta demo.`);
        });
      });
      document.addEventListener("click", closeLang);
    }

    // Cookies
    const cookie = $(".cookie");
    const CK = "correfc.consent";
    let consent = null;
    try { consent = localStorage.getItem(CK); } catch (_) {}
    if (cookie && !consent) { cookie.hidden = false; document.body.classList.add("is-locked"); }
    $$("[data-consent]").forEach((b) => b.addEventListener("click", () => {
      try { localStorage.setItem(CK, b.dataset.consent); } catch (_) {}
      cookie.hidden = true; document.body.classList.remove("is-locked");
    }));

    // Lightbox de vídeo
    const lb = $("[data-lightbox]");
    if (lb) {
      const close = () => { lb.hidden = true; document.body.classList.remove("is-locked"); };
      $(".lightbox__close", lb).addEventListener("click", close);
      lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
      window.CorreLightbox = (title) => {
        $("[data-lightbox-title]", lb).textContent = title || "Vídeo del club";
        lb.hidden = false; document.body.classList.add("is-locked");
      };
    }

    $$(".js-year").forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  /* ------------------------------------------------------------------- Toast */
  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("is-visible"), 3600);
  }
  window.CorreToast = toast;

  /* ------------------------------------------------------------------ Montaje */
  function mount() {
    const h = $("[data-layout-header]");
    const f = $("[data-layout-footer]");
    if (h) h.outerHTML = headerHTML(h.dataset.active || "");
    if (f) f.outerHTML = footerHTML();
    initHeader();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
