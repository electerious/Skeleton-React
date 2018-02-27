import server from './assets/scripts/server'

export default async () => server({
	lang: 'en',
	url: '',
	site: 'Skeleton',
	title: '',
	description: '',
	twitter: '',
	opengraph: 'assets/images/og.jpg',
	favicon: 'assets/images/favicon.ico',
	styles: [
		'assets/styles/main.css'
	],
	scripts: [
		'assets/scripts/main.js'
	]
})