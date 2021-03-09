import * as actionTypes from './actionTypes';

export const updateContent = ( content ) => {
	console.log( "argument updateContent", content );
	return {
		type: actionTypes.UPDATE_CONTENT,
		content: content
	}
};
