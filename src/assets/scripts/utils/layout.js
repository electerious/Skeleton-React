export default (body, state) => `
	<!doctype html>
	<html lang="${ state.lang }">
		<head>

			<title>${ state.title } | ${ state.site }</title>

			<meta charset="utf-8">
			<meta name="description" content="${ state.description }">
			<meta name="viewport" content="width=device-width, initial-scale=1">

			<link rel="shortcut icon" href="${ state.favicon }" type="image/x-icon">

			<!-- Twitter Cards -->
			<!-- <meta name="twitter:card" content="summary_large_image"> -->
			<!-- <meta name="twitter:site" content="@${ state.twitter }"> -->

			<!-- Open Graph Protocol -->
			<!-- <meta property="og:type" content="website"> -->

			<!-- Open Graph protocol and Twitter Cards -->
			<!-- <meta property="og:title" content="${ state.title } | ${ state.site }"> -->
			<!-- <meta property="og:description" content="${ state.description }"> -->
			<!-- <meta property="og:image" content="${ state.url }${ state.opengraph }"> -->

			<!-- CSS -->
			${ state.styles.map((src) => `<link rel="stylesheet" href="${ src }">`).join('') }

			<!-- JS -->
			${ state.scripts.map((src) => `<script defer src="${ src }"></script>`).join('') }

			<!-- Rehydration -->
			<script>
				window.__STATE__ = ${ JSON.stringify(state) }
			</script>

		</head>
		<body>

			${ body }

		</body>
	</html>
`