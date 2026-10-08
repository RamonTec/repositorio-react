# Elias Estrabao — Portfolio

Portfolio personal construido con **React + TypeScript + Vite**, **Tailwind CSS** y **Framer Motion**.

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # type-check + build de producción en /dist
```

> El formulario de contacto usa una función serverless (`api/contact.ts`). En `npm run dev` no existe `/api`;
> para probarlo localmente usa `npx vercel dev`.

## Editar contenido

Todo el contenido está en dos archivos:

- `src/content/data.ts` — perfil, proyectos, experiencia, stack y formación (textos bilingües `{ es, en }`).
  - `profile.available` muestra u oculta el badge "Abierto a nuevas oportunidades".
  - `featured: true` en un proyecto lo muestra en grande en la sección principal.
- `src/content/ui.ts` — textos de la interfaz en español e inglés.

El CV se sirve según el idioma: `public/cv-elias-estrabao-es.pdf` y `public/cv-elias-estrabao-en.pdf`.
Las métricas de la sección de resultados están en `impact` dentro de `src/content/data.ts`.

## Variables de entorno (Vercel)

| Variable           | Descripción                                        |
| ------------------ | -------------------------------------------------- |
| `RESEND_API_KEY`   | API key de [Resend](https://resend.com) (solo servidor) |
| `CONTACT_TO_EMAIL` | Correo que recibe los mensajes (opcional)          |
