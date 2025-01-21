import {fileURLToPath, URL} from "node:url"
import {dirname, resolve} from "node:path"
import {defineConfig} from "vite"
import inject from '@rollup/plugin-inject';

export default defineConfig({
    root: resolve(dirname(fileURLToPath(import.meta.url)), "src"),
    publicDir: resolve(dirname(fileURLToPath(import.meta.url)), "public"),
    build: {
        outDir: resolve(dirname(fileURLToPath(import.meta.url)), "dist"),
        emptyOutDir: true
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
        hot: true
    },
    plugins: [
        inject({
            jQuery: 'jquery',
        })
    ],
    define: {
        "process.env": {}
    },
    resolve: {
        alias: {
            "~bootstrap": resolve(dirname(fileURLToPath(import.meta.url)), "node_modules/bootstrap"),
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
        extensions: [
            ".js",
            ".json",
            ".jsx",
            ".mjs",
            ".ts",
            ".tsx",
            ".vue",
        ]
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    "import",
                    "mixed-decls",
                    "color-functions",
                    "global-builtin"
                ]
            }
        }
    },
    optimizeDeps: {
        include: ['jquery']
    }
})
