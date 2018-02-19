export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

const initialState = {
	count: 2,
};

export const counter = (state = initialState, action = {}) => {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return Object.assign({}, state, { count: state.count + 1 });
		case COUNTER_DECREMENT:
			return Object.assign({}, state, { count: state.count - 1 });
		default:
			return state;
	}
};

export default counter;

export function incrementCount() {
	return {
		type: COUNTER_INCREMENT,
	};
}

export function decrementCount() {
	return {
		type: COUNTER_DECREMENT,
	};
}
