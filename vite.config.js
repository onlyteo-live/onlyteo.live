import {defineConfig} from "vite"
import {fileURLToPath, URL} from "node:url"
import {dirname, resolve} from "node:path"

export default defineConfig({
    root: resolve(dirname(fileURLToPath(import.meta.url)), "src"),
    server: {
        host: "0.0.0.0",
        port: 3000,
        hot: true
    },
    plugins: [],
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
                quietDeps: true
            }
        }
    }
})

const SCSS_Logger = {
    warn(message, options) {
        // Mute "Mixed Declarations" warning
        if (options.deprecation && message.includes("mixed-decls")) {
            return
        }
        // List all other warnings
        console.warn(`▲ [WARNING]: ${message}`)
    }
}
