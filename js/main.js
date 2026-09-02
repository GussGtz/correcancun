/* ==========================================================================
   Corre Cancún — Comportamiento de página
   (la cabecera / pie / chrome global viven en layout.js)
   - Cuenta atrás del próximo partido
   - Carruseles con scroll-snap
   - Tarjetas de artículo → ficha
   - Play de vídeo → lightbox
   - Formularios (validación + guardado en localStorage + estado de éxito)
   - Renderizado de listados desde CorreData (noticias, calendario, categorías…)
   - Buscador (buscar.html)
   ========================================================================== */
(function () {
  "use strict";
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const D  = window.CorreData;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fmtFecha = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
  };

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {

    /* ----------------------------------------------------- Cuenta atrás */
    const clock = $(".js-countdown");
    if (clock) {
      let target = Number(clock.dataset.timestamp);
      if (!target || target < Date.now()) {
        const t = new Date(); t.setDate(t.getDate() + 3); t.setHours(12, 0, 0, 0);
        target = t.getTime();
      }
      const cell = (u) => clock.querySelector(`[data-u="${u}"]`);
      const pad = (n) => String(Math.max(0, n)).padStart(2, "0");
      const tick = () => {
        let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
        cell("d").textContent = pad(Math.floor(s / 86400));
        cell("h").textContent = pad(Math.floor((s % 86400) / 3600));
        cell("m").textContent = pad(Math.floor((s % 3600) / 60));
        cell("s").textContent = pad(s % 60);
      };
      tick(); setInterval(tick, 1000);
    }

    /* -------------------------------------------------------- Carruseles */
    $$(".js-carousel").forEach((car) => {
      const track = $(".js-carousel-track", car);
      const prev = $('[data-dir="prev"]', car);
      const next = $('[data-dir="next"]', car);
      if (!track) return;
      const step = () => Math.max(track.clientWidth * 0.8, 280);
      const update = () => {
        const max = track.scrollWidth - track.clientWidth - 4;
        if (prev) prev.disabled = track.scrollLeft <= 4;
        if (next) next.disabled = track.scrollLeft >= max;
      };
      prev?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
      next?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
      track.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    });

    /* ------------------------------------------- Tarjeta de artículo → ficha */
    $$(".js-article-expand").forEach((a) => {
      if (a.dataset.id) a.setAttribute("href", "noticia.html?id=" + a.dataset.id);
    });

    /* --------------------------------------------------- Play vídeo → lightbox */
    $$("[data-video]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        window.CorreLightbox?.(el.dataset.video);
      });
    });

    /* ---------------------------------------------- Anclas con offset de header */
    $$('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      a.addEventListener("click", (e) => {
        const t = document.getElementById(id.slice(1));
        if (!t) return;
        e.preventDefault();
        const y = t.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
        history.replaceState(null, "", id);
      });
    });

    /* ============================================= Renderizado de contenidos */
    renderHeroList();
    renderNoticiasHome();
    renderActualidad();
    renderNoticia();
    renderCategorias();
    renderCalendario();
    renderVideos();
    renderTienda();
    renderCuotas();
    renderValores();
    renderStaff();
    renderPlayersHome();
    renderPlantilla();
    renderJugador();
    renderBuscador();

    /* -------------------------------------------------------- Formularios */
    $$("form[data-form]").forEach(initForm);

    /* ------------------------------------------------------- Animaciones */
    initReveal();
    countUp(document);
  });

  /* ------------------------------------------------------------------ helpers */
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function newsCardHTML(n, lead) {
    return `<a class="news-card${lead ? " news-card--lead" : ""}" href="noticia.html?id=${n.id}">
      <span class="news-card__media${n.imgPortrait ? " is-portrait" : ""}"><img src="${n.img}" alt="">
        <span class="tag">${n.categoria}</span></span>
      <span class="news-card__body">
        <h3>${n.titulo}</h3>
        ${lead && n.resumen ? `<span class="news-card__excerpt">${n.resumen}</span>` : ""}
        <span class="news-card__meta">${n.categoria} · ${n.hace}</span>
      </span></a>`;
  }

  /* --------------------------------------------------- Portada: noticias */
  function renderNoticiasHome() {
    const grid = $("[data-news-home]");
    if (!grid || !D) return;
    grid.innerHTML = D.noticias.map((n, i) => newsCardHTML(n, i === 0)).join("");
  }

  /* --------------------------------- Portada: lista de titulares del hero */
  function renderHeroList() {
    const list = $("[data-hero-list]");
    if (!list || !D) return;
    list.innerHTML = D.noticias.slice(0, 4).map((n) => `
      <a class="hero__item" href="noticia.html?id=${n.id}">
        <span class="ph hero__thumb${n.imgPortrait ? " hero__thumb--portrait" : ""}"><img src="${n.img}" alt=""></span>
        <div><span class="tag tag--blue">${n.categoria}</span><h3>${n.titulo}</h3></div>
      </a>`).join("");
  }

  /* --------------------------------------------------- actualidad.html */
  function renderActualidad() {
    const wrap = $("[data-actualidad]");
    if (!wrap || !D) return;
    const cats = ["Todas", ...new Set(D.noticias.map((n) => n.categoria))];
    const filtros = el("div", "chips");
    filtros.innerHTML = cats.map((c, i) =>
      `<button class="chip${i === 0 ? " is-active" : ""}" data-f="${c}">${c}</button>`).join("");
    const list = el("div", "news__grid");
    const paint = (f) => {
      const items = f === "Todas" ? D.noticias : D.noticias.filter((n) => n.categoria === f);
      list.innerHTML = items.length
        ? items.map((n, i) => newsCardHTML(n, i === 0 && f === "Todas")).join("")
        : `<p class="empty">No hay noticias en esta categoría.</p>`;
    };
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", filtros).forEach((x) => x.classList.toggle("is-active", x === b));
      paint(b.dataset.f);
    });
    wrap.append(filtros, list);
    paint("Todas");
  }

  /* --------------------------------------------------- noticia.html */
  function renderNoticia() {
    const wrap = $("[data-noticia]");
    if (!wrap || !D) return;
    const id = new URLSearchParams(location.search).get("id");
    const n = D.noticia(id) || D.noticias[0];
    document.title = n.titulo + " · Corre Cancún";
    const datos = n.datos ? `
      <ul class="article__facts">${n.datos.map((d) => `
        <li><i class="${d.icon}" aria-hidden="true"></i><span><strong>${d.label}</strong>${d.valor}</span></li>`).join("")}</ul>` : "";
    const cta = n.cta ? `<a class="btn btn--gold" href="${n.cta.url}">${n.cta.texto}</a>` : "";
    const honors = n.jugadores ? `
      <ul class="honors">${n.jugadores.map((j) => {
        const inner = `
          <span class="honor__photo"><img src="${j.foto}" alt="${j.nombre}"></span>
          <span class="honor__body">
            <strong>${j.nombre}</strong>
            <span class="honor__tag">${j.tag}</span>
            <span class="honor__text">${j.texto}</span>
            ${j.id ? '<span class="honor__link">Ver ficha del jugador →</span>' : ""}
          </span>`;
        return j.id
          ? `<li class="honor honor--link"><a href="jugador.html?id=${j.id}">${inner}</a></li>`
          : `<li class="honor">${inner}</li>`;
      }).join("")}</ul>` : "";
    const hero = n.jugadores
      ? ""
      : `<div class="article__hero${n.imgPortrait ? " article__hero--portrait" : ""}"><img src="${n.img}" alt="${n.imgAlt || ""}"></div>`;
    const galeria = n.galeria ? `
      <div class="article__gallery">${n.galeria.map((g) => `
        <figure><img src="${g.src}" alt="${g.alt || ""}"></figure>`).join("")}</div>` : "";
    wrap.innerHTML = `
      <nav class="breadcrumb"><a href="index.html">Inicio</a> › <a href="actualidad.html">Actualidad</a> › <span>${n.categoria}</span></nav>
      <span class="tag">${n.categoria}</span>
      <h1 class="article__title">${n.titulo}</h1>
      <p class="article__meta">${n.categoria} · ${n.hace} · ${fmtFecha(n.fecha)}</p>
      ${hero}
      ${honors}
      ${datos}
      <div class="article__body">${n.cuerpo.map((p) => `<p>${p}</p>`).join("")}</div>
      ${galeria}
      <div class="article__actions">${cta}<a class="btn btn--ghost" href="actualidad.html">← Volver a Actualidad</a></div>`;
    const rel = $("[data-noticia-rel]");
    if (rel) rel.innerHTML = D.noticias.filter((x) => x.id !== n.id).slice(0, 3)
      .map((x) => newsCardHTML(x, false)).join("");
  }

  /* --------------------------------------------------- categorias.html */
  function renderCategorias() {
    const wrap = $("[data-categorias]");
    if (!wrap || !D) return;
    wrap.innerHTML = D.categorias.map((c) => `
      <article class="cat-card" id="${c.id}">
        <div class="cat-card__media"><img src="${c.img}" alt=""><span class="cat-card__edad">${c.edad}</span></div>
        <div class="cat-card__body">
          <h3>${c.nombre}</h3>
          <p>${c.desc}</p>
          <ul class="cat-card__meta">
            <li><i class="ri-time-line" aria-hidden="true"></i> ${c.dias}</li>
            <li><i class="ri-group-line" aria-hidden="true"></i> ${c.equipos} equipos</li>
            <li><i class="ri-${c.pruebas ? "user-search-line" : "check-line"}" aria-hidden="true"></i> ${c.pruebas ? "Con pruebas de acceso" : "Sin pruebas — plaza directa"}</li>
          </ul>
          <a class="btn btn--gold" href="inscripciones.html?cat=${c.id}">Inscribir en ${c.nombre}</a>
        </div>
      </article>`).join("");
    if (location.hash) {
      const t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(() => window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 90 }), 60);
    }
  }

  /* --------------------------------------------------- calendario.html */
  function renderCalendario() {
    const wrap = $("[data-calendario]");
    if (!wrap || !D) return;
    const cats = ["Todas", ...new Set(D.calendario.map((m) => m.cat))];
    const chips = el("div", "chips");
    chips.innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " is-active"}" data-f="${c}">${c}</button>`).join("");

    const prox = el("div", "fixtures-list");
    const res = el("div", "fixtures-list");
    const row = (m) => `<article class="fx">
        <div class="fx__meta"><span class="fx__cat">${m.cat}</span><span>${m.comp} · ${m.jornada}</span></div>
        <div class="fx__match">
          <span class="fx__team${m.local.includes("Corre") ? " is-us" : ""}">${m.local}</span>
          <span class="fx__score">${m.estado === "jugado" ? m.resultado : m.hora}</span>
          <span class="fx__team${m.visitante.includes("Corre") ? " is-us" : ""}">${m.visitante}</span>
        </div>
        <div class="fx__foot">${m.estado === "jugado" ? "Jugado" : fmtFecha(m.fecha)} · ${m.campo}</div>
      </article>`;
    const paint = (f) => {
      const sel = (arr) => f === "Todas" ? arr : arr.filter((m) => m.cat === f);
      prox.innerHTML = sel(D.calendario.filter((m) => m.estado === "próximo")).map(row).join("") || `<p class="empty">Sin partidos próximos.</p>`;
      res.innerHTML = sel(D.calendario.filter((m) => m.estado === "jugado")).map(row).join("") || `<p class="empty">Sin resultados.</p>`;
    };
    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chips).forEach((x) => x.classList.toggle("is-active", x === b));
      paint(b.dataset.f);
    });
    wrap.append(chips,
      el("h2", "section-sub", "Próximos partidos"), prox,
      el("h2", "section-sub", '<span id="resultados">Últimos resultados</span>'), res);
    paint("Todas");
  }

  /* --------------------------------------------------- corre-tv.html */
  function renderVideos() {
    const wrap = $("[data-videos]");
    if (!wrap || !D) return;
    wrap.innerHTML = D.videos.map((v) => `
      <a class="video-card" href="#" data-video="${v.titulo}">
        <span class="video-card__media"><img src="${v.img}" alt="">
          <span class="video-card__play"><i class="ri-play-fill" aria-hidden="true"></i></span>
          <span class="video-card__dur">${v.dur}</span></span>
        <span class="video-card__body"><span class="eyebrow">${v.cat}</span><h3>${v.titulo}</h3></span>
      </a>`).join("");
    $$("[data-video]", wrap).forEach((c) => c.addEventListener("click", (e) => {
      e.preventDefault(); window.CorreLightbox?.(c.dataset.video);
    }));
  }

  /* --------------------------------------------------- tienda.html */
  function renderTienda() {
    const wrap = $("[data-tienda]");
    if (!wrap || !D) return;
    wrap.innerHTML = D.tienda.map((p) => `
      <article class="prod">
        <div class="prod__media"><img src="${p.img}" alt=""></div>
        <div class="prod__body">
          <h3>${p.nombre}</h3>
          <p>${p.desc}</p>
          <div class="prod__foot"><span class="prod__price">${p.precio}</span>
            <button class="btn btn--gold" type="button" data-add="${p.nombre}">Añadir</button></div>
        </div>
      </article>`).join("");
    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("[data-add]"); if (!b) return;
      window.CorreToast?.(`"${b.dataset.add}" añadido al carrito (demo).`);
    });
  }

  function renderCuotas() {
    const t = $("[data-cuotas]");
    if (!t || !D) return;
    t.innerHTML = `<thead><tr><th>Categoría</th><th>Matrícula</th><th>Cuota mensual</th></tr></thead>
      <tbody>${D.cuotas.map((c) => `<tr><td>${c.cat}</td><td>${c.matricula}</td><td>${c.mensual}</td></tr>`).join("")}</tbody>`;
  }

  function renderValores() {
    const w = $("[data-valores]");
    if (!w || !D) return;
    w.innerHTML = D.valores.map((v) => `
      <div class="value">
        <span class="value__icon"><i class="${v.icon}" aria-hidden="true"></i></span>
        <h3>${v.titulo}</h3><p>${v.texto}</p>
      </div>`).join("");
  }

  function renderStaff() {
    const w = $("[data-staff]");
    if (!w || !D) return;
    const initials = (n) => n.split(/\s+/).slice(0, 2).map((x) => x[0]).join("").toUpperCase();
    w.innerHTML = D.staff.map((s, i) => `
      <div class="person">
        <span class="person__photo ph ${["", "ph--grana", "ph--navy", "ph--blue", "", "ph--grana"][i % 6]}"><span class="person__initials">${initials(s.nombre)}</span></span>
        <strong>${s.nombre}</strong><span>${s.rol}</span>
      </div>`).join("");
  }

  /* --------------------------------------------------- Jugadores */
  function playerCardHTML(j, i) {
    return `<a class="player-card" href="jugador.html?id=${j.id}" style="--i:${i || 0}">
      <img src="${j.foto}" alt="">
      <span class="player-card__no">${j.dorsal}</span>
      <span class="player-card__body">
        <small>${j.cat}</small><h3>${j.nombre}</h3><span>${j.pos}</span>
      </span></a>`;
  }
  function staffCardHTML(s, i) {
    const ini = s.nombre.split(/\s+/).slice(0, 2).map((x) => x[0]).join("").toUpperCase();
    return `<div class="player-card player-card--staff" style="--i:${i || 0}">
      <span class="player-card__initials ph ${["", "ph--grana", "ph--navy", "ph--blue"][i % 4]}">${ini}</span>
      <span class="player-card__body"><small>Cuerpo técnico</small><h3>${s.nombre}</h3><span>${s.rol}</span></span>
    </div>`;
  }

  // Portada: carrusel de jugadores
  function renderPlayersHome() {
    const track = $("[data-players-home]");
    if (!track || !D) return;
    track.innerHTML = D.plantilla.map((j, i) => playerCardHTML(j, i)).join("");
  }

  // jugadores.html: rejilla por posición + filtro
  function renderPlantilla() {
    const wrap = $("[data-plantilla]");
    if (!wrap || !D) return;
    const grupos = ["Porteros", "Defensas", "Centrocampistas", "Delanteros"];
    const opts = ["Todos", ...grupos, "Cuerpo técnico"];
    const chips = el("div", "chips");
    chips.innerHTML = opts.map((g, i) =>
      `<button class="chip${i === 0 ? " is-active" : ""}" data-g="${g}">${g}</button>`).join("");
    const body = el("div", "squad");
    const paint = (g) => {
      let html = "";
      if (g === "Todos" || g === "Cuerpo técnico") {
        if (g === "Todos") {
          html += grupos.map((grp) => {
            const js = D.plantilla.filter((j) => j.grupo === grp);
            return `<h2 class="section-sub">${grp}</h2>
              <div class="squad__grid">${js.map((j, i) => playerCardHTML(j, i)).join("")}</div>`;
          }).join("");
        }
        html += `<h2 class="section-sub" id="cuerpo-tecnico">Cuerpo técnico</h2>
          <div class="squad__grid">${D.staff.map((s, i) => staffCardHTML(s, i)).join("")}</div>`;
      } else {
        const js = D.plantilla.filter((j) => j.grupo === g);
        html = `<h2 class="section-sub">${g}</h2>
          <div class="squad__grid">${js.map((j, i) => playerCardHTML(j, i)).join("")}</div>`;
      }
      body.classList.add("is-swapping");
      setTimeout(() => {
        body.innerHTML = html;
        body.querySelectorAll(".squad__grid .player-card").forEach((c, i) => (c.style.setProperty("--i", i)));
        body.classList.remove("is-swapping");
      }, 180);
    };
    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b || b.classList.contains("is-active")) return;
      $$(".chip", chips).forEach((x) => x.classList.toggle("is-active", x === b));
      paint(b.dataset.g);
    });
    wrap.append(chips, body);
    // pintado inicial sin la animación de "swap"
    body.innerHTML = grupos.map((grp) => {
      const js = D.plantilla.filter((j) => j.grupo === grp);
      return `<h2 class="section-sub">${grp}</h2>
        <div class="squad__grid">${js.map((j, i) => playerCardHTML(j, i)).join("")}</div>`;
    }).join("") + `<h2 class="section-sub" id="cuerpo-tecnico">Cuerpo técnico</h2>
      <div class="squad__grid">${D.staff.map((s, i) => staffCardHTML(s, i)).join("")}</div>`;
    body.querySelectorAll(".squad__grid .player-card").forEach((c, i) => c.style.setProperty("--i", i));
  }

  // jugador.html: ficha completa
  function renderJugador() {
    const wrap = $("[data-jugador]");
    if (!wrap || !D) return;
    const id = new URLSearchParams(location.search).get("id");
    const j = D.jugador(id) || D.plantilla[0];
    document.title = j.nombre + " · Corre Cancún";
    const fecha = new Date(j.nac + "T00:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    const edad = Math.floor((Date.now() - new Date(j.nac)) / 31557600000);
    // trayectoria por el club, derivada del año de entrada y la categoría actual
    const escala = ["Prebenjamín", "Benjamín", "Alevín", "Infantil", "Cadete", "Juvenil"];
    const actual = escala.findIndex((e) => (j.cat || "").startsWith(e));
    const inicio = Math.max(0, actual - Math.min(actual, new Date().getFullYear() - Number(j.desde)));
    const paso = actual >= 0 ? escala.slice(inicio, actual + 1) : [];
    const traye = j.historial ? "" : (paso.length > 1
      ? `<p class="jugador__traye"><i class="ri-route-line" aria-hidden="true"></i> En el club desde ${j.desde}. Ha pasado por ${paso.slice(0, -1).join(", ")} y ${paso[paso.length - 1]}.</p>`
      : `<p class="jugador__traye"><i class="ri-route-line" aria-hidden="true"></i> En el club desde ${j.desde}, en la categoría ${j.cat}.</p>`);

    const stats = j.temp ? `
          <div class="jugador__stats">
            <div><strong data-count="${j.temp.pj}">0</strong><span>Partidos</span></div>
            <div><strong data-count="${j.temp.g}">0</strong><span>Goles</span></div>
            <div><strong data-count="${j.temp.a}">0</strong><span>Asistencias</span></div>
          </div>
          <p class="jugador__nota">Datos de la temporada en curso.</p>` : "";

    const fichaRows = [
      ["Lugar de nacimiento", j.lugar],
      ["Fecha de nacimiento", `${fecha} (${edad} años)`],
      ["Altura", j.altura],
      ["Pie", j.pie],
      ["Liga", j.liga],
      ["NUI", j.nui],
      ["En el club desde", j.desde]
    ].filter(([, v]) => v).map(([k, v]) => `<li><strong>${k}</strong>${v}</li>`).join("");

    const palmares = j.palmares ? `
      <h2 class="section-sub" style="color:var(--ink)">Palmarés y logros</h2>
      <ul class="jugador__palmares">${j.palmares.map((p) => `
        <li><i class="ri-trophy-line" aria-hidden="true"></i><span><strong>${p.titulo}</strong>${p.nota ? `<em>${p.nota}</em>` : ""}</span></li>`).join("")}</ul>` : "";

    const historial = j.historial ? `
      <h2 class="section-sub" style="color:var(--ink)">Historia deportiva</h2>
      <div class="table-wrap">
        <table class="data-table jugador__historial">
          <thead><tr><th>Temporada</th><th>Torneo</th><th>Club</th><th>Posición</th><th>Dorsal</th></tr></thead>
          <tbody>${j.historial.map((h) => `<tr>
            <td>${h.temporada}</td><td>${h.torneo}</td><td>${h.club}</td><td>${h.pos}</td><td>#${h.dorsal}</td></tr>`).join("")}</tbody>
        </table>
      </div>` : "";

    wrap.innerHTML = `
      <nav class="breadcrumb"><a href="index.html">Inicio</a> › <a href="jugadores.html">Jugadores</a> › <span>${j.cat}</span></nav>
      <div class="jugador__top">
        <div class="jugador__photo"><img src="${j.foto}" alt="${j.nombre}"><span class="jugador__no">${j.dorsal}</span></div>
        <div class="jugador__intro">
          <span class="eyebrow" style="color:var(--brand-orange)">${j.cat} · ${j.pos}</span>
          <h1>${j.nombre}</h1>
          <p class="jugador__cita">«${j.cita}»</p>
          ${stats}
        </div>
      </div>
      <ul class="jugador__ficha">${fichaRows}</ul>
      ${traye}
      <div class="prose jugador__bio">${j.bio.map((p) => `<p>${p}</p>`).join("")}</div>
      ${palmares}
      ${historial}
      <p style="margin-top:var(--sp-xl)"><a class="btn btn--ghost" href="jugadores.html">← Ver toda la plantilla</a></p>`;
    const rel = $("[data-jugador-rel]");
    if (rel) {
      rel.innerHTML = D.plantilla.filter((x) => x.grupo === j.grupo && x.id !== j.id).slice(0, 4)
        .map((x, i) => playerCardHTML(x, i)).join("");
    }
    countUp(wrap);
  }

  /* ---------------------------------------------- Contadores animados */
  function countUp(scope) {
    const supportsIO = "IntersectionObserver" in window;
    (scope || document).querySelectorAll("[data-count]").forEach((elm) => {
      const end = Number(elm.dataset.count) || 0;
      let done = false;
      const animate = () => {
        if (done) return;
        done = true;
        if (prefersReduced) { elm.textContent = end; return; }
        const dur = 900, t0 = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          elm.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      if (prefersReduced || end === 0 || !supportsIO) { elm.textContent = end; return; }
      const io = new IntersectionObserver((entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) { obs.disconnect(); animate(); }
      }, { threshold: 0.5 });
      io.observe(elm);
      // red de seguridad: si nada disparó en 2,5 s (pestaña oculta, sin rAF…), muestra el número final
      setTimeout(() => {
        io.disconnect();
        if (!done) { done = true; elm.textContent = end; }
      }, 2500);
    });
  }

  /* ------------------------------------------------- Scroll reveal */
  function initReveal() {
    if (prefersReduced || !("IntersectionObserver" in window)) return;
    const sel = [
      ".news-card", ".cat-card", ".video-card", ".prod", ".value", ".person",
      ".honor", ".team-tile", ".info-card", ".trophy", ".fx", ".article__facts",
      ".article__gallery", ".shop-card", ".promo-card", ".story",
      ".squad .section-sub", ".jugador__ficha", ".jugador__bio", ".jugador__traye"
    ].join(",");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    let n = 0, lastTop = -1;
    const items = $$(sel).filter((elm) => !elm.closest("[data-hero-list], .js-carousel-track, [data-players-home]"));
    items.forEach((elm) => {
      const top = Math.round(elm.getBoundingClientRect().top);
      n = Math.abs(top - lastTop) < 8 ? n + 1 : 0;
      lastTop = top;
      elm.classList.add("reveal");
      elm.style.setProperty("--reveal-delay", Math.min(n, 6) * 70 + "ms");
      io.observe(elm);
    });
    // red de seguridad: si el observer no dispara (pestaña oculta, etc.) mostrar todo
    setTimeout(() => { io.disconnect(); items.forEach((e) => e.classList.add("is-visible")); }, 2600);
  }

  /* --------------------------------------------------- buscar.html */
  function renderBuscador() {
    const wrap = $("[data-buscador]");
    if (!wrap || !D) return;
    const q = new URLSearchParams(location.search).get("q") || "";
    const input = $("input[name=q]", wrap);
    if (input) input.value = q;
    const out = $("[data-buscador-results]", wrap);
    const run = (term) => {
      const res = D.buscar(term);
      $("[data-buscador-count]", wrap).textContent = term
        ? `${res.length} resultado${res.length === 1 ? "" : "s"} para "${term}"` : "Escribe algo para buscar.";
      out.innerHTML = res.map((r) => `
        <a class="result" href="${r.url}">
          <span class="result__type">${r.tipo}</span>
          <span class="result__title">${r.titulo}</span>
          <span class="result__text">${r.texto}</span>
        </a>`).join("") || (term ? `<p class="empty">Sin resultados. Prueba con “inscripciones”, “calendario” o “juvenil”.</p>` : "");
    };
    run(q);
    $("form", wrap)?.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = input.value.trim();
      history.replaceState(null, "", "buscar.html" + (t ? "?q=" + encodeURIComponent(t) : ""));
      run(t);
    });
  }

  /* ============================================================ Formularios */
  function initForm(form) {
    const key = "correfc.form." + (form.dataset.form || "generic");
    const status = el("p", "form__status");
    form.appendChild(status);

    // precarga de categoría por querystring (inscripciones)
    const catParam = new URLSearchParams(location.search).get("cat");
    if (catParam) {
      const sel = form.querySelector('[name="categoria"]');
      if (sel) [...sel.options].forEach((o) => { if (o.value === catParam) sel.value = catParam; });
    }

    const showError = (field, msg) => {
      field.classList.add("is-invalid");
      let m = field.parentElement.querySelector(".field__err");
      if (!m) { m = el("span", "field__err"); field.parentElement.appendChild(m); }
      m.textContent = msg;
    };
    const clearError = (field) => {
      field.classList.remove("is-invalid");
      field.parentElement.querySelector(".field__err")?.remove();
    };
    form.addEventListener("input", (e) => { if (e.target.matches("input,select,textarea")) clearError(e.target); });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      const data = {};
      $$("input,select,textarea", form).forEach((f) => {
        if (!f.name || f.type === "submit") return;
        const v = (f.type === "checkbox") ? f.checked : f.value.trim();
        data[f.name] = v;
        if (f.hasAttribute("required")) {
          if (f.type === "checkbox" && !f.checked) { ok = false; showError(f, "Debes marcar esta casilla."); }
          else if (!v) { ok = false; showError(f, "Este campo es obligatorio."); }
        }
        if (f.type === "email" && v && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
          ok = false; showError(f, "Introduce un correo válido.");
        }
        if (f.dataset.min && v.replace(/\D/g, "").length < +f.dataset.min) {
          ok = false; showError(f, "Número de teléfono demasiado corto.");
        }
      });
      if (!ok) {
        status.className = "form__status is-error";
        status.textContent = "Revisa los campos marcados.";
        form.querySelector(".is-invalid")?.focus();
        return;
      }
      try {
        const all = JSON.parse(localStorage.getItem(key) || "[]");
        all.push({ ...data, _ts: Date.now() });
        localStorage.setItem(key, JSON.stringify(all));
      } catch (_) {}
      form.querySelectorAll("input,select,textarea,button").forEach((f) => (f.disabled = true));
      status.className = "form__status is-ok";
      status.innerHTML = (form.dataset.success ||
        "¡Recibido! Te contactaremos pronto.") + " <em>(Guardado localmente — demo sin servidor.)</em>";
      form.reset();
      window.CorreToast?.("Formulario enviado correctamente (demo).");
    });
  }
})();
