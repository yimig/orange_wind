const colors = require('tailwindcss/colors')
module.exports = {
    theme: {
        colors: {
            white:{
                DEFAULT:'#ffffff',
            },
            blue: {
                light: '#E5F0FF',
                DEFAULT: '#5BA2FF',
                dark: colors.blue["400"],
            },
            pink: {
                light: '#ff7ce5',
                DEFAULT: colors.pink["400"],
                dark: '#ff16d1',
            },
            gray: {
                darkest: '#1f2d3d',
                darker:'#707070',
                dark: '#3c4858',
                DEFAULT: '#c0ccda',
                light: '#e0e6ed',
                lightest: '#f9fafc',
            },
            yellow:{
                light:colors.yellow["50"],
                DEFAULT:colors.yellow["400"]
            },
            red:{
                light:colors.red["50"],
                DEFAULT:colors.red["400"]
            },
            green:{
                light:colors.green["50"],
                DEFAULT:colors.green["400"]
            },
            indigo:{
                light:colors.indigo["50"],
                DEFAULT:colors.indigo["400"]
            },
            orange:{
                light: '#FEF6E8',
                DEFAULT: '#ffa500'
            }
        },
        textColor:{
          bluelight:'#E5F0FF',
            darklight:'#707070',
            blue:'#5BA2FF',
            white:'#ffffff',
            bluelight:colors.blue["50"],
            yellow:colors.yellow["50"],
            red:colors.red["50"],
            green:colors.green["50"],
            indigo:colors.indigo["50"],
            pink: colors.pink["50"],
            orangelight:'#ffa500',
        },
        borderColor:theme=>({
            'primary':'#E5F0FF',
            'white':'#ffffff'
        }),
        fontFamily: {
            sans: ['Graphik', 'Source Han Sans', 'SimHei', 'sans-serif'],
            banner: ['Camar']
        },
        extend: {
            flexGrow: {
                2: '2',
                3: '3'
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100'
            },
            transitionProperty:{
                'width':'width',
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
}
