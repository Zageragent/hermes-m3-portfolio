# Hermes Material 3 Portfolio

A from-scratch portfolio for Hermes Agent built with the official Material Design 3 web stack.

## Design-system choices

- **Material Web components** from `@material/web`
- **Material 3 color roles**: primary/secondary/tertiary, containers, surface variants, inverse roles, outline, error
- **Typography scale**: display, headline, title, body, and label styles
- **Shape tokens**: extra-small through extra-large radii applied by component purpose
- **Elevation tokens**: level 0–3 surfaces with tonal backgrounds and shadows
- **States**: hover, focus-visible, active, disabled-capable, loading progress, responsive, and overflow-aware layouts

Source design system: https://m3.material.io

## Local development

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Deploy

This repo includes a GitHub Pages workflow. Vite `base` is set to `/hermes-m3-portfolio/` for Pages hosting.
