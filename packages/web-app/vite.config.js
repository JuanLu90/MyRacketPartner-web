import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false, // Asegura que las exportaciones sean como componentes
    }),
  ],
  resolve: {
    alias: {
      common: resolve(__dirname, "../common"), // Alias para la carpeta commons
      components: resolve(__dirname, "src/components"), // Alias para componentes
      hooks: resolve(__dirname, "src/hooks"), // Alias para hooks
      i18n: resolve(__dirname, "src/i18n"), // Alias para i18n
      images: resolve(__dirname, "src/images"), // Alias para imágenes
      pages: resolve(__dirname, "src/pages"), // Alias para páginas
      resolvers: resolve(__dirname, "src/resolvers"), // Alias para resolvers
      routes: resolve(__dirname, "src/routes"), // Alias para rutas
      services: resolve(__dirname, "src/services"), // Alias para servicios
      store: resolve(__dirname, "src/store"), // Alias para store
      utils: resolve(__dirname, "src/utils"), // Alias para utils
    },
  },
});
