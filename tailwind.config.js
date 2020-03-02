const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        },
        colors: {
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue
        },
        extend: {
            spacing: {
                "1/2": "0.125rem",
                "7": "1.75rem",
                "9": "2.25rem"
            },
            flex: {
                "single": "0 0 100%",
                "half": "0 0 50%",
                "third": "0 0 33.333333%"
            },
            fontSize: {
                "tiny": "0.925rem"
            },
            boxShadow: {
                "t": "0 -10px 15px -3px rgba(0,0,0,.1), 0 -4px 6px -2px rgba(0,0,0,.05)"
            }
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  	corePlugins: {
        container: false,
		objectFit: false,
		objectPosition: false,
		resize: false,
        gridTemplateColumns: false,
        gridColumn: false,
        gridColumnStart: false,
        gridColumnStartEnd: false,
        gridTemplateRows: false,
        gridRow: false,
        gridRowStart: false,
        gridRowStartEnd: false,
        gap: false,
        gridAutoFlow: false,
        fontSmoothing: false,
  	}
}