/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{jsx,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'noto': ['Noto Serif Display'],
                'serif': ['Noto Serif']
            },
            colors: {
                'peach': '#FF8A71',
                'dark': '#191919'
            }
        }
    }
}
