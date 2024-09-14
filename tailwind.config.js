/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#F24137',
        'primary-hover': '#D62E25',
        secondary: '#1B88FF',
        green: '#86CE2B',
        haze: '#F6F6F6',
        black: '#151515',
        grey: {
          100: '#242424',
          200: '#444444',
          300: '#777777',
          400: '#D4D4D4',
          500: '#E4E4E4',
        },
      },
      fontSize: {
        h1: [
          '56px',
          { lineHeight: '1.28', letterSpacing: '0', fontWeight: '500' },
        ],

        h2: [
          '32px',
          { lineHeight: '1.25', letterSpacing: '0', fontWeight: '500' },
        ],

        h3: [
          '24px',
          { lineHeight: '1.33', letterSpacing: '0', fontWeight: '500' },
        ],

        h4: [
          '20px',
          { lineHeight: '1.4', letterSpacing: '0', fontWeight: '500' },
        ],

        h5: [
          '17px',
          { lineHeight: '1.41', letterSpacing: '0', fontWeight: '500' },
        ],

        h6: [
          '14px',
          { lineHeight: '1.43', letterSpacing: '0', fontWeight: '500' },
        ],

        sm: [
          '12px',
          { lineHeight: '1.66', letterSpacing: '0', fontWeight: '400' },
        ],

        md: [
          '14px',
          { lineHeight: '1.71', letterSpacing: '0', fontWeight: '400' },
        ],

        lg: [
          '16px',
          { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' },
        ],

        'btn-sm': [
          '12px',
          { lineHeight: '1.33', letterSpacing: '0.125em', fontWeight: '500' },
        ],

        'btn-md': [
          '14px',
          { lineHeight: '1.71', letterSpacing: '0.125em', fontWeight: '500' },
        ],

        'btn-lg': [
          '16px',
          { lineHeight: '1.25', letterSpacing: '0.125em', fontWeight: '500' },
        ],
      },
      letterSpacing: {
        2: '0.1875em',
      },
      borderRadius: {
        xs: '3px',
      },
    },
  },
  plugins: [],
}
