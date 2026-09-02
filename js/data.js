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
      id: "femenino-primer-amistoso",
      titulo: "El femenino Sub-14 disputa su primer amistoso de la temporada",
      categoria: "Femenino",
      fecha: "2025-08-30",
      hace: "Hace 3 meses",
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
      fecha: "2025-08-29",
      hace: "Hace 3 meses",
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
      fecha: "2025-08-28",
      hace: "Hace 4 meses",
      img: S + "news-senior.svg",
      resumen: "Dan el salto tras varios años en la cantera y compaginarán entrenamientos con el juvenil durante las primeras semanas.",
      cuerpo: [
        "El primer equipo amateur incorpora a tres jugadores formados en el club desde la categoría benjamín.",
        "La transición se hará de forma progresiva: durante septiembre alternarán sesiones con el juvenil para adaptarse al ritmo del sénior.",
        "Es el camino natural que el club quiere para sus jugadores: crecer dentro de casa."
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

  // Jugadores destacados de la cantera (fichas de ejemplo)
  const P = (i) => S + "player-" + i + ".svg";
  const plantilla = [
    // Jugador real del club
    { id: "santi-gutierrez", nombre: "Santiago «Santi» Gutiérrez", dorsal: 131, pos: "Defensa", grupo: "Defensas",
      cat: "Prebenjamín", foto: "assets/img/jug-santi.jpg", nac: "2018-10-16", lugar: "Quintana Roo",
      desde: "2025", liga: "Liga Guillermo Cañedo, A. C.", nui: "1222933",
      cita: "Defensa aplicado que no pierde la marca y sabe salir jugando desde atrás.",
      bio: [
        "Con solo siete años, Santi acumula una trayectoria poco habitual para su edad. Empezó en el fútbol federado en la temporada 2023-24 y desde entonces no ha dejado de competir.",
        "En 2025 se incorporó al Corre Cancún y es de los pocos jugadores que están en el proyecto desde el principio. En 2026 fue convocado por la selección de Quintana Roo para disputar el campeonato nacional en Playa del Carmen.",
        "Juega sobre todo de defensa, aunque en distintas etapas también ha actuado de medio y de delantero. En la temporada 2024-25 fue capitán de su equipo. Es tenaz en la marca y cada temporada mejora su salida de balón.",
        "Lo que más lo distingue es que, siendo de 2018, compite en su categoría y también en una superior. En cada club destaca lo suficiente para alternar la 2018 y la 2017; de hecho, esta última temporada fue convocado por la selección de Quintana Roo 2017."
      ],
      palmares: [
        { titulo: "Campeón · Liga Guillermo Cañedo", nota: "Temporada 2025-26" },
        { titulo: "Campeón · Copa ACO", nota: "Valladolid · 2026" },
        { titulo: "Subcampeón · Copa Celta", nota: "Torneo internacional del RC Celta y su Celta Academy · 2026" },
        { titulo: "Selección de Quintana Roo", nota: "Campeonato nacional en Playa del Carmen · 2026" },
        { titulo: "Copa Pioneros", nota: "Participación · 2026" }
      ],
      historial: [
        { temporada: "2025-26", torneo: "Liga Guillermo Cañedo", club: "Filial Venados N. Héroes", pos: "Defensa", dorsal: "131" },
        { temporada: "2025-26", torneo: "Liga Premier Infantil-Juvenil", club: "Corre Cancún Sub-9", pos: "Medio", dorsal: "103" },
        { temporada: "2024-25", torneo: "Liga Guillermo Cañedo", club: "Atlas Cancún Infantil Menor", pos: "Delantero", dorsal: "19", cap: true },
        { temporada: "2023-24", torneo: "Liga Guillermo Cañedo", club: "Atlas Cancún Infantil Inicial", pos: "Defensa", dorsal: "74" }
      ] },
    // Porteros
    { id: "jan-ferrer", nombre: "Jan Ferrer", dorsal: 1, pos: "Portero", grupo: "Porteros", cat: "Juvenil A",
      foto: P(6), pie: "Diestro", nac: "2007-02-18", lugar: "Cancún, Q. Roo", altura: "1,82 m", desde: "2016",
      cita: "Un portero tranquilo que ordena a la defensa y sale con el balón jugado.",
      bio: [
        "Jan llegó al club con nueve años y ha pasado por casi todas las categorías bajo palos. Destaca por el juego de pies y por la lectura de las salidas.",
        "Es el capitán del Juvenil A y una de las voces del vestuario. El club lo tiene como referente para los porteros más pequeños en la escuela de porteros."
      ], temp: { pj: 6, g: 0, a: 1 } },
    { id: "alex-prieto", nombre: "Àlex Prieto", dorsal: 13, pos: "Portero", grupo: "Porteros", cat: "Cadete A",
      foto: P(2), pie: "Zurdo", nac: "2009-09-30", lugar: "Playa del Carmen", altura: "1,76 m", desde: "2019",
      cita: "Reflejos rápidos y mucho carácter en el uno contra uno.",
      bio: [
        "Àlex compagina la portería con el trabajo específico de los viernes. Ha mejorado mucho el juego aéreo en el último año.",
        "Es de los que llega antes a entrenar y se queda a recoger el material. Ejemplo de compromiso para su categoría."
      ], temp: { pj: 5, g: 0, a: 0 } },
    // Defensas
    { id: "nil-fontana", nombre: "Nil Fontana", dorsal: 4, pos: "Central", grupo: "Defensas", cat: "Cadete A",
      foto: P(4), pie: "Diestro", nac: "2009-05-04", lugar: "Cancún, Q. Roo", altura: "1,80 m", desde: "2017",
      cita: "Fuerte en el duelo y con buena salida de balón desde atrás.",
      bio: [
        "Nil manda en la última línea del Cadete A. Gana casi todos los duelos aéreos y ha aprendido a defender el espacio, no solo al rival.",
        "El cuerpo técnico trabaja con él la orientación del cuerpo para iniciar el juego hacia adelante."
      ], temp: { pj: 4, g: 1, a: 0 } },
    { id: "aleix-roca", nombre: "Aleix Roca", dorsal: 2, pos: "Lateral", grupo: "Defensas", cat: "Infantil A",
      foto: P(5), pie: "Diestro", nac: "2011-01-22", lugar: "Cancún, Q. Roo", altura: "1,66 m", desde: "2018",
      cita: "Un lateral que no para de subir y bajar la banda los 60 minutos.",
      bio: [
        "Aleix aporta profundidad por la derecha del Infantil A. Su recorrido y su ida y vuelta son señas de identidad del equipo.",
        "Está puliendo la toma de decisiones en el último tercio: cuándo centrar y cuándo esperar."
      ], temp: { pj: 5, g: 0, a: 2 } },
    { id: "bruno-gil", nombre: "Bruno Gil", dorsal: 5, pos: "Central", grupo: "Defensas", cat: "Juvenil A",
      foto: P(3), pie: "Zurdo", nac: "2007-07-11", lugar: "Mérida", altura: "1,84 m", desde: "2020",
      cita: "Zurdo, alto y con una zancada larga para tapar espacios.",
      bio: [
        "Bruno se incorporó desde otro club de la zona y encajó rápido en el modelo del Juvenil A por su comodidad con el balón.",
        "Forma pareja de centrales con jugadores más agresivos: él aporta el equilibrio y la salida limpia."
      ], temp: { pj: 6, g: 0, a: 1 } },
    { id: "marc-terol", nombre: "Marc Terol", dorsal: 3, pos: "Lateral", grupo: "Defensas", cat: "Cadete B",
      foto: P(1), pie: "Zurdo", nac: "2010-03-19", lugar: "Cancún, Q. Roo", altura: "1,70 m", desde: "2019",
      cita: "Marca al hombre como nadie y no se le escapa un balón dividido.",
      bio: [
        "Marc es puro carácter en la izquierda del Cadete B. Defiende hacia adelante y contagia intensidad al resto.",
        "Trabaja la salida de balón para ser también una opción cuando el equipo tiene la pelota."
      ], temp: { pj: 5, g: 0, a: 0 } },
    // Centrocampistas
    { id: "iker-sanz", nombre: "Iker Sanz", dorsal: 8, pos: "Mediapunta", grupo: "Centrocampistas", cat: "Juvenil A",
      foto: P(2), pie: "Diestro", nac: "2007-11-02", lugar: "Cancún, Q. Roo", altura: "1,73 m", desde: "2016",
      cita: "Aparece entre líneas y siempre encuentra el pase que rompe.",
      bio: [
        "Iker es el cerebro del Juvenil A. Juega de cara, gira bien y tiene el último pase para los delanteros.",
        "Ha crecido en la parte física para poder sostener el nivel los 90 minutos y ayudar también sin balón."
      ], temp: { pj: 6, g: 2, a: 5 } },
    { id: "pau-miralles", nombre: "Pau Miralles", dorsal: 7, pos: "Interior", grupo: "Centrocampistas", cat: "Cadete A",
      foto: P(3), pie: "Diestro", nac: "2009-04-27", lugar: "Chetumal", altura: "1,71 m", desde: "2018",
      cita: "Llegada desde segunda línea y mucho gol para ser centrocampista.",
      bio: [
        "Pau es el interior que aparece en el área rival. Tiene timing para las llegadas y un buen disparo desde la frontal.",
        "El reto de esta temporada es equilibrar esas llegadas con el trabajo defensivo del mediocampo."
      ], temp: { pj: 5, g: 4, a: 2 } },
    { id: "guillem-prat", nombre: "Guillem Prat", dorsal: 6, pos: "Pivote", grupo: "Centrocampistas", cat: "Infantil A",
      foto: P(8), pie: "Diestro", nac: "2011-08-15", lugar: "Cancún, Q. Roo", altura: "1,64 m", desde: "2018",
      cita: "El ancla del equipo: recupera, orienta y da el primer pase.",
      bio: [
        "Guillem juega por delante de la defensa del Infantil A. Ve el peligro antes de que llegue y distribuye con criterio.",
        "Es un jugador poco vistoso pero imprescindible: cuando él está bien, el equipo está ordenado."
      ], temp: { pj: 5, g: 0, a: 1 } },
    { id: "ona-grau", nombre: "Ona Grau", dorsal: 10, pos: "Pivote", grupo: "Centrocampistas", cat: "Femenino Sub-16",
      foto: P(7), pie: "Diestra", nac: "2010-06-08", lugar: "Cancún, Q. Roo", altura: "1,68 m", desde: "2017",
      cita: "Marca el ritmo del equipo y no pierde un balón bajo presión.",
      bio: [
        "Ona es la capitana del femenino Sub-16 y la jugadora que ordena el juego desde el centro del campo.",
        "Su lectura del partido y su temple con balón la convierten en un referente para las categorías femeninas más jóvenes."
      ], temp: { pj: 4, g: 1, a: 3 } },
    // Delanteros
    { id: "marc-vidal", nombre: "Marc Vidal", dorsal: 10, pos: "Delantero", grupo: "Delanteros", cat: "Juvenil A",
      foto: P(1), pie: "Diestro", nac: "2007-03-12", lugar: "Cancún, Q. Roo", altura: "1,76 m", desde: "2016",
      cita: "Le gusta encarar, buscar el uno contra uno y no tiene miedo a fallar.",
      bio: [
        "Marc es el referente ofensivo del Juvenil A. Combina el desborde por fuera con la aparición dentro del área.",
        "Ha estado en el club desde prebenjamín. Trabaja la definición con la escuela de tecnificación una tarde a la semana."
      ], temp: { pj: 6, g: 5, a: 2 } },
    { id: "eric-sola", nombre: "Èric Solà", dorsal: 11, pos: "Extremo", grupo: "Delanteros", cat: "Cadete B",
      foto: P(7), pie: "Zurdo", nac: "2010-10-01", lugar: "Cancún, Q. Roo", altura: "1,69 m", desde: "2019",
      cita: "Velocidad pura por la banda y peligro cada vez que arranca.",
      bio: [
        "Èric es el extremo más rápido del Cadete B. En espacios abiertos es casi imparable y genera muchas faltas y córners.",
        "Está mejorando el último pase para que su velocidad se traduzca en más asistencias."
      ], temp: { pj: 5, g: 3, a: 1 } },
    { id: "hugo-leon", nombre: "Hugo León", dorsal: 9, pos: "Delantero", grupo: "Delanteros", cat: "Juvenil A",
      foto: P(4), pie: "Diestro", nac: "2008-01-25", lugar: "Cancún, Q. Roo", altura: "1,83 m", desde: "2021",
      cita: "Un '9' de área que la baja de espaldas y aguanta a los centrales.",
      bio: [
        "Hugo es el delantero de referencia del Juvenil A. Juega bien de espaldas, fija a los centrales y libera a los interiores.",
        "El club valora especialmente su generosidad: presiona el primero y celebra los goles del equipo como propios."
      ], temp: { pj: 6, g: 4, a: 3 } }
  ];

  // Índice de búsqueda (páginas + contenidos)
  const paginas = [
    { titulo: "Inscripciones 25/26", url: "inscripciones.html", tipo: "Página", texto: "cómo inscribirse plazas cuotas becas pruebas de acceso área de familias temporada" },
    { titulo: "Nuestras categorías", url: "categorias.html", tipo: "Página", texto: "escuela prebenjamín benjamín alevín infantil cadete juvenil femenino edades horarios" },
    { titulo: "Jugadores de la cantera", url: "jugadores.html", tipo: "Página", texto: "plantilla porteros defensas centrocampistas delanteros fichas jugadores jugadoras dorsal posición" },
    { titulo: "Metodología", url: "metodologia.html", tipo: "Página", texto: "modelo de juego valores plan formativo por edades tecnificación escuela de porteros" },
    { titulo: "El Club", url: "club.html", tipo: "Página", texto: "historia orígenes 2007 escudo valores junta directiva instalaciones campo municipal ciudad deportiva staff" },
    { titulo: "Calendario y resultados", url: "calendario.html", tipo: "Página", texto: "partidos jornada liga comarcal copa federación resultados convocatoria" },
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
