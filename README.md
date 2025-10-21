# SN Georgia - Creative Advertising Solutions

This is a modern, single-page web application for SN Georgia, showcasing their creative advertising projects and services. The site is built with a focus on performance, modern development practices, and engaging animations.

## Tech Stack

This project leverages a modern set of tools and technologies to deliver a fast, reliable, and maintainable web experience.

### Core Technologies

*   **[React 19](https://react.dev/)**: The core of our application, used for building a fast and interactive user interface with a component-based architecture.
*   **[Vite](https://vitejs.dev/)**: A next-generation frontend build tool that provides an extremely fast development server and an optimized build process.
*   **[TypeScript](https://www.typescriptlang.org/)**: A superset of JavaScript that adds static typing, improving code quality, developer experience, and long-term maintainability.
*   **[SWC (Speedy Web Compiler)](https://swc.rs/)**: Integrated via `@vitejs/plugin-react-swc` for lightning-fast code compilation and HMR (Hot Module Replacement) during development.

### Code Quality & Linting

*   **ESLint**: Used to find and fix problems in the JavaScript/TypeScript code, ensuring a consistent code style.
*   **typescript-eslint**: Enables ESLint to understand TypeScript syntax and provides type-aware linting rules for catching more subtle bugs.
*   **React-specific ESLint Plugins**:
    *   `eslint-plugin-react-hooks`: Enforces the Rules of Hooks.
    *   `eslint-plugin-react-refresh`: Ensures components are structured correctly for Vite's Fast Refresh feature.

### Styling & Animations

*   **Scoped CSS**: Styles are co-located with their components (e.g., `ProjectsSection.css` for `ProjectsSection.tsx`) to prevent global scope conflicts.
*   **CSS Custom Properties**: Used extensively for theming and maintaining a consistent color palette across the application.
*   **Advanced CSS**: The project utilizes modern CSS features like `clip-path` for creating complex, non-rectangular shapes and pure CSS `@keyframes` for performant animations.

### Key Features

*   **Component-Based Architecture**: The application is broken down into small, reusable components.
*   **Custom Hooks**: Logic is abstracted into custom hooks like `useProjectSlider` for reusability and cleaner component code.
*   **Responsive Design**: A mobile-first approach ensures a great user experience on all devices, with media queries used to adapt the layout for larger screens.
*   **Interactive UI**: Features a touch-friendly, infinite-looping image slider with smooth transitions and a swipe hint for mobile users.
