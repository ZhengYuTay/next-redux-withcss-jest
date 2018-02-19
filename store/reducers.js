// import { routerReducer } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form';
import counter from './counter';

export default {
	// form: formReducer,
	// routing: routerReducer,
	counter,
};

// Selector
export const getCounter = state => state.counter;
