import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/*
VERSION SI USAR GITUB ACTIONS, PARA DESPLEGAR DESDE MI PROPIA TERMINAL
*/

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/deploy_vitest-gh-pages', /* ACTIVAR ESTA LINEA, solo cuando `pnpm run build` y luego `pnpm run deploy` */
  plugins: [react()],
});
