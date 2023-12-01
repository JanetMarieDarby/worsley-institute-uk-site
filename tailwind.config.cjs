/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: {
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                    },
                },
            },
            colors: {
                gray: {
                    100: "#f7fafc",
                    200: "#edf2f7",
                    300: "#e2e8f0",
                    400: "#cbd5e0",
                    500: "#a0aec0",
                    600: "#718096",
                    700: "#4a5568",
                    800: "#2d3748",
                    900: "#1a202c",
                    codeblock: "#fbfcfd",
                },
                blue: {
                    100: "#ebf8ff",
                    200: "#bee3f8",
                    300: "#90cdf4",
                    400: "#63b3ed",
                    500: "#4299e1",
                    600: "#3182ce",
                    700: "#2b6cb0",
                    800: "#2c5282",
                    900: "#2a4365",
                },
            },
            fontFamily: {
                sans: [
                    "Fira Sans",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                serif: [
                    "Cardo",
                    "Georgia",
                    "Cambria",
                    '"Times New Roman"',
                    "Times",
                    "serif",
                ],
                mono: [
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    '"Liberation Mono"',
                    '"Courier New"',
                    "monospace",
                ],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
