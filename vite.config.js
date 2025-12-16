import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "AniLibrary",
      formats: ["es", "umd"],
      fileName: "ani-library"
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        }
      }
    }
  }
})
