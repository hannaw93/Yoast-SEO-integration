import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type){

		case actionTypes.UPDATE_CONTENT:
			return action.content;
		default:
			return state;
	}
};
