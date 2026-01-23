requirejs.config({
	packages: [
		{
			name: "atlascharts",
			location: "../atlascharts",
			main: "main",
		},
	],
	paths: {
		d3: "../node_modules/d3/dist/d3",
		"d3-collection": "../node_modules/d3-collection/dist/d3-collection",
		"d3-selection": "../node_modules/d3-selection/dist/d3-selection",
		"d3-tip": "../node_modules/d3-tip/dist/index",
		jquery: "../node_modules/jquery/dist/jquery",
		lodash: "../node_modules/lodash/lodash",
		numeral: "../node_modules/numeral/numeral",
	},
});
