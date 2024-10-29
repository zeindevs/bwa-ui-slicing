import { defineConfig } from "vite";
import path from "path"

export default defineConfig({
  build:{
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "./index.html"),
        zimoney: path.resolve(__dirname, "./pages/zimoney/index.html"),
        kreatop: path.resolve(__dirname, "./pages/kreatop/index.html"),
      }
    }
  }
});
