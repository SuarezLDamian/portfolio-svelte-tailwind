/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'karma': ['Karma', "serif"],
                'lato': ['lato', "sans-serif"],
            }
        },
    },
    plugins: [require('daisyui')],
}
