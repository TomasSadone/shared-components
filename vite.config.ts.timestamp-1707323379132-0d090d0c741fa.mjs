// vite.config.ts
import { defineConfig } from "file:///C:/Users/Asus/Desktop/Aigot/RC-Shared-Components-Frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Asus/Desktop/Aigot/RC-Shared-Components-Frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/Asus/Desktop/Aigot/RC-Shared-Components-Frontend/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/Asus/Desktop/Aigot/RC-Shared-Components-Frontend/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///C:/Users/Asus/Desktop/Aigot/RC-Shared-Components-Frontend/node_modules/glob/dist/esm/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Asus\\Desktop\\Aigot\\RC-Shared-Components-Frontend";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Asus/Desktop/Aigot/RC-Shared-Components-Frontend/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [react(), dts({ include: ["lib"], copyDtsFiles: true }), libInjectCss()],
  resolve: {
    alias: {
      components: "/src/components",
      utils: "/src/utils",
      types: "/src/types",
      styles: "/src/styles",
      constants: "/src/constants",
      hooks: "/src/hooks"
    }
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "react",
        "classnames",
        "libphonenumber-js",
        "react-auth-code-input",
        "react-hook-form",
        "react-router-dom",
        "react-dom",
        "react-toastify",
        "react/jsx-runtime"
      ],
      input: Object.fromEntries(
        glob.sync("lib/**/!(*.d).{ts,tsx}").map((file) => [
          relative("lib", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBc3VzXFxcXERlc2t0b3BcXFxcQWlnb3RcXFxcUkMtU2hhcmVkLUNvbXBvbmVudHMtRnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFzdXNcXFxcRGVza3RvcFxcXFxBaWdvdFxcXFxSQy1TaGFyZWQtQ29tcG9uZW50cy1Gcm9udGVuZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQXN1cy9EZXNrdG9wL0FpZ290L1JDLVNoYXJlZC1Db21wb25lbnRzLUZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSAndml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3MnO1xyXG5pbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBkdHMoeyBpbmNsdWRlOiBbJ2xpYiddLCBjb3B5RHRzRmlsZXM6IHRydWUgfSksIGxpYkluamVjdENzcygpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBjb21wb25lbnRzOiAnL3NyYy9jb21wb25lbnRzJyxcclxuICAgICAgdXRpbHM6ICcvc3JjL3V0aWxzJyxcclxuICAgICAgdHlwZXM6ICcvc3JjL3R5cGVzJyxcclxuICAgICAgc3R5bGVzOiAnL3NyYy9zdHlsZXMnLFxyXG4gICAgICBjb25zdGFudHM6ICcvc3JjL2NvbnN0YW50cycsXHJcbiAgICAgIGhvb2tzOiAnL3NyYy9ob29rcycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9tYWluLnRzJyksXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgJ3JlYWN0JyxcclxuICAgICAgICAnY2xhc3NuYW1lcycsXHJcbiAgICAgICAgJ2xpYnBob25lbnVtYmVyLWpzJyxcclxuICAgICAgICAncmVhY3QtYXV0aC1jb2RlLWlucHV0JyxcclxuICAgICAgICAncmVhY3QtaG9vay1mb3JtJyxcclxuICAgICAgICAncmVhY3Qtcm91dGVyLWRvbScsXHJcbiAgICAgICAgJ3JlYWN0LWRvbScsXHJcbiAgICAgICAgJ3JlYWN0LXRvYXN0aWZ5JyxcclxuICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnLFxyXG4gICAgICBdLFxyXG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIGdsb2JcclxuICAgICAgICAgIC5zeW5jKCdsaWIvKiovISgqLmQpLnt0cyx0c3h9JylcclxuICAgICAgICAgIC5tYXAoKGZpbGUpID0+IFtcclxuICAgICAgICAgICAgcmVsYXRpdmUoJ2xpYicsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxyXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgICBdKSxcclxuICAgICAgKSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLFNBQVMsb0JBQW9CO0FBQ3RZLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFlBQVk7QUFOckIsSUFBTSxtQ0FBbUM7QUFBNEwsSUFBTSwyQ0FBMkM7QUFRdFIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxjQUFjLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztBQUFBLEVBQ2hGLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUssd0JBQXdCLEVBQzdCLElBQUksQ0FBQyxTQUFTO0FBQUEsVUFDYixTQUFTLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQ2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
