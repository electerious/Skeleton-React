import { createStore } from 'redux'

import isClient from './isClient'

export default (reducers, state) => {

	const hasDevTools = isClient()===true && typeof window.__REDUX_DEVTOOLS_EXTENSION__==='function'
	const devTools = hasDevTools===true ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined

	return createStore(reducers, state, devTools)

}