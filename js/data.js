/* ==========================================================================
   Corre Cancún — Datos del sitio (demo)
   Fuente única de contenido para portada, listados, fichas y buscador.
   ========================================================================== */
window.CorreData = (function () {
  "use strict";

  const S = "assets/img/scenes/";

  const noticias = [
    {
      id: "representar-quintana-roo",
      titulo: "Tres jugadores del club representan a Quintana Roo en los Nacionales",
      categoria: "Cantera",
      fecha: "2025-09-02",
      hace: "Hace 2 h",
      img: "assets/img/rep-santi.jpg",
      imgPortrait: true,
      imgAlt: "Jugador del club con la equipación de la selección de Quintana Roo",
      resumen: "Tony, Santi y Jaziel fueron convocados por las selecciones de Quintana Roo de su categoría y compitieron en los campeonatos nacionales. Enhorabuena a los tres.",
      jugadores: [
        { nombre: "Tony", foto: "assets/img/rep-tony.jpg", tag: "Selección Q. Roo · 2016",
          texto: "Cuarto puesto en el Nacional: entre los cuatro mejores equipos del país." },
        { nombre: "Santi", foto: "assets/img/rep-santi.jpg", tag: "Selección Q. Roo · 2017",
          texto: "Disputó el Nacional celebrado en Playa del Carmen. En el club desde el primer día del proyecto." },
        { nombre: "Jaziel", foto: "assets/img/rep-jaziel.jpg", tag: "Selección Q. Roo · portero",
          texto: "Con solo 9 años, ya suma su segunda participación en un torneo nacional." }
      ],
      cta: { texto: "Conoce nuestras categorías", url: "categorias.html" },
      cuerpo: [
        "El Corre Cancún celebra que tres de sus jugadores —Tony, Santi y Jaziel— hayan sido convocados por las selecciones de Quintana Roo de sus categorías para disputar los campeonatos nacionales.",
        "Los tres llevan en el club prácticamente desde que arrancó el proyecto. En cada entrenamiento han demostrado la constancia, la disciplina y el compromiso que ahora les han abierto esta puerta.",
        "Tony firmó un cuarto puesto a nivel nacional con la selección 2016, colándose entre los cuatro mejores equipos del país. Santi vivió la experiencia del Nacional en Playa del Carmen con la categoría 2017. Y Jaziel, con solo nueve años, ya suma su segunda participación en un torneo nacional bajo palos.",
        "Representar al estado con el escudo del club en el pecho es un orgullo para toda la familia del Corre Cancún. Enhorabuena a los tres: seguid trabajando, luchando por vuestros sueños y dejando huella."
      ]
    },
    {
      id: "porteros-septiembre",
      titulo: "Septiembre arranca con nuevos retos: entrenamientos de porteros",
      categoria: "Escuela de porteros",
      fecha: "2025-09-02",
      hace: "Hace 1 h",
      img: "assets/img/porteros.jpg",
      imgPortrait: true,
      imgAlt: "Portero del Corre Cancún con guantes y brazos cruzados frente al cielo azul",
      resumen: "Sesiones específicas para todos los porteros del club, de benjamín a juvenil. Enfoque, técnica, disciplina y seguridad bajo los tres palos.",
      datos: [
        { icon: "ri-calendar-line", label: "Días", valor: "Martes y miércoles" },
        { icon: "ri-time-line", label: "Hora", valor: "17:00 h" },
        { icon: "ri-focus-3-line", label: "En qué trabajamos", valor: "Enfoque · Técnica · Disciplina · Seguridad" }
      ],
      cta: { texto: "Apuntar a un portero", url: "inscripciones.html" },
      cuerpo: [
        "Arranca septiembre y con él la nueva temporada de la escuela de porteros del Corre Cancún. Empezamos con ganas y con retos nuevos para cada edad.",
        "Las sesiones son específicas para todos los porteros del club, de benjamín a juvenil. Trabajamos el juego de pies, el blocaje, las salidas, el juego aéreo y, sobre todo, la toma de decisiones y la comunicación con la defensa.",
        "Más allá de la técnica, insistimos en cuatro cosas: enfoque para mantener la concentración los 90 minutos, técnica para repetir bien los gestos, disciplina para no fallar en los detalles y seguridad para transmitir calma al equipo.",
        "¡Prepárate para darlo todo bajo los tres palos! Si tu hijo o hija quiere probar una sesión, habla con su entrenador o escríbenos desde la página de contacto."
      ]
    },
    {
      id: "horarios-benjamin-alevin",
      titulo: "Nuevo horario de entrenamientos para Benjamín y Alevín",
      categoria: "Escuela",
      fecha: "2025-09-01",
      hace: "Hace 4 h",
      img: S + "news-escuela.svg",
      resumen: "A partir de esta semana, benjamines y alevines entrenan martes y jueves de 17:30 a 19:00 para aprovechar mejor la luz natural.",
      cuerpo: [
        "El club ajusta los horarios de las categorías de fútbol base para el arranque de curso.",
        "Benjamín y Alevín pasan a entrenar los martes y jueves de 17:30 a 19:00 en los campos 2 y 3. El resto de categorías mantienen su horario habitual.",
        "Las familias pueden consultar el calendario completo en el área de familias o escribir a la coordinación si tienen cualquier duda."
      ]
    },
    {
      id: "femenino-primer-amistoso",
      titulo: "El femenino Sub-14 disputa su primer amistoso de la temporada",
      categoria: "Femenino",
      fecha: "2025-08-31",
      hace: "Hace 6 h",
      img: S + "news-femenino.svg",
      resumen: "El equipo estrenó la nueva equipación en un amistoso disputado en casa con muy buenas sensaciones colectivas.",
      cuerpo: [
        "El femenino Sub-14 abrió la pretemporada con un amistoso en el Campo Municipal.",
        "Más allá del marcador, el cuerpo técnico destacó la actitud y las ganas de un grupo que este año crece con seis incorporaciones nuevas.",
        "El equipo seguirá preparando el inicio de liga con dos amistosos más antes de la primera jornada oficial."
      ]
    },
    {
      id: "puertas-abiertas",
      titulo: "Jornada de puertas abiertas: ven a probar un entrenamiento gratis",
      categoria: "Escuela",
      fecha: "2025-08-30",
      hace: "Hace 8 h",
      img: S + "news-puertas.svg",
      resumen: "El sábado 13 de septiembre abrimos los campos para que niños y niñas de 4 a 12 años prueben un entrenamiento sin compromiso.",
      cuerpo: [
        "El club organiza una jornada de puertas abiertas para dar a conocer su forma de trabajar.",
        "Será el sábado 13 de septiembre de 10:00 a 13:00 en la Ciudad Deportiva. Solo hace falta ropa cómoda, botas o zapatillas y una botella de agua.",
        "No es necesario inscribirse previamente, aunque agradecemos que las familias avisen por el formulario de contacto para organizar los grupos por edad."
      ]
    },
    {
      id: "juvenil-senior",
      titulo: "Tres jugadores del Juvenil se incorporan al primer equipo amateur",
      categoria: "Sénior",
      fecha: "2025-08-29",
      hace: "Hace 20 h",
      img: S + "news-senior.svg",
      resumen: "Dan el salto tras varios años en la cantera y compaginarán entrenamientos con el juvenil durante las primeras semanas.",
      cuerpo: [
        "El primer equipo amateur incorpora a tres jugadores formados en el club desde la categoría benjamín.",
        "La transición se hará de forma progresiva: durante septiembre alternarán sesiones con el juvenil para adaptarse al ritmo del sénior.",
        "Es el camino natural que el club quiere para sus jugadores: crecer dentro de casa."
      ]
    },
    {
      id: "charla-familias",
      titulo: "Charla para familias sobre alimentación, descanso y deporte",
      categoria: "Club",
      fecha: "2025-08-28",
      hace: "Hace 1 día",
      img: S + "news-familias.svg",
      resumen: "Abierta a todas las familias del club, con una nutricionista y un fisioterapeuta del cuerpo técnico.",
      cuerpo: [
        "El club retoma su ciclo de charlas formativas para familias.",
        "En esta primera sesión se hablará de hábitos de alimentación, importancia del descanso y prevención de lesiones en edades de formación.",
        "Será el jueves 18 de septiembre a las 19:00 en la sala polivalente. La entrada es libre hasta completar aforo."
      ]
    }
  ];

  const categorias = [
    { id: "escuela", nombre: "Escuela", edad: "4-6 años", img: S + "cat-escuela.svg",
      desc: "Primer contacto con el balón a través del juego. Psicomotricidad, coordinación y, sobre todo, pasarlo bien.",
      dias: "Martes y jueves · 17:15-18:15", pruebas: false, equipos: 2 },
    { id: "prebenjamin", nombre: "Prebenjamín", edad: "7-8 años", img: S + "cat-base.svg",
      desc: "Fútbol 5. Empezamos a entender los espacios, el pase y la ocupación del campo sin perder el disfrute.",
      dias: "Martes y jueves · 17:30-19:00", pruebas: false, equipos: 2 },
    { id: "benjamin", nombre: "Benjamín", edad: "9-10 años", img: S + "cat-benjamin.svg",
      desc: "Fútbol 7. Se consolidan los fundamentos técnicos y aparecen las primeras nociones tácticas por líneas.",
      dias: "Martes y jueves · 17:30-19:00", pruebas: false, equipos: 2 },
    { id: "alevin", nombre: "Alevín", edad: "11-12 años", img: S + "cat-alevin.svg",
      desc: "Fútbol 7. Última etapa antes del campo grande: velocidad de decisión, cambios de orientación y roles.",
      dias: "Lunes, miércoles y viernes · 17:30-19:00", pruebas: true, equipos: 2 },
    { id: "infantil", nombre: "Infantil", edad: "13-14 años", img: S + "cat-infantil.svg",
      desc: "Fútbol 11. Adaptación al campo grande, al fuera de juego y a un modelo de juego con más matices.",
      dias: "Lunes, miércoles y viernes · 18:00-19:30", pruebas: true, equipos: 2 },
    { id: "cadete", nombre: "Cadete", edad: "15-16 años", img: S + "cat-cadete.svg",
      desc: "Fútbol 11. Se exige más en lo físico y lo táctico, con trabajo específico por puestos.",
      dias: "Martes, jueves y viernes · 19:00-20:30", pruebas: true, equipos: 2 },
    { id: "juvenil", nombre: "Juvenil", edad: "17-19 años", img: S + "cat-juvenil.svg",
      desc: "Última categoría de la formación. Puente hacia el sénior amateur y hacia otros clubes de la zona.",
      dias: "Lunes, miércoles y viernes · 20:00-21:30", pruebas: true, equipos: 2 },
    { id: "femenino", nombre: "Femenino", edad: "Sub-12 y Sub-16", img: S + "cat-femenino.svg",
      desc: "Dos equipos femeninos en crecimiento. Mismo proyecto formativo, mismos valores, mismas oportunidades.",
      dias: "Martes y jueves · 18:00-19:30", pruebas: false, equipos: 2 }
  ];

  const calendario = [
    { cat: "Juvenil A", comp: "Liga Comarcal", jornada: "Jornada 3", local: "Corre Cancún", visitante: "Costa CF",
      fecha: "2025-09-07", hora: "12:00", campo: "Campo Municipal", estado: "próximo" },
    { cat: "Cadete B", comp: "Liga Local", jornada: "Jornada 2", local: "Corre Cancún", visitante: "Nord CF",
      fecha: "2025-09-08", hora: "10:00", campo: "Ciudad Deportiva Corre", estado: "próximo" },
    { cat: "Infantil A", comp: "Copa Federación", jornada: "1ª ronda", local: "Vall UD", visitante: "Corre Cancún",
      fecha: "2025-09-14", hora: "11:30", campo: "Campo de la Vall", estado: "próximo" },
    { cat: "Alevín A", comp: "Liga Local", jornada: "Jornada 2", local: "Corre Cancún", visitante: "Mar CF",
      fecha: "2025-09-14", hora: "09:30", campo: "Ciudad Deportiva Corre", estado: "próximo" },
    { cat: "Femenino Sub-16", comp: "Liga Comarcal", jornada: "Jornada 1", local: "Sur FC", visitante: "Corre Cancún",
      fecha: "2025-09-15", hora: "12:00", campo: "Campo del Sur", estado: "próximo" },
    { cat: "Juvenil A", comp: "Liga Comarcal", jornada: "Jornada 2", local: "Riu CF", visitante: "Corre Cancún",
      fecha: "2025-08-31", hora: "12:00", campo: "Camp del Riu", estado: "jugado", resultado: "1-3" },
    { cat: "Cadete A", comp: "Liga Comarcal", jornada: "Jornada 1", local: "Corre Cancún", visitante: "Costa CF",
      fecha: "2025-08-30", hora: "10:30", campo: "Campo Municipal", estado: "jugado", resultado: "2-2" },
    { cat: "Infantil A", comp: "Liga Local", jornada: "Jornada 1", local: "Corre Cancún", visitante: "Nord CF",
      fecha: "2025-08-24", hora: "10:00", campo: "Ciudad Deportiva Corre", estado: "jugado", resultado: "4-0" }
  ];

  const videos = [
    { id: "metodologia", titulo: "Así entrenamos: un día en la escuela Corre", dur: "4:12", cat: "Club", img: S + "video-metodologia.svg" },
    { id: "gol-semana", titulo: "El gol de la semana · Juvenil A", dur: "0:38", cat: "Juvenil", img: S + "story-3.svg" },
    { id: "porteros", titulo: "Sesión de la escuela de porteros", dur: "3:05", cat: "Formación", img: S + "promo-porteros.svg" },
    { id: "puertas-abiertas", titulo: "Puertas abiertas: un sábado en el club", dur: "2:47", cat: "Escuela", img: S + "news-puertas.svg" },
    { id: "valores", titulo: "Qué significa jugar en el Corre Cancún", dur: "1:59", cat: "Club", img: S + "story-5.svg" },
    { id: "cadete-viaje", titulo: "El viaje del Cadete al torneo de la costa", dur: "5:20", cat: "Cadete", img: S + "story-4.svg" }
  ];

  const tienda = [
    { id: "kit", nombre: "Equipación oficial 25/26", precio: "45 €", img: S + "shop-kit.svg",
      desc: "Camiseta, pantalón y medias de juego. Tallas desde 4 años hasta adulto." },
    { id: "training", nombre: "Chándal de paseo", precio: "52 €", img: S + "shop-training.svg",
      desc: "Chaqueta y pantalón con el escudo bordado. El que llevan los equipos en los desplazamientos." },
    { id: "sudadera", nombre: "Sudadera con capucha", precio: "34 €", img: S + "shop-training.svg",
      desc: "Algodón cepillado, unisex, con el escudo en el pecho." },
    { id: "mochila", nombre: "Mochila del club", precio: "26 €", img: S + "shop-accesorios.svg",
      desc: "Compartimento para botas, portátil y botella. Resistente al agua." },
    { id: "botella", nombre: "Botella 750 ml", precio: "9 €", img: S + "shop-accesorios.svg",
      desc: "Sin BPA, apta para lavavajillas, con el escudo grabado." },
    { id: "bufanda", nombre: "Bufanda del club", precio: "14 €", img: S + "shop-accesorios.svg",
      desc: "Doble cara, tejida, para los partidos de invierno." }
  ];

  const cuotas = [
    { cat: "Escuela", matricula: "60 €", mensual: "28 €" },
    { cat: "Prebenjamín · Benjamín · Alevín", matricula: "80 €", mensual: "34 €" },
    { cat: "Infantil · Cadete · Juvenil", matricula: "90 €", mensual: "38 €" },
    { cat: "Femenino (todas las edades)", matricula: "70 €", mensual: "30 €" }
  ];

  const valores = [
    { icon: "ri-team-line", titulo: "Primero la persona", texto: "Formamos jugadores, pero sobre todo personas: respeto, esfuerzo y compañerismo por encima del resultado." },
    { icon: "ri-football-line", titulo: "Todos juegan", texto: "En fútbol base, todos los niños y niñas tienen minutos. Competir es importante; aprender jugando, más." },
    { icon: "ri-heart-3-line", titulo: "Un club de barrio", texto: "Somos de aquí. Las familias son parte del club y las decisiones se toman pensando en el largo plazo." },
    { icon: "ri-graduation-cap-line", titulo: "Método y paciencia", texto: "Un plan formativo por edades, con objetivos claros en cada etapa y sin quemar etapas." }
  ];

  const staff = [
    { nombre: "Laura Ferrán", rol: "Coordinación de fútbol base" },
    { nombre: "Míriam Cano", rol: "Entrenadora Juvenil A" },
    { nombre: "Dídac Roure", rol: "Coordinación de competición" },
    { nombre: "Sergi Vall", rol: "Escuela de porteros" },
    { nombre: "Nadia El Amrani", rol: "Preparación física" },
    { nombre: "Toni Bosch", rol: "Fisioterapia" }
  ];

  const cifras = [
    { icon: "ri-group-line", num: "14", label: "Equipos" },
    { icon: "ri-football-line", num: "280", label: "Jugadores y jugadoras" },
    { icon: "ri-calendar-line", num: "18", label: "Años formando" },
    { icon: "ri-award-line", num: "9", label: "Categorías" }
  ];

  // Índice de búsqueda (páginas + contenidos)
  const paginas = [
    { titulo: "Inscripciones 25/26", url: "inscripciones.html", tipo: "Página", texto: "cómo inscribirse plazas cuotas becas pruebas de acceso área de familias temporada" },
    { titulo: "Nuestras categorías", url: "categorias.html", tipo: "Página", texto: "escuela prebenjamín benjamín alevín infantil cadete juvenil femenino edades horarios" },
    { titulo: "Metodología", url: "metodologia.html", tipo: "Página", texto: "modelo de juego valores plan formativo por edades tecnificación escuela de porteros" },
    { titulo: "El Club", url: "club.html", tipo: "Página", texto: "historia orígenes 2007 escudo valores junta directiva instalaciones campo municipal ciudad deportiva staff" },
    { titulo: "Calendario y resultados", url: "calendario.html", tipo: "Página", texto: "partidos jornada liga comarcal copa federación resultados convocatoria" },
    { titulo: "Actualidad", url: "actualidad.html", tipo: "Página", texto: "noticias crónicas club día a día" },
    { titulo: "Corre TV", url: "corre-tv.html", tipo: "Página", texto: "vídeos resúmenes entrevistas entrenamientos gol de la semana" },
    { titulo: "Tienda del club", url: "tienda.html", tipo: "Página", texto: "equipación camiseta chándal sudadera mochila botella accesorios ropa" },
    { titulo: "Contacto", url: "contacto.html", tipo: "Página", texto: "teléfono email dirección campo municipal escríbenos formulario" }
  ];

  return {
    noticias, categorias, calendario, videos, tienda, cuotas, valores, staff, cifras, paginas,
    noticia: (id) => noticias.find((n) => n.id === id),
    buscar(q) {
      q = (q || "").trim().toLowerCase();
      if (!q) return [];
      const terms = q.split(/\s+/);
      const hit = (txt) => terms.every((t) => txt.toLowerCase().includes(t));
      const res = [];
      paginas.forEach((p) => { if (hit(p.titulo + " " + p.texto)) res.push({ ...p }); });
      noticias.forEach((n) => {
        if (hit(n.titulo + " " + n.resumen + " " + n.categoria))
          res.push({ titulo: n.titulo, url: "noticia.html?id=" + n.id, tipo: "Noticia", texto: n.resumen });
      });
      categorias.forEach((c) => {
        if (hit(c.nombre + " " + c.desc + " " + c.edad))
          res.push({ titulo: "Categoría · " + c.nombre, url: "categorias.html#" + c.id, tipo: "Categoría", texto: c.desc });
      });
      return res;
    }
  };
})();
