import { HYDRATE } from '../actions'

export default (reducers) => (state, action) => {

	if (action.type!==HYDRATE) return reducers(state, action)

	// Replace existing state with new state, but keep props
	// that aren't part of the old state.
	const nextState = Object.assign({}, state, action.state)

	return reducers(nextState, action)

}