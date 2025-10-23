# Precious Palm Royal Hotel — React Menu (converted)

This workspace contains a minimal React app (Vite) scaffold wrapped around the original static `index.html` markup so the existing site behavior is preserved while enabling React-based enhancements.

What I changed
- Kept your original markup, inline styles and scripts in `index.html` so the UI and preloader continue to behave exactly as before.
- Injected a React mount point (`<div id="react-root"></div>`) and a Vite module entry (`/src/main.jsx`).
- Added a minimal React app in `src/` (`main.jsx` and `App.jsx`) so you can progressively enhance the site with React components.

How to run locally (Windows PowerShell)

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

Notes
- The project uses Vite for fast dev iteration. The existing scripts and inline JS in `index.html` remain functional.
- Next steps (optional):
  - Migrate the inline scripts into React components or modules for better maintainability.
  - Convert the static menu markup into data-driven React components (map an array of categories/items to components).
  - Add TypeScript and tests if you want stronger typing and CI.
