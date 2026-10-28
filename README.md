# Roa Soft — New Website (Phase 3 Core Architecture)

Production-grade website for **Roa Soft**, a software engineering and digital transformation company.

## Technology Stack

- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Router:** Vue Router 4 (HTML5 History Mode with localized dynamic segments)
- **Language:** TypeScript (Strict mode)
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Visual Engine:** Shaders (`shaders/vue` WebGPU pipeline) + Instant Zero-CPU CSS Mesh Fallback
- **Iconography:** Lucide Icons (`lucide-vue-next`)
- **State & Utilities:** `@vueuse/core`

## 5 Core Application Pages

1. **Home (`/:lang`)**:
   - Floating header with responsive navigation & mobile drawer.
   - Bilingual hero section with lazy-loaded WebGPU shader and CSS fallback.
   - Services summary cards linking directly to `/services`.
   - Bento box capability matrix.
   - Featured projects preview linking to `/projects`.
   - 4-step engineering delivery methodology.
   - Consultation intake banner and shared footer.

2. **Services (`/:lang/services`)**:
   - Centralized editable catalogue (`src/data/services.ts`).
   - 5 core software disciplines: Custom Web Applications, Mobile Engineering, UI/UX & Design Systems, Cloud Infrastructure & Distributed Systems, and Technical Consulting & Code Audits.
   - For every service: Challenge addressed, value delivered, capabilities checklist, tech stack, and direct consultation CTA (`?service=:id`).

3. **Projects (`/:lang/projects`)**:
   - Filterable architecture portfolio (`all`, `web`, `mobile`, `cloud`, `systems`).
   - Centralized data (`src/data/projects.ts`) with stable category keys independent of active language.
   - Explicit labeling: "Architecture Showcase / Concept Case Study" to maintain complete transparency without fabricating production clients.
   - Accessible modal inspector for detailed engineering challenges, architectures, and benchmarks.

4. **About (`/:lang/about`)**:
   - Honest company profile, software craftsmanship ethos, and engineering culture.
   - 4 Engineering Principles: Strict Type Safety, Measured Performance Zero Bloat, Bilingual Symmetry & Accessibility, and Maintainable Modular Architectures.
   - 4-step Delivery Methodology with key deliverables.
   - Technology Radar categorized by domain.

5. **Contact (`/:lang/contact`)**:
   - Consultation intake form: Full Name, Email, Service of Interest, Project Overview, and optional Estimated Scope.
   - Accessible client-side validation with real-time error states, `aria-invalid`, and `aria-describedby`.
   - Explicit Integration Boundary disclaimer explaining that client validation is active, submissions persist in local session demonstration storage, and direct inquiries can be sent to `contact@roasoft.com`.

## Routing & Localization Architecture

- **Path Schema:** Localized deep links under `/:lang(en|ar)`:
  - `/en`, `/en/services`, `/en/projects`, `/en/about`, `/en/contact`
  - `/ar`, `/ar/services`, `/ar/projects`, `/ar/about`, `/ar/contact`
- **Root Redirect (`/`)**: Automatically routes to the user's saved preference in `localStorage.getItem('roa_locale')` or the browser's language (`navigator.language.startsWith('ar') ? '/ar' : '/en'`).
- **Language Switcher**: Toggling between Arabic and English updates document `lang` and `dir`, stores preference in `localStorage`, and preserves the active route subpath (e.g., `/en/projects` ⇄ `/ar/projects`).

## Web Server SPA Fallback Configuration

Because the application uses HTML5 History mode (`createWebHistory()`), the hosting web server must rewrite non-file routes to `/index.html`:

### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Netlify & Cloudflare Pages
Configured via `public/_redirects`:
```text
/* /index.html 200
```

### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Design System Tokens & Rules

- **Brand Blue:** `#1c66f6` (AA contrast on white: 4.91:1)
- **Brand Orange:** `#fe8312` (AAA contrast with dark slate text: 7.2:1)
  - *Strict Rule:* Never place white text on brand orange.
- **Arabic Typography:** Cairo font with line-height `1.65–1.70` and normal letter-spacing to preserve cursive ligatures.
- **English Typography:** Inter font with tall x-height and optical sizing.
- **Bi-Directional Support:** Native RTL (Arabic) and LTR (English) switching with CSS logical properties.
- **Accessibility:** WCAG 2.1 AA compliant focus states (`outline: 2px solid var(--border-focus); outline-offset: 3px`) and minimum 44×44px mobile touch targets.
- **Deferred Shaders Bundle:** Shaders chunk (2.66 MB / 730 kB gzip) is strictly deferred and excluded from module preload. The initial page bundle is ~83 kB gzip for the entire multilingual application.

## Development & Build Verification

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript verification
npm run type-check

# Build for production
npm run build

# Preview production build locally
npm run preview
```
