export default (body, rawState, enhancedState) => `
	<!doctype html>
	<html lang="${ enhancedState.lang }">
		<head>

			<title>${ enhancedState.title } | ${ enhancedState.site }</title>

			<meta charset="utf-8">
			<meta name="description" content="${ enhancedState.description }">
			<meta name="viewport" content="width=device-width, initial-scale=1">

			<link rel="shortcut icon" href="${ enhancedState.favicon }" type="image/x-icon">

			<!-- Twitter Cards -->
			<!-- <meta name="twitter:card" content="summary_large_image"> -->
			<!-- <meta name="twitter:site" content="@${ enhancedState.twitter }"> -->

			<!-- Open Graph Protocol -->
			<!-- <meta property="og:type" content="website"> -->

			<!-- Open Graph protocol and Twitter Cards -->
			<!-- <meta property="og:title" content="${ enhancedState.title } | ${ enhancedState.site }"> -->
			<!-- <meta property="og:description" content="${ enhancedState.description }"> -->
			<!-- <meta property="og:image" content="${ enhancedState.url }${ enhancedState.opengraph }"> -->

			<!-- CSS -->
			${ enhancedState.styles.map((src) => `<link rel="stylesheet" href="${ src }">`).join('') }

			<!-- JS -->
			${ enhancedState.scripts.map((src) => `<script defer src="${ src }"></script>`).join('') }

			<!-- Rehydration -->
			<script>
				window.__STATE__ = ${ JSON.stringify(rawState) }
			</script>

		</head>
		<body>

			<div id="app">${ body }</div>

		</body>
	</html>
`