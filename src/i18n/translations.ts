export type Lang = "es" | "en";

export const translations = {
  "tb.sheet": { es: "LÁMINA", en: "SHEET" },
  "tb.section": { es: "SECCIÓN", en: "SECTION" },
  "tb.scale": { es: "ESCALA", en: "SCALE" },

  "hero.mark": {
    es: "PLANO-2026 · PORTFOLIO PERSONAL",
    en: "BLUEPRINT-2026 · PERSONAL PORTFOLIO",
  },
  "hero.role": {
    es: "Desarrollador full stack senior. Construyo aplicaciones web con la misma precisión con la que se levanta un plano — desde la API hasta la interfaz.",
    en: "Senior full stack developer. I build web applications with the same precision it takes to draft a blueprint — from API to interface.",
  },
  "hero.base.label": { es: "Base", en: "Stack" },
  "hero.base.value": {
    es: "React · Node.js · Next.js",
    en: "React · Node.js · Next.js",
  },
  "hero.loc.label": { es: "Ubicación", en: "Location" },
  "hero.loc.value": { es: "Roquetas de Mar, ES", en: "Roquetas de Mar, Spain" },
  "hero.avail.label": { es: "Disponibilidad", en: "Availability" },
  "hero.avail.value": { es: "Disponible", en: "Available" },
  "hero.scroll": { es: "DESPLAZAR", en: "SCROLL" },

  "about.eyebrow": { es: "Lámina 01 — Memoria", en: "Sheet 01 — About" },
  "about.p1": {
    es: "Más de diez años construyendo y modernizando aplicaciones web para clientes internacionales en EE. UU. y Europa. Trato cada sistema como un plano: medidas claras, tolerancias definidas y una razón detrás de cada decisión técnica.",
    en: "Over ten years building and modernizing web applications for international clients across the U.S. and Europe. I treat every system like a blueprint: clear measurements, defined tolerances, and a reason behind every technical decision.",
  },
  "about.p2": {
    es: "Conozco bien el stack completo — Node.js, Next.js, Express, APIs REST, microservicios, modelado de datos —, pero mi terreno favorito sigue siendo el frontend: ahí es donde todo ese trabajo se convierte en algo tangible.",
    en: "I know the full stack — Node.js, Next.js, Express, REST APIs, microservices, data modeling —, but my favorite part of the job is the frontend: where all the hard work gets turned into something tangible.",
  },
  "about.spec.stack": { es: "Stack", en: "Stack" },
  "about.spec.stack.value": {
    es: "React / Node.js / Next.js",
    en: "React / Node.js / Next.js",
  },
  "about.spec.exp": { es: "Experiencia", en: "Experience" },
  "about.spec.exp.value": { es: "10+ años", en: "10+ years" },
  "about.spec.focus": { es: "Foco", en: "Focus" },
  "about.spec.focus.value": {
    es: "Frontend y Full stack",
    en: "Frontend and Full stack",
  },
  "about.spec.mode": { es: "Modalidad", en: "Work mode" },
  "about.spec.mode.value": { es: "Remoto / Híbrido", en: "Remote / Hybrid" },

  "work.eyebrow": {
    es: "Lámina 02 —  Proyectos seleccionados",
    en: "Sheet 02 — Selected work",
  },
  "work.1.title": {
    es: "Embat — Plataforma financiera",
    en: "Embat — Financial platform",
  },
  "work.1.desc": {
    es: "Microservicios en Node.js para procesamiento de extractos bancarios e informes financieros. Nuevas funcionalidades en React reutilizando el design system interno.",
    en: "Node.js microservices for bank statement processing and financial reporting. New React features built on top of the internal design system.",
  },
  "work.2.title": {
    es: "El Corte Inglés — Modernización retail",
    en: "El Corte Inglés — Retail modernization",
  },
  "work.2.desc": {
    es: "Migración de servicios críticos a una nueva arquitectura: middleware, endpoints REST documentados con OpenAPI y componentes React fuera del ecosistema Power Apps.",
    en: "Migration of critical services to a new architecture: middleware, REST endpoints documented with OpenAPI, and React components outside the Power Apps ecosystem.",
  },
  "work.3.title": {
    es: "Microsoft Power Apps — Integración de componentes React",
    en: "Microsoft Power Apps — React component integration",
  },
  "work.3.desc": {
    es: "Desarrollo de componentes React personalizados para integraciones fuera del ecosistema nativo Microsoft Power Apps.",
    en: "Development of custom React components for integrations outside the native Microsoft Power Apps ecosystem.",
  },
  "work.4.title": {
    es: "Proagrica — Enterprise agrícola",
    en: "Proagrica — Enterprise agriculture",
  },
  "work.4.desc": {
    es: "Desarrollo e integración de módulos web en entorno enterprise para clientes en EE. UU. Testing automatizado con Jest y React testing library, componentes en Storybook y demos técnicas para clientes.",
    en: "Development and integration of web modules in an enterprise environment for U.S. clients. Automated testing with Jest and React testing library, Storybook components, and technical client demos.",
  },
  "work.5.title": {
    es: "Marklogic —  USA Procesamiento de dato",
    en: "Marklogic — USA data processing",
  },
  "work.5.desc": {
    es: "Participación en refactorización de interfaz de usuario. Migración de componentes desde Ant Design hacia Material UI. Optimización e integración de librerías de terceros.",
    en: "Participation in the refactoring of the user interface. Migration of components from Ant Design to Material UI. Optimization and integration of third-party libraries.",
  },
  "work.6.title": {
    es: "Cysurance —  USA Seguros",
    en: "Cysurance — USA Insurance",
  },
  "work.6.desc": {
    es: "Diseño inicial del proyecto y participación en decisiones clave del stack tecnológico. Desarrollo frontend desde cero. Presentaciones técnicas y funcionales en inglés para el cliente. Dirección y participación en revisiones de código.",
    en: "Initial project design and participation in key technological stack decisions. Frontend development from scratch. Technical and functional presentations in English for the client. Code review direction and participation.",
  },
  "work.7.title": {
    es: "Trova Trip —  USA Viajes",
    en: "Trova Trip — USA Travel",
  },
  "work.7.desc": {
    es: "Desarrollo full stack de nuevas funcionalidades. Migración de base de datos hacia MongoDB Atlas. Participación en análisis funcional y redacción de historias de usuario. Mentoring e integración de nuevos integrantes al equipo. Trabajo bajo metodologías Scrum y Kanban.",
    en: "Full stack development of new features. Migration of database to MongoDB Atlas. Participation in functional analysis and writing user stories. Mentoring and integration of new team members. Work under Scrum and Kanban methodologies.",
  },
  "work.8.title": { es: "Poyectos Multidominio", en: "Multi-domain projects" },
  "work.8.desc": {
    es: "Participación en múltiples dominios (seguros, finanzas, realidad aumentada, gaming). Trabajo directo con equipos distribuidos (EE. UU., Colombia) aplicando metodologías Scrum/Kanban. Estimación de esfuerzos para preventa. Responsabilidades principales: Desarrollo full stack con React, Node.js y Java. Diseño e integración de APIs. Trabajo con bases de datos SQL y NoSQL. Participación en estimaciones y procesos de preventa. Colaboración en arquitectura y toma de decisiones técnicas.",
    en: "Participation in multiple domains (insurance, finance, augmented reality, gaming). Direct work with distributed teams (U.S., Colombia) applying Scrum/Kanban methodologies. Estimation of effort for pre-sale. Main responsibilities: Full stack development with React, Node.js and Java. API design and integration. Work with SQL and NoSQL databases. Participation in estimation and pre-sale processes. Collaboration in architecture and technical decision-making.",
  },
  "work.9.title": {
    es: "Hospital Español de La Plata",
    en: "Hospital Español de La Plata",
  },
  "work.9.desc": {
    es: "Desarrollo e implementación de aplicaciones utilizando Java Spring y AngularJS. Gestión de bases de datos Sybase. Despliegue y mantenimiento de aplicaciones en servidores Linux.",
    en: "Development and implementation of applications using Java Spring and AngularJS. Management of Sybase databases. Deployment and maintenance of applications on Linux servers.",
  },

  "personalProjects.eyebrow": {
    es: "Lámina 03 — Proyectos Personales",
    en: "Sheet 03 — Personal Projects",
  },
  "personalProjects.1.title": {
    es: "GPX Mountain Guide",
    en: "GPX Mountain Guide",
  },
  "personalProjects.1.desc": {
    es: "Generador y visor de rutas de MTB con seguimiento en tiempo real: cada ciclista comparte su posición durante el recorrido, así el grupo entero sabe dónde está cada uno sin depender de walkies ni paradas para reagruparse.",
    en: "MTB route generator and viewer with real-time tracking: each rider shares their position during the ride, so the whole group knows where everyone is without walkies or stopping to regroup.",
  },
  "personalProjects.1.link": { es: "Ver proyecto", en: "View project" },
  "personalProjects.2.title": {
    es: "Gestor de Competencias de Natación",
    en: "Swim Competition Manager",
  },
  "personalProjects.2.desc": {
    es: "Sistema de cronometraje por RFID: cada competidor lleva un tag único que, al pasar por meta, es leído automáticamente para registrar su tiempo de llegada — sin planillas ni cronómetros manuales.",
    en: "RFID-based timing system: each competitor wears a unique tag that gets read automatically at the finish line to log their arrival time — no spreadsheets or manual stopwatches.",
  },

  "contact.eyebrow": { es: "Lámina 04 — Contacto", en: "Sheet 04 — Contact" },
  "contact.title": {
    es: "¿Construimos algo con medidas?",
    en: "Let's build something to scale.",
  },
  "contact.email": {
    es: "federicorufrancos.lic@gmail.com",
    en: "federicorufrancos.lic@gmail.com",
  },
  "contact.linkedin": { es: "LinkedIn", en: "LinkedIn" },
  "contact.github": { es: "GitHub", en: "GitHub" },
  "contact.copy": { es: "Copiar email", en: "Copy email" },
  "contact.copied": { es: "¡Copiado!", en: "Copied!" },
} as const;

export type TranslationKey = keyof typeof translations;
