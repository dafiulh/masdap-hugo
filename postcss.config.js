module.exports = {
	plugins: [
	  	require('tailwindcss'),
	  	require('autoprefixer'),
	  	...process.env.NODE_ENV === 'production' ? [require("@fullhuman/postcss-purgecss")({
            content: [
                "layouts/**/*.html",
                "layouts/**/*.svg"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            whitelist: [
                "opacity-0",
                "align-top",
                "transition-opacity",
                "ease-in-out",
                "duration-300",
                "img-blur",
                "shadow-md",
                "-translate-y-full"
            ]
        })] : []
	]
}