/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-poppins)',
            },
            colors: {
                darkRed: '#8E0D0D',
                red: '#D80000',
                defaultBlack: '#131212',
            },
            backgroundImage: {
                gradientRed: 'linear-gradient(45deg, #D80000, #8E0D0D, #D80000)',
            },
            backgroundSize: {
                '200%': '200%',
            },
        },
    },
    plugins: [],
};
