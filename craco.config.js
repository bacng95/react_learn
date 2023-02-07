const path = require('path')

module.exports = {
	reactScriptsVersion: 'react-scripts',
	style: {
		sass: {
			loaderOptions: {
				sassOptions: {
					includePaths: ['node_modules', 'src/assets']
				}
			}
		},
		postcss: {
			plugins: []
		}
	},
	webpack: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@utils': path.resolve(__dirname, 'src/utility/Utils'),
		}
	}
}
