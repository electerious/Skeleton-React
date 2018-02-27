import { renderToString } from 'react-dom/server'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import h from './utils/h'
import createStore from './utils/createStore'
import enhanceState from './utils/enhanceState'
import enhanceReducers from './utils/enhanceReducers'
import layout from './utils/layout'
import reducers from './reducers'
import * as actions from './actions'

import Main from './components/Main'

export default (initalState) => {

	const enhancedReducers = enhanceReducers(reducers)
	const store = createStore(enhancedReducers, initalState)
	const state = store.getState()
	const enhancedState = enhanceState(state)

	const mapStateToProps = (state) => enhanceState(state)
	const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

	const html = renderToString(
		h(Provider, { store },
			h(
				connect(mapStateToProps, mapDispatchToProps)(Main)
			)
		)
	)

	return layout(html, enhancedState)

}