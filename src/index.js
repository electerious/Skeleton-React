import server from './assets/scripts/server'

export default async () => server({
	head: {
		lang: 'en',
		url: '',
		title: 'Skeleton',
		description: '',
		twitter: '',
		opengraph: 'assets/images/og.jpg',
		favicon: 'assets/images/favicon.ico',
		styles: [
			'assets/styles/main.css'
		],
		scripts: [
			'assets/scripts/client.js'
		]
	}
})