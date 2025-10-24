# SN Georgia - Creative Advertising Solutions

This repository contains the front-end single-page application for SN Georgia — an advertising and creative production company. The site showcases projects, services, media, and contact information in a modern, animated, and responsive interface.

Below you will find two language sections (English and Russian). Each section contains a project overview, a detailed list of technologies used in the project with explanations, setup and run instructions, project structure, and notes about SCSS conversion present in this repo.

---

## English — Project Overview & Technologies

### Project summary

SN Georgia SPA is a fast, component-based website built with modern frontend tooling. It emphasizes performance (via Vite + SWC), maintainability (TypeScript + ESLint), and polished visuals (animations, video backgrounds, and responsive layout). The UI is organized into reusable React components and sections (header, navigation, projects, clients, contact, footer, etc.).

### Technologies used (detailed)

- React 19 — The UI framework powering the application. React's component model is used to structure pages into small, reusable pieces (JSX/TSX components).
- Vite — Development server and build tool. Vite provides an extremely fast dev server with HMR and an optimized production build pipeline.
- TypeScript — Adds static typing on top of JavaScript, improving DX (developer experience) and catching many errors at compile time.
- @vitejs/plugin-react-swc — SWC-based transform plugin used by Vite for very fast JSX/TSX compilation and refresh during development.
- Sass (Dart Sass) — The project was migrated from plain CSS to SCSS partials (see `src/styles/`). SCSS enables variables, mixins, nesting, and partial imports for better organization.
- ESLint + @typescript-eslint — Linting and code-quality tooling. Plugins like `eslint-plugin-react-hooks` are included to enforce React best-practices.
- Node.js & npm — Standard runtime and package manager used to install dependencies and run scripts (see `package.json`).
- Netlify (deploy) — The repo includes `netlify.toml` indicating deployment configuration for Netlify. The app is suitable for static site hosting with single-page fallback routing.

Other notable front-end techniques in the code:

- CSS Custom Properties (variables) used for theming and palette management.
- Video background handling with optimized source loading (`assets/media/video/`).
- Responsive design with fluid units (clamp, vw, etc.) and media queries.
- CSS animation techniques (transforms, transitions, keyframes) for high-performance animations.

### What you will find in this repo (important files)

- `package.json` — project scripts and dependencies.
- `vite.config.ts` — Vite configuration.
- `src/` — main source folder with React components and assets.
- `src/styles/` — SCSS entry and partials (variables, mixins, component partials).
- `src/components/` — React components grouped by feature.
- `netlify.toml` — Netlify deployment configuration.


5. Preview the production build locally

```powershell
npm run preview
```

Notes:

Styles: SCSS partials are located in `src/styles/`. The main entry is `src/styles/main.scss`, which imports component partials (for example, `src/styles/components/_navigation.scss`).

---

## Русский — Описание проекта и технологий

### Кратко о проекте

Это одностраничное приложение (SPA) для компании SN Georgia, демонстрирующее проекты, услуги и контактную информацию. В проекте используется современный стек для быстрой разработки, удобной поддержки и качественного отображения анимаций и медиа.

### Используемые технологии (подробно)

- React 19 — библиотека для создания пользовательского интерфейса; приложения состоят из компонентов (JSX/TSX).
- Vite — инструмент для разработки и сборки; обеспечивает очень быстрый dev-сервер с HMR и оптимизированную сборку для продакшена.
- TypeScript — добавляет статическую типизацию поверх JavaScript, повышая надежность кода и удобство разработки.
- @vitejs/plugin-react-swc — плагин для Vite, использующий компилятор SWC для быстрой трансформации JSX/TSX и быстрой перезагрузки компонентов.
- Sass (Dart Sass) — препроцессор CSS; проект переведен на SCSS (см. `src/styles/`) для использования переменных, миксинов и вложенности.
- ESLint + @typescript-eslint — средства для контроля качества кода и единообразия стиля. Подключены плагины для корректной работы React hooks.
- Node.js и npm — среда выполнения и менеджер пакетов для установки зависимостей и запуска сценариев (скриптов).
- Netlify — в репозитории есть `netlify.toml` для деплоя на Netlify; сайт подготовлен как статический SPA.

Дополнительные приёмы и приоритеты в кодовой базе:

- CSS-переменные используются для единой цветовой схемы.
- Фоновое видео и оптимизация медиа хранятся в `assets/media/`.
- Отзывчивый дизайн через `clamp`, `vw` и медиа-запросы.
- Производительные CSS-анимации с использованием transform/transition/keyframes.

### Что важно знать в репозитории

- `package.json` — скрипты и зависимости.
- `vite.config.ts` — конфигурация сборщика.
- `src/` — исходники приложения и компоненты.
- `src/styles/` — точка входа SCSS и частичные файлы стилей.
- `src/components/` — компоненты React.
- `netlify.toml` — конфигурация для Netlify.



### Примечания по SCSS

В проект добавлена структура для SCSS: `src/styles/` содержит `_variables.scss`, `_mixins.scss`, и папки для частичных стилей компонентов/секций. Это упрощает повторное использование переменных и миксинов и улучшает читаемость стилей.

---

## Project structure (short tree)

```
src/
    components/         # React components (JSX/TSX)
    assets/             # Images, icons, video, fonts
    styles/             # SCSS entry point + partials
        _variables.scss
        _mixins.scss
        main.scss
        components/_*.scss
        sections/_*.scss
    App.tsx
    main.tsx
vite.config.ts
package.json
netlify.toml
```

## Scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — build optimized production bundle
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the repository

## Contributing

## License

This repository does not include a `LICENSE` file.
