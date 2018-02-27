import hydratable from './hydratable'

export default (reducers) => {

	// Make reducers hydratable by wrapping a function around
	return hydratable(reducers)

}