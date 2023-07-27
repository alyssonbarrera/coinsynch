/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '5xl': '2560px',
      },
      fontSize: {
        '5xl': '3rem', // 48px
        '4xl': '2.5rem', // 40px
        '3xl': '2rem', // 32px
        '2xl': '1.5rem', // 24px
        xl: '1.25rem', // 20px
        md: '1rem', // 16px
        sm: '0.875rem', // 14px
        xs: '0.75rem', // 12px
      },
      fontFamily: {
        base: ['Roboto', 'sans-serif'],
      },
      lineHeight: {
        '6xl': '3.5rem', // 56px
        '5xl': '3rem', // 48px
        '4xl': '2.5rem', // 40px
        '3xl': '2rem', // 32px
        '2xl': '1.5rem', // 24px
        xl: '1.25rem', // 20px
        md: '1rem', // 16px
        sm: '0.875rem', // 14px
        xs: '0.75rem', // 12px
      },
      letterSpacing: {
        px: '0.0625rem', // 1px
      },
      colors: {
        primary: {
          100: '#FFF6E8',
          200: '#FFE1B5',
          300: '#FFCD82',
          400: '#FFB94F',
          500: '#FBAB34',
          600: '#E09422',
          700: '#AD721A',
          800: '#7A4E0C',
          900: '#472C04',
        },
        secondary: {
          100: '#F6F6F6',
          200: '#F4F3F8',
          300: '#E0DEEA',
          400: '#ACABB7',
          500: '#8C8A97',
          600: '#716F7A',
          700: '#5F5C6B',
          800: '#4E4B59',
          900: '#33303E',
        },
        tertiary: {
          100: '#E8FAF1',
          200: '#D1F6E3',
          300: '#A4EDC6',
          400: '#8DE8B8',
          500: '#1BD171',
          600: '#18B863',
          700: '#149E55',
          800: '#0E6B3A',
          900: '#07381E',
        },
        quaternary: {
          100: '#FFF2F3',
          200: '#FFCFD0',
          300: '#FF9497',
          400: '#FA7D80',
          500: '#EC3237',
          600: '#D42D31',
          700: '#A12226',
          800: '#6E171A',
          900: '#3B0C0E',
        },
        'color-base': '#5D6670',
      },
      boxShadow: {
        'icon-tag': '0px 8px 16px 0px rgba(0, 0, 0, 0.15)',
        'home-card': '0px 12px 24px 0px rgba(0, 0, 0, 0.05)',
        'home-nav': '0px 4px 8px 0px rgba(77, 77, 77, 0.10)',
        'input-shadow': '0px 12px 24px 0px rgba(0, 0, 0, 0.10)',
        'button-shadow': '0px 12px 24px 0px rgba(0, 0, 0, 0.10)',
      },
      gridTemplateColumns: {
        'home-nav-xl': '1fr 1fr minmax(0, 320px)',
        'home-nav-base': '1fr minmax(0, 224px);',
        'home-nav-md': '1fr minmax(0, 256px)',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      backgroundImage: {
        'home-wave-one': "url('../assets/shapes/wave-one.png')",
        'home-section-two':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%)',
        'home-wave-two': "url('../assets/shapes/wave-two.png')",
        'home-footer': 'linear-gradient(138deg, #FBAB34 0%, #AD721A 100%)',
      },
    },
  },
  plugins: [],
}
