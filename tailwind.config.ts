import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/core/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0 5px 0 0 rgba(0, 0, 0, 1)',
                '4xl': '0 10px 0 0 rgba(0, 0, 0, 1)',
            },
        },
        colors: {
            gray: colors.gray,
            purple: {
                600: '#7C34FB',
                800: '#5F18D2',
            },
            orange: {
                200: '#ffd06e',
            },
            pink: {
                400: '#fe6687',
            },
            white: '#fff',
            black: '#000',
        },
    },
    plugins: [],
}
export default config
