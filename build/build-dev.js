({
	mainConfigFile: 'config.js',
	normalizeDirDefines: "all",
	optimize:'none',
	name: 'atlascharts',
	exclude: ['d3', 'd3-tip', 'jquery', 'lodash', 'numeral'],
	out: '../dist/atlascharts.js'
});
