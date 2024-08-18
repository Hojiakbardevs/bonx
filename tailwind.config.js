module.exports = {
    theme: {
        extend: {
            textColor: theme => theme('colors'),
            textColor: {
                'primary': '#b154f0',
                'yellow': '#ffb300',
                'bright': '#1de3eb',
                'punch': '#df4c21',
                'gray-100': '#f3f3f3',
                'gray-500': '#aaa6b9'
            },
            borderColor: theme => ({
                'light-blue-500': '#281e4d',
                'gray-200': '#ededed',
                'yellow': '#ffb300',
                'bright': '#1de3eb',
                'punch': '#df4c21'
            }),    
            borderWidth: {
                1: '1px',
            },
            borderRadius: {
               '4xl': '2.375rem',
               '50': '3.125rem'
            },
            backgroundImage: {
                'nav-shape': "url('/images/others/menu_shape.webp')",
                'arrow-shape': "url('/images/icon/navigation-bg1.webp')",
                'arrow-hover-shape': "url('/images/icon/navigation-bg2.webp')",
                'team-shape': "url('/images/others/tam-text-shape.webp')",
                'team-hover-shape': "url('/images/others/tam-text-shape2.webp')"
            },
            spacing: {
                px: '1px',
                7.5: '30px',
                23.5: '5.875rem',
                37: '9.813rem', 
                15: '3.75rem',
                55: '3.438rem',
                68: '4.25rem',
                73: '4.563rem',
                88: '5.5rem',
                100: '6.25rem',
                120: '7.5rem',
                230: '14.375rem',
                260: '16.25rem',
                300: '18.75rem',
                365: '22.813rem',
                450: '28.125rem',
                460: '28.75rem',
                500: '31.25rem',
                620: '38.75rem',
                650: '40.625rem',
                780: '48.75rem',
                820: '51.25rem',
                940: '58.75rem'
            },
            zIndex: {
              n1: '-1',
              99: '99',
              999: '999',
              9999: '9999'
            },
            fontFamily: {
              'exo': ["'Exo', sans-serif"],
              'metal': ["'Autom', sans-serif"]
            },
            fontSize: {
              '7.5xl': ['7.5rem'],
              '5.5xl': ['5.5rem'],
              '10xl': ['5rem'],
              'title': ['3.438rem']
            },
            colors: {
                primary: '#b154f0',
                warning: '#ffa700',
                'gray-800': '#140e38',
                'secondary-80': '#281d59',
                'secondary-100': '#09002a',
                'yellow': '#ffb300',
                'bright': '#1de3eb',
                'punch': '#df4c21'
            },
            pseudo: { // defaults to {'before': 'before', 'after': 'after'}
                'before': 'before',
                'after': 'after',
                'not-first': 'not(:first-child)',
            },        
            container: {
                center: true,
                padding: {
                    DEFAULT: "15px",
                    sm: "15px",
                    lg: "15px",
                    xl: "15px",
                    "2xl": "15px"
                },
                screens: {
                    'sm': '640px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1200px'
                }
            },
            maxWidth: (theme, { breakpoints }) => ({
                '2xl': '43.125rem',
            }),
            width: (theme) => ({
                '1/38': '38%',
              }),
            lineHeight: {
                12: '3.75rem',
                70: '4.375rem',
                88: '5.5rem',
            },
            letterSpacing: {
                wide: '0.02em'
            }
        },
    },

    plugins: [
    ]
}