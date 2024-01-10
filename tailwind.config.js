/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          300: '#078080',
          400: '#066d6d',
        },
        brown: {
          300: '#232323',
        },
        snow: {
          50: '#fffffe',
          100: '#f8f5f2',
        },
        orange: {
          300: '#f45d48',
        },
      },
      boxShadow: {
        basic: '9px 9px 16px #b5bbc2 , -9px -9px 16px #f8fbff',
      },
      fontFamily: {
        body: 'var(--body-font)',
        headings: 'var(--headings-font)',
      },
      animation: {
        enter: 'enter 200ms ease-out',
        'fade-out-in': 'fade-out-in 300ms linear',
        'fade-in': 'fade-in 200ms linear',
        'slide-in': 'slide-in 0.3s cubic-bezier(.41,.73,.51,1.02)',
        'slide-in-from-top':
          'slide-in-from-top 0.3s cubic-bezier(.41,.73,.51,1.02)',
        leave: 'leave 150ms ease-in forwards',
        'progress-line': 'progress-line 450ms ease-in forwards',
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'fade-out-in': {
          '0%': { opacity: 1 },
          '20%': { opacity: 0 },
          '80%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'progress-line': {
          '0%': {
            right: '100%',
          },
          '50%': {
            right: '70%',
            left: '0',
          },
          '99%': {
            right: '0',
            left: '0',
            opacity: 1,
          },
          '100%': {
            right: '0',
            left: '0',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
