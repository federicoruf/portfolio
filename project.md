# Portfolio personal — Notas de contexto

Stack: React + TypeScript + CSS Modules, Vite.
Deploy: Firebase Hosting (migrado desde Netlify) + GitHub Actions
(deploy automático en push a `main`, preview automático en cada PR).

## Estética
Plano técnico/arquitectónico: secciones como "láminas" numeradas,
cajetín fijo que se actualiza con el scroll, regla lateral de
navegación, esquinas de tarjeta que se dibujan al entrar en vista.

## Secciones
| Lámina | Sección              | Contenido |
|--------|----------------------|-----------|
| 00     | Portada (Hero)       | Nombre, rol, disponibilidad |
| 01     | Memoria (About)      | Bio — foco: conoce el stack completo, pero el frontend es su terreno favorito |
| 02     | Proyectos personales | GPX Mountain Guide (Next.js/React/geolocalización) + Gestor de Competencias de Natación (React/TS/RFID) |
| 03     | Proceso (Approach)   | Boceto → Estructura → Detalle → Entrega |
| 04     | Contacto             | Email con botón de copiar (icono) + mailto, LinkedIn, GitHub |

## Piezas técnicas clave
- `i18n/`: LanguageProvider + diccionario tipado ES/EN
- `hooks/useInView.ts`: revela cada sección al hacer scroll (una vez)
- `hooks/useActiveSection.ts`: alimenta cajetín y regla lateral
- `hooks/useCopyToClipboard.ts`: botón de copiar email
- `styles/shared.module.css`: clases reutilizables vía `composes`
  (reveal, delay1-4, card)

## Bugs resueltos
- Los links no eran clicables: las esquinas decorativas de `.card`
  (::before/::after) crecían al 100% y tapaban el contenido.
  Fix: `pointer-events: none` en esos pseudo-elementos.
- Editar `shared.module.css` en caliente rompe el HMR de Vite con
  `composes` cross-file → reiniciar `npm run dev` (no afecta build
  de producción).

## Pendiente
- Premios ganados