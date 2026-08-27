# Portfolio — Marta Otero

Prototipo de portfolio personal en React + TypeScript + CSS Modules,
con estética de plano técnico y scroll-reveal.

## Arrancar en local

```bash
npm install
npm run dev
```

## Estructura

- `src/components/` — un componente por sección (`Hero`, `About`, `Work`,
  `Approach`, `Contact`) más los elementos fijos (`TitleBlock`, `RulerNav`,
  `LanguageToggle`).
- `src/hooks/useInView.ts` — detecta cuándo una sección entra en el
  viewport (revelado en scroll).
- `src/hooks/useActiveSection.ts` — determina qué sección está activa,
  para el bloque de título y la regla de navegación.
- `src/i18n/` — contexto de idioma (`LanguageProvider`) y diccionario de
  traducciones ES/EN.
- `src/config/sections.ts` — fuente única de verdad para ids, número de
  lámina y nombres de sección.
- `src/styles/shared.module.css` — clases reutilizables (`reveal`, los
  retardos `delay1..4` y las esquinas dibujadas de `card`), compuestas
  desde cada módulo de componente con `composes: ... from`.

## Contenido de ejemplo

Los textos (nombre, proyectos, bio) son de relleno — sustitúyelos en
`src/i18n/translations.ts` por tu contenido real. Todo el texto visible
pasa por la función `t()`, así que no debería quedar nada hardcodeado
fuera de ese fichero.
