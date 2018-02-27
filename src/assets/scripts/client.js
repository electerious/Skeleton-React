import { hydrate } from 'react-dom'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import h from './utils/h'
import createStore from './utils/createStore'
import enhanceState from './utils/enhanceState'
import enhanceReducers from './utils/enhanceReducers'
import isClient from './utils/isClient'
import reducers from './reducers'
import * as actions from './actions'

import Main from './components/Main'

if (isClient()===true) {

	const enhancedReducers = enhanceReducers(reducers)
	const store = createStore(enhancedReducers, window.__STATE__)

	const mapStateToProps = (state) => enhanceState(state)
	const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

	const connectedMain = connect(mapStateToProps, mapDispatchToProps)(Main)
	const container = document.querySelector('#app')

	const App = h(Provider, { store },
		h(connectedMain)
	)

	hydrate(App, container)

}