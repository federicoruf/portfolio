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
    es: "Trabajo con el ecosistema JavaScript/TypeScript — React, Node.js, Express — pero el material de verdad es la arquitectura: APIs REST, microservicios y modelado de datos antes de escribir la primera línea de UI.",
    en: "I work across the JavaScript/TypeScript ecosystem — React, Node.js, Express — but the real material is architecture: REST APIs, microservices, and data modeling before the first line of UI gets written.",
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
    es: "Lámina 02 — Proyectos seleccionados",
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
  'work.7.title': { es: 'Trova Trip —  USA Viajes', en: 'Trova Trip — USA Travel' },
  'work.7.desc': {
    es: "Desarrollo full stack de nuevas funcionalidades. Migración de base de datos hacia MongoDB Atlas. Participación en análisis funcional y redacción de historias de usuario. Mentoring e integración de nuevos integrantes al equipo. Trabajo bajo metodologías Scrum y Kanban.",
    en: "Full stack development of new features. Migration of database to MongoDB Atlas. Participation in functional analysis and writing user stories. Mentoring and integration of new team members. Work under Scrum and Kanban methodologies.",
  },
  'work.8.title': { es: 'Poyectos Multidominio', en: 'Multi-domain projects' },	
  'work.8.desc': {
    es: "Participación en múltiples dominios (seguros, finanzas, realidad aumentada, gaming). Trabajo directo con equipos distribuidos (EE. UU., Colombia) aplicando metodologías Scrum/Kanban. Estimación de esfuerzos para preventa. Responsabilidades principales: Desarrollo full stack con React, Node.js y Java. Diseño e integración de APIs. Trabajo con bases de datos SQL y NoSQL. Participación en estimaciones y procesos de preventa. Colaboración en arquitectura y toma de decisiones técnicas.",
    en: "Participation in multiple domains (insurance, finance, augmented reality, gaming). Direct work with distributed teams (U.S., Colombia) applying Scrum/Kanban methodologies. Estimation of effort for pre-sale. Main responsibilities: Full stack development with React, Node.js and Java. API design and integration. Work with SQL and NoSQL databases. Participation in estimation and pre-sale processes. Collaboration in architecture and technical decision-making.",
  },
  'work.9.title': { es: 'Hospital Español de La Plata', en: 'Hospital Español de La Plata' },
  'work.9.desc': {
    es: "Desarrollo e implementación de aplicaciones utilizando Java Spring y AngularJS. Gestión de bases de datos Sybase. Despliegue y mantenimiento de aplicaciones en servidores Linux. Stack: Java Spring, AngularJS, JBoss, Sybase, Linux.",
    en: "Development and implementation of applications using Java Spring and AngularJS. Management of Sybase databases. Deployment and maintenance of applications on Linux servers. Stack: Java Spring, AngularJS, JBoss, Sybase, Linux.",
  },

  "approach.eyebrow": { es: "Lámina 03 — Proceso", en: "Sheet 03 — Process" },
  "approach.title": {
    es: "De análisis a producción, en cuatro fases.",
    en: "From analysis to production, in four phases.",
  },
  "approach.1.num": { es: "FASE 1", en: "PHASE 1" },
  "approach.1.title": { es: "Análisis", en: "Analysis" },
  "approach.1.desc": {
    es: "Análisis funcional y técnico antes de escribir código. Definir el problema real, los requisitos y la viabilidad con el equipo y el cliente.",
    en: "Functional and technical analysis before writing code. Define the real problem, requirements, and feasibility with the team and client.",
  },
  "approach.2.num": { es: "FASE 2", en: "PHASE 2" },
  "approach.2.title": { es: "Arquitectura", en: "Architecture" },
  "approach.2.desc": {
    es: "Diseño de APIs REST, microservicios y modelado de datos. Las decisiones que cuestan caro cambiar se toman aquí, no en producción.",
    en: "REST API design, microservices, and data modeling. The expensive-to-change decisions get made here, not in production.",
  },
  "approach.3.num": { es: "FASE 3", en: "PHASE 3" },
  "approach.3.title": { es: "Construcción", en: "Build" },
  "approach.3.desc": {
    es: "Código limpio, tests automatizados y code reviews. Lo que separa un prototipo de software mantenible a largo plazo.",
    en: "Clean code, automated tests, and code reviews. What separates a prototype from software that holds up over time.",
  },
  "approach.4.num": { es: "FASE 4", en: "PHASE 4" },
  "approach.4.title": { es: "Entrega", en: "Delivery" },
  "approach.4.desc": {
    es: "Documentación técnica, monitorización y mantenimiento evolutivo. El equipo puede seguir sin depender de una sola persona.",
    en: "Technical documentation, monitoring, and evolutionary maintenance. The team can carry on without depending on one person.",
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
} as const;

export type TranslationKey = keyof typeof translations;
