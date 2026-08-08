# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
is a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.




I inspected your package.json and vite.config.ts and put together concise instructions for running the project and the important configuration details below.

How to run (quick)

Prerequisites: Node.js 18+ (or Bun), Git.
Install dependencies:
npm: npm install
yarn: yarn
bun: bun install
Start dev server:
npm run dev
Build production:
npm run build
Build for development mode:
npm run build:dev
Preview production build locally:
npm run preview
Lint & format:
npm run lint
npm run format
Commands (copy/paste)

bash
# install (npm)
npm install

# start dev server
npm run dev

# build production bundle
npm run build

# preview production build locally
npm run preview

# lint & format
npm run lint
npm run format
Notes for cross-platform env vars

To run dev on a specific port (Unix/macOS):
PORT=3000 npm run dev
Windows CMD:
set PORT=3000 && npm run dev
PowerShell:
$env:PORT=3000; npm run dev
Or pass Vite CLI flags directly if needed: npx vite --port 3000 (but prefer the package scripts).
Key configuration details (what I found)

package.json scripts
"dev": "vite dev" — starts the local dev server with HMR.
"build": "vite build" — runs Vite build (the repo uses the preset which integrates Nitro for server build).
"build:dev": "vite build --mode development"
"preview": "vite preview" — serves the production build for local testing.
Vite preset
vite.config.ts imports defineConfig from @lovable.dev/vite-tanstack-config.
This preset already supplies many plugins and defaults (tanstackStart, viteReact, tailwindcss, tsconfig paths, Nitro build support, etc.). Do NOT re-add those plugins manually or you may encounter duplicate-plugin errors.
Server entry override
vite.config.ts sets tanstackStart.server.entry = "server" — that means the preset will look for your server entry at src/server.ts (or src/server.[ext]). If you rely on SSR/SSR error wrapper, check src/server.ts.
Environment variables
Client-side env vars must be prefixed with VITE_ to be accessible in browser code (import.meta.env.VITE_FOO).
For server/Nitro runtime vars, set regular environment variables on your host/CI/deployment environment.
Example .env:
env
VITE_API_URL=http://localhost:3000/api
VITE_SOME_FLAG=true
TypeScript
tsconfig.json is present. Use your editor to pick up it; vite-tsconfig-paths is included in dependencies to respect path aliases.
Tailwind
Tailwind is included via the preset — update tailwind.config.js or postcss config only if you need customizations.
Routing
File-based routing is used under src/routes/ (see src/routes/README.md). Root app shell is src/routes/__root.tsx.
Build/deployment notes
The preset includes Nitro for server builds. The production build output will use Nitro’s target configuration (preset default). Review the preset docs or vite.config.ts if you must change the runtime target or Nitro adapter.
Ports/host
The preset also wires sandbox detection and host/port behavior. If the dev server fails to bind, set HOST and PORT env vars (or configure via vite config).
Examples: Add a custom Vite server option

If you need to override the dev server port or host while still using the preset, extend defineConfig like this:
ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      port: 3000,
      host: true,
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
