const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'libs/**/**/src/**/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
        icons: ['remixicon']
      },
      fontSize: {
        xxs: [
          '0.625rem',
          {
            lineHeight: '1rem',
          },
        ],
        xs: [
          '0.75rem',
          {
            lineHeight: '1rem',
            letterSpacing: '0.002em',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0.0025em',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.005em',
          },
        ],
      },
      colors: {
        primary: {
          100: '#D8C8F9',
          200: '#B090F4',
          300: '#986EF0',
          400: '#804CED',
          500: '#5E21E1',
          600: '#521CC2',
          700: '#4416A6',
          800: '#3A118F',
          900: '#330F7E'
        },
        dark: {
          100: '#585A62',
          200: '#494B52',
          300: '#383A40',
          400: '#2B2D32',
          500: '#1E1F23',
          600: '#16161A',
          700: '#111113',
          800: '#0B0B0D',
          900: '#040405'
        },
        light: {
          100: '#F0F3FF',
          200: '#E7EBF9',
          300: '#E1E6F6',
          400: '#D6DBEC',
          500: '#C8CDDD',
          600: '#B3B8C8',
          700: '#A6AAB7',
          800: '#8F929C',
          900: '#767982'
        },
        success: {
          100: '#CBF0C5',
          200: '#BDF1B4',
          300: '#97ED88',
          400: '#75E762',
          500: '#47DF2E',
          600: '#2FBE17',
          700: '#258D14',
          800: '#1A660D',
          900: '#134A0A'
        },
        error: {
          100: '#F9C3C7',
          200: '#F2A3A8',
          300: '#EE7F86',
          400: '#E9535D',
          500: '#E22935',
          600: '#C1202B',
          700: '#A51721',
          800: '#7D0F17',
          900: '#5B0A10'
        },
        warning: {
          100: '#F9E7C4',
          200: '#FADB9E',
          300: '#F5C66B',
          400: '#F3B742',
          500: '#F1A91E',
          600: '#CE9016',
          700: '#A9750F',
          800: '#8A6110',
          900: '#5F430D'
        },
        accent: {
          100: '#BFD6F1',
          200: '#94BBEA',
          300: '#68A8F2',
          400: '#4798F6',
          500: '#1E7FF1',
          600: '#1B70D3',
          700: '#175DAF',
          800: '#124B8E',
          900: '#0F3866'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(bg|border|text|fill)-(violet|red|brand|error|success|bg-element-light-lighter-500|accent)(-\w+\d+)*/,
      variants: ['focus', 'hover'],
    },
    {
      pattern: /(w|h)-(\w+\d+)*/,
    },
  ],
  plugins: [],
};
