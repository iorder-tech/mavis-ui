const path = require('path')

module.exports = {
	title: 'Mavis UI',
	description: 'Just playing around.',
	themeConfig: {
		base: '/mavis-ui/',
		repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
		sidebar: [
			{
				text: 'Introdution',
				children: [
					{ text: 'What is Mavis UI?', link: '/' },
					{ text: 'Getting Started', link: '/guide/' },
				],
			},
			{
				text: 'Components',
				children: [
					{ text: 'Button', link: '/components/button' },
					{ text: 'Card', link: '/components/card' },
					{ text: 'Lists', link: '/components/lists' },
					{ text: 'Nav Bar', link: '/components/navbar' },
					{ text: 'Text Field', link: '/components/textfield' },
					{ text: 'Typography', link: '/components/typography' },
					{ text: 'Navigation Drawer', link: '/components/navigationdrawer' },
				],
			},
		],
	},
	vite: {
		resolve: {
			alias: {
				'mavis-ui': path.resolve(__dirname, '../../src'),
			},
		},
	},
}