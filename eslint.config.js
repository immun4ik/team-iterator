import js from "@eslint/js";
import eslintPluginHtml from "eslint-plugin-html";

export default [
    {
        files: ["*.js"],
        ...js.configs.recommended, 
        env: {
            browser: true,
            es2021: true,
        },
        languageOptions: {
            globals: {
                console: "readonly",
            },
        },
    },
    {
        files: ["*.html"],
        plugins: {
            html: eslintPluginHtml,
        },
        processor: "html/html",
        languageOptions: {
            globals: {},
        },
    }
];