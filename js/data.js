/* ==========================================================================
   Corre Cancún — Datos del sitio (demo)
   Fuente única de contenido para portada, listados, fichas y buscador.
   ========================================================================== */
window.CorreData = (function () {
  "use strict";

  const S = "assets/img/scenes/";

  const noticias = [
    {
      id: "porteros-septiembre",
      titulo: "Septiembre arranca con nuevos retos: entrenamientos de porteros",
      categoria: "Escuela de porteros",
      fecha: "2025-09-02",
      hace: "Hace 1 h",
      img: "assets/img/porteros.jpg",
      imgPortrait: true,
      imgAlt: "Portero del Corre Cancún con guantes y brazos cruzados frente al cielo azul",
      resumen: "Sesiones específicas para todos los porteros del club, de cualquier categoría. Enfoque, técnica, disciplina y seguridad bajo los tres palos.",
      datos: [
        { icon: "ri-calendar-line", label: "Días", valor: "Martes y miércoles" },
        { icon: "ri-time-line", label: "Hora", valor: "17:00 h" },
        { icon: "ri-focus-3-line", label: "En qué trabajamos", valor: "Enfoque · Técnica · Disciplina · Seguridad" }
      ],
      cta: { texto: "Apuntar a un portero", url: "inscripciones.html" },
      cuerpo: [
        "Arranca septiembre y con él la nueva temporada de la escuela de porteros del Corre Cancún. Empezamos con ganas y con retos nuevos para cada edad.",
        "Las sesiones son específicas para todos los porteros del club, de cualquier categoría. Trabajamos el juego de pies, el blocaje, las salidas, el juego aéreo y, sobre todo, la toma de decisiones y la comunicación con la defensa.",
        "Más allá de la técnica, insistimos en cuatro cosas: enfoque para mantener la concentración los 90 minutos, técnica para repetir bien los gestos, disciplina para no fallar en los detalles y seguridad para transmitir calma al equipo.",
        "¡Prepárate para darlo todo bajo los tres palos! Si tu hijo o hija quiere probar una sesión, habla con su entrenador o escríbenos desde la página de contacto."
      ]
    },
    {
      id: "representar-quintana-roo",
      titulo: "Tres jugadores del club representan a Quintana Roo en los Nacionales",
      categoria: "Cantera",
      fecha: "2025-09-01",
      hace: "Hace 6 h",
      img: "assets/img/rep-santi.jpg",
      imgPortrait: true,
      imgAlt: "Jugador del club con la equipación de la selección de Quintana Roo",
      resumen: "Tony, Santi y Jaziel fueron convocados por las selecciones de Quintana Roo de su categoría y compitieron en los campeonatos nacionales. Enhorabuena a los tres.",
      jugadores: [
        { nombre: "Tony", foto: "assets/img/rep-tony.jpg", tag: "Selección Q. Roo · 2016",
          texto: "Cuarto puesto en el Nacional: entre los cuatro mejores equipos del país." },
        { nombre: "Santi", foto: "assets/img/rep-santi.jpg", tag: "Selección Q. Roo · 2017", id: "santi-gutierrez",
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
      id: "nueva-temporada-equipacion",
      titulo: "Vuelve la actividad: nueva temporada y estreno de equipación",
      categoria: "Club",
      fecha: "2025-08-20",
      hace: "Hace 2 semanas",
      img: "assets/img/fb-companeros.jpg",
      imgAlt: "Dos jugadores del Corre Cancún con la nueva equipación en azul y naranja",
      resumen: "El club retoma los entrenamientos con el nuevo curso. Todas las categorías estrenan equipación EXEON y vuelven a la actividad, desde Baby Corre hasta Infantil Mayor.",
      galeria: [
        { src: "assets/img/fb-entreno.jpg", alt: "Jugador del Corre Cancún en un entrenamiento por la tarde" },
        { src: "assets/img/fb-porteria.jpg", alt: "Jugador del Corre Cancún bajo palos en un entrenamiento nocturno" }
      ],
      cta: { texto: "Inscribe a tu hijo o hija", url: "inscripciones.html" },
      cuerpo: [
        "Con el nuevo curso escolar el Corre Cancún vuelve a la actividad. Los grupos ya entrenan por las tardes en la cancha y los más pequeños de Baby Corre retoman sus sesiones de psicomotricidad.",
        "Todas las categorías estrenan equipación, confeccionada por EXEON Sportswear, en los colores del club y con el correcaminos en el pantalón.",
        "El club mantiene la inscripción abierta para niños y niñas desde los 2 años. Quien quiera probar una sesión puede escribirnos por el formulario de contacto o acercarse un día de entrenamiento."
      ]
    },
    {
      id: "mundialito-3v3",
      titulo: "El Mundialito Corre 3v3 se despide con la cancha llena de sonrisas",
      categoria: "Club",
      fecha: "2025-07-22",
      hace: "Hace 6 semanas",
      img: "assets/img/mundialito.jpg",
      imgAlt: "Niños del club sentados en círculo alrededor del trofeo en la clausura del Mundialito 3v3",
      resumen: "Un torneo de fútbol rápido tres contra tres en formato mundial: cada equipo del club representó a una selección. Gracias a las familias por acompañarnos.",
      datos: [
        { icon: "ri-football-line", label: "Formato", valor: "Fútbol 3 contra 3" },
        { icon: "ri-flag-line", label: "Selecciones", valor: "8 equipos representando a otros tantos países" },
        { icon: "ri-trophy-line", label: "Espíritu", valor: "Jugar, competir y disfrutar" }
      ],
      galeria: [
        { src: "assets/img/mundialito-2.jpg", alt: "Cartel del Mundialito Corre 3v3 con las ocho selecciones participantes" }
      ],
      cta: { texto: "Ver las categorías del club", url: "categorias.html" },
      cuerpo: [
        "El club cerró una nueva edición del Mundialito Corre 3v3, su torneo interno de fútbol rápido tres contra tres para las categorías de base.",
        "Se jugó en formato mundial: cada equipo del club representó a una selección —México, Argentina, Portugal, España, Inglaterra, Brasil, Francia y Egipto— y compitió por levantar el trofeo.",
        "Más que una competición, fueron varios días de sonrisas, compañerismo y aprendizaje. Cada niño y niña dejó todo en la cancha y nos recordó que el verdadero triunfo está en disfrutar del juego y seguir soñando en grande.",
        "En la clausura, todos los equipos se reunieron en el centro del campo junto al trofeo para cerrar la experiencia como se empezó: jugando. Gracias a todas las familias por acompañarnos. Nos vemos en la próxima edición."
      ]
    },
    {
      id: "baby-corre",
      titulo: "Baby Corre: sesiones abiertas para niños y niñas de 2 y 3 años",
      categoria: "Escuela",
      fecha: "2025-07-14",
      hace: "Hace 2 meses",
      img: "assets/img/baby-corre.jpg",
      imgAlt: "Grupo de niños y niñas muy pequeños posando en el campo tras una sesión de Baby Corre",
      resumen: "El primer contacto con el balón, a partir de los 2 años. Lunes, martes y miércoles de 15:00 a 16:00.",
      datos: [
        { icon: "ri-emotion-happy-line", label: "Edad", valor: "Niños y niñas de 2 y 3 años" },
        { icon: "ri-calendar-line", label: "Días", valor: "Lunes, martes y miércoles" },
        { icon: "ri-time-line", label: "Hora", valor: "15:00 a 16:00 h" }
      ],
      cta: { texto: "Reservar una sesión de prueba", url: "inscripciones.html#escuela" },
      cuerpo: [
        "Baby Corre es el primer escalón del club: el primer contacto con el balón para los más pequeños de la casa.",
        "A través del juego, la psicomotricidad y mucha imaginación, los niños y niñas de 2 y 3 años empiezan a moverse, a compartir y a disfrutar dentro de la cancha, siempre a su ritmo.",
        "Las sesiones están abiertas los lunes, martes y miércoles de 15:00 a 16:00. La mejor forma de conocernos es venir a probar una: escríbenos y os contamos cómo funciona.",
        "No hace falta esperar a que crezcan para empezar a formar su futuro. El mejor momento para dar los primeros pasos es ahora."
      ]
    },
    {
      id: "de-regreso-a-clases",
      titulo: "De regreso a clases: mucho éxito a nuestros niños y niñas",
      categoria: "Club",
      fecha: "2025-08-25",
      hace: "Hace 2 semanas",
      img: "assets/img/fb-entreno.jpg",
      imgAlt: "Jugador del Corre Cancún saludando en el campo",
      resumen: "Arranca el ciclo escolar y desde el club deseamos un año lleno de aprendizajes, sueños y grandes logros, dentro y fuera de la cancha.",
      cuerpo: [
        "Empieza un nuevo curso escolar y toda la familia del Corre Cancún manda un mensaje a sus niños y niñas: que sea un año lleno de aprendizajes, de sueños y de grandes logros.",
        "En el club insistimos en que el fútbol y el estudio van de la mano. Los horarios de entrenamiento están pensados para que ningún jugador tenga que elegir entre una cosa y la otra.",
        "¡A darlo todo dentro y fuera de la cancha!"
      ]
    }
  ];

  const categorias = [
    { id: "baby-corre", nombre: "Baby Corre", edad: "2-3 años", nac: "2023-2024", img: S + "cat-escuela.svg",
      formato: "Baby Corre · psicomotricidad y juego",
      desc: "El primer escalón del club. A través del juego, la psicomotricidad y mucha imaginación, los más pequeños empiezan a moverse, a compartir y a disfrutar del balón, siempre a su ritmo.",
      dias: "Lunes, martes y miércoles · 15:00-16:00", pruebas: false },
    { id: "inicial", nombre: "Inicial", edad: "4-5 años", nac: "2021-2022", img: S + "cat-base.svg",
      formato: "Iniciación · juego y primeras reglas",
      desc: "El primer contacto con el fútbol de verdad: correr, driblar, tirar a portería y aprender a jugar en equipo. Se compite, pero el resultado no manda.",
      dias: "Entre semana, por la tarde", pruebas: false },
    { id: "infantil-menor", nombre: "Infantil Menor", edad: "6-7 años", nac: "2019-2020", img: S + "cat-benjamin.svg",
      formato: "Fútbol 5",
      desc: "Empezamos a entender los espacios, el pase y la ocupación del campo sin perder el disfrute. Primeros partidos de liga y encuentros amistosos.",
      dias: "Entre semana, por la tarde", pruebas: false },
    { id: "ninos-heroes", nombre: "Niños Héroes", edad: "8-9 años", nac: "2017-2018", img: S + "cat-alevin.svg",
      formato: "Fútbol 7",
      desc: "Se consolidan los fundamentos técnicos y aparecen las primeras nociones tácticas por líneas. Compiten en liga y en torneos de la zona.",
      dias: "Entre semana, por la tarde", pruebas: false },
    { id: "infantil-mayor", nombre: "Infantil Mayor", edad: "10-11 años", nac: "2015-2016", img: S + "cat-infantil.svg",
      formato: "Fútbol 7",
      desc: "La categoría mayor del club. Más ritmo, más velocidad de decisión y trabajo por puestos, siempre dentro del proyecto formativo.",
      dias: "Entre semana, por la tarde", pruebas: false },
    { id: "porteros", nombre: "Entrenamiento de porteros", edad: "Todas", nac: "cualquier categoría", img: S + "promo-porteros.svg",
      formato: "Sesión específica de portería", programa: true,
      desc: "Sesiones específicas para los porteros del club: juego de pies, blocaje, salidas, juego aéreo y toma de decisiones. Enfoque, técnica, disciplina y seguridad.",
      dias: "Martes y miércoles · 17:00", pruebas: false }
  ];

  const calendario = [
    { cat: "Niños Héroes", comp: "Liga infantil", jornada: "Jornada 3", local: "Corre Cancún", visitante: "Delfines Cancún",
      fecha: "2025-09-07", hora: "12:00", campo: "Cancha del club", estado: "próximo" },
    { cat: "Infantil Menor", comp: "Liga infantil", jornada: "Jornada 2", local: "Corre Cancún", visitante: "Atlas Cancún",
      fecha: "2025-09-08", hora: "10:00", campo: "Cancha del club", estado: "próximo" },
    { cat: "Infantil Mayor", comp: "Liga infantil", jornada: "Jornada 3", local: "Deportivo Kabah", visitante: "Corre Cancún",
      fecha: "2025-09-14", hora: "11:30", campo: "Unidad Deportiva Kabah", estado: "próximo" },
    { cat: "Inicial", comp: "Encuentro amistoso", jornada: "Convivencia", local: "Corre Cancún", visitante: "Escuela invitada",
      fecha: "2025-09-14", hora: "09:30", campo: "Cancha del club", estado: "próximo" },
    { cat: "Niños Héroes", comp: "Liga infantil", jornada: "Jornada 2", local: "Pioneros Cancún", visitante: "Corre Cancún",
      fecha: "2025-08-31", hora: "12:00", campo: "Cancha Pioneros", estado: "jugado", resultado: "1-3" },
    { cat: "Infantil Mayor", comp: "Liga infantil", jornada: "Jornada 2", local: "Corre Cancún", visitante: "Atlético Cancún",
      fecha: "2025-08-30", hora: "10:30", campo: "Cancha del club", estado: "jugado", resultado: "2-2" },
    { cat: "Infantil Menor", comp: "Liga infantil", jornada: "Jornada 1", local: "Corre Cancún", visitante: "Delfines Cancún",
      fecha: "2025-08-24", hora: "10:00", campo: "Cancha del club", estado: "jugado", resultado: "4-0" }
  ];

  const videos = [
    { id: "metodologia", titulo: "Así entrenamos: un día en el Corre Cancún", dur: "4:12", cat: "Club", img: S + "video-metodologia.svg" },
    { id: "gol-semana", titulo: "El gol de la semana · Niños Héroes", dur: "0:38", cat: "Niños Héroes", img: S + "story-3.svg" },
    { id: "porteros", titulo: "Sesión del entrenamiento de porteros", dur: "3:05", cat: "Porteros", img: S + "promo-porteros.svg" },
    { id: "sabado-partido", titulo: "Un sábado de partido en la cancha", dur: "2:47", cat: "Club", img: S + "news-puertas.svg" },
    { id: "valores", titulo: "Qué significa jugar en el Corre Cancún", dur: "1:59", cat: "Club", img: S + "story-5.svg" },
    { id: "torneo", titulo: "El equipo en un torneo de la zona", dur: "5:20", cat: "Torneos", img: S + "story-4.svg" }
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
    { cat: "Baby Corre · 2023-2024", matricula: "Consultar", mensual: "Consultar" },
    { cat: "Inicial · 2021-2022", matricula: "Consultar", mensual: "Consultar" },
    { cat: "Infantil Menor · 2019-2020", matricula: "Consultar", mensual: "Consultar" },
    { cat: "Niños Héroes · 2017-2018", matricula: "Consultar", mensual: "Consultar" },
    { cat: "Infantil Mayor · 2015-2016", matricula: "Consultar", mensual: "Consultar" },
    { cat: "Entrenamiento de porteros", matricula: "—", mensual: "Consultar" }
  ];

  const valores = [
    { icon: "ri-team-line", titulo: "Primero la persona", texto: "Formamos jugadores, pero sobre todo personas: respeto, esfuerzo y compañerismo por encima del resultado." },
    { icon: "ri-football-line", titulo: "Todos juegan", texto: "En fútbol base, todos los niños y niñas tienen minutos. Competir es importante; aprender jugando, más." },
    { icon: "ri-heart-3-line", titulo: "Un club de barrio", texto: "Somos de aquí. Las familias son parte del club y las decisiones se toman pensando en el largo plazo." },
    { icon: "ri-graduation-cap-line", titulo: "Método y paciencia", texto: "Un plan formativo por edades, con objetivos claros en cada etapa y sin quemar etapas." }
  ];

  const staff = [
    { nombre: "Cuerpo Técnico", rol: "Coordinación deportiva del club" },
    { nombre: "Baby Corre", rol: "Entrenador · 2 y 3 años (2023-2024)" },
    { nombre: "Categoría Inicial", rol: "Entrenador · nacidos en 2021-2022" },
    { nombre: "Infantil Menor", rol: "Entrenador · nacidos en 2019-2020" },
    { nombre: "Niños Héroes", rol: "Entrenador · nacidos en 2017-2018" },
    { nombre: "Infantil Mayor", rol: "Entrenador · nacidos en 2015-2016" },
    { nombre: "Escuela Porteros", rol: "Entrenamiento específico de portería" }
  ];

  const cifras = [
    { icon: "ri-team-line", num: "5", label: "Categorías por año" },
    { icon: "ri-football-line", num: "F5 · F7", label: "Fútbol 5 y fútbol 7" },
    { icon: "ri-heart-add-line", num: "0", label: "Cuota para no dejar a nadie fuera" },
    { icon: "ri-heart-3-line", num: "100%", label: "Todos juegan" }
  ];

  // Jugadores del club
  const plantilla = [
    { id: "santi-gutierrez", nombre: "Santiago «Santi» Gutiérrez", apellido: "Gutiérrez", dorsal: 103, pos: "Defensa", grupo: "Defensas",
      cat: "Niños Héroes", foto: "assets/img/jug-santi.jpg", retrato: "assets/img/jug-santi.png",
      heroBg: "assets/img/jficha-hero-bg.jpg",
      nac: "2018-10-16", lugar: "Quintana Roo",
      desde: "2025", liga: "Liga Guillermo Cañedo, A. C.", nui: "1222933",
      cita: "Defensa aplicado que no pierde la marca y sabe salir jugando desde atrás.",
      stats: [
        { num: 4, label: "Temporadas", sub: "Fútbol federado" },
        { num: 2, label: "Categorías", sub: "2017 y 2018" },
        { num: 5, label: "Logros", sub: "En el palmarés" }
      ],
      bio: [
        "Con solo siete años, Santi acumula una trayectoria poco habitual para su edad. Empezó en el fútbol federado en la temporada 2023-24 y desde entonces no ha dejado de competir.",
        "En 2025 se incorporó al Corre Cancún y es de los pocos jugadores que están en el proyecto desde el principio. En 2026 fue convocado por la selección de Quintana Roo para disputar el campeonato nacional en Playa del Carmen.",
        "Juega sobre todo de defensa, aunque en distintas etapas también ha actuado de medio y de delantero. En la temporada 2024-25 fue capitán de su equipo. Es tenaz en la marca y cada temporada mejora su salida de balón.",
        "Lo que más lo distingue es que, siendo de 2018, compite en su categoría y también en una superior. En cada club destaca lo suficiente para alternar la 2018 y la 2017; de hecho, esta última temporada fue convocado por la selección de Quintana Roo 2017."
      ],
      palmares: [
        { tag: "Liga", titulo: "Liga Guillermo Cañedo", mark: "1º", icon: "ri-trophy-fill", nota: "Campeón con Filial Venados N. Héroes · 2025-26" },
        { tag: "Torneo", titulo: "Copa ACO", mark: "1º", icon: "ri-trophy-fill", nota: "Campeón · Valladolid 2026" },
        { tag: "Internacional", titulo: "Copa Celta", mark: "2º", icon: "ri-medal-fill", nota: "Subcampeón · RC Celta y Celta Academy · 2026" },
        { tag: "Selección", titulo: "Quintana Roo 2017", mark: "★", icon: "ri-shield-star-fill", nota: "Campeonato nacional · Playa del Carmen 2026" },
        { tag: "Torneo", titulo: "Copa Pioneros", mark: "—", icon: "ri-football-fill", nota: "Participación · 2026" }
      ],
      historial: [
        { temporada: "2025-26", torneo: "Liga Guillermo Cañedo", club: "Filial Venados N. Héroes", pos: "Defensa", dorsal: "131" },
        { temporada: "2025-26", torneo: "Liga Premier Infantil-Juvenil", club: "Corre Cancún Sub-9", pos: "Medio", dorsal: "103" },
        { temporada: "2024-25", torneo: "Liga Guillermo Cañedo", club: "Atlas Cancún Infantil Menor", pos: "Delantero", dorsal: "19", cap: true },
        { temporada: "2023-24", torneo: "Liga Guillermo Cañedo", club: "Atlas Cancún Infantil Inicial", pos: "Defensa", dorsal: "74" }
      ] },
  ];

  // Índice de búsqueda (páginas + contenidos)
  const paginas = [
    { titulo: "Inscripciones 25/26", url: "inscripciones.html", tipo: "Página", texto: "cómo inscribirse plazas cuotas becas pruebas de acceso área de familias temporada" },
    { titulo: "Nuestras categorías", url: "categorias.html", tipo: "Página", texto: "baby corre inicial infantil menor niños héroes infantil mayor 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 porteros edades año de nacimiento" },
    { titulo: "Jugadores del club", url: "jugadores.html", tipo: "Página", texto: "plantilla equipo porteros defensas fichas jugadores jugadoras dorsal posición santi" },
    { titulo: "Metodología", url: "metodologia.html", tipo: "Página", texto: "modelo de juego valores plan formativo por edades entrenamiento de porteros" },
    { titulo: "El Club", url: "club.html", tipo: "Página", texto: "historia correcaminos escudo valores compromiso con el menor instalaciones cancha staff" },
    { titulo: "Calendario y resultados", url: "calendario.html", tipo: "Página", texto: "partidos jornada liga infantil torneos amistosos resultados convocatoria" },
    { titulo: "Actualidad", url: "actualidad.html", tipo: "Página", texto: "noticias crónicas club día a día" },
    { titulo: "Corre TV", url: "corre-tv.html", tipo: "Página", texto: "vídeos resúmenes entrevistas entrenamientos gol de la semana" },
    { titulo: "Tienda del club", url: "tienda.html", tipo: "Página", texto: "equipación camiseta chándal sudadera mochila botella accesorios ropa" },
    { titulo: "Contacto", url: "contacto.html", tipo: "Página", texto: "teléfono email dirección campo municipal escríbenos formulario" }
  ];

  return {
    noticias, categorias, calendario, videos, tienda, cuotas, valores, staff, cifras, paginas, plantilla,
    noticia: (id) => noticias.find((n) => n.id === id),
    jugador: (id) => plantilla.find((j) => j.id === id),
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
      plantilla.forEach((j) => {
        if (hit(j.nombre + " " + j.pos + " " + j.cat + " " + j.grupo))
          res.push({ titulo: j.nombre + " · " + j.pos, url: "jugador.html?id=" + j.id, tipo: "Jugador", texto: j.cat + " — " + j.cita });
      });
      return res;
    }
  };
})();
