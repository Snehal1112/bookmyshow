import { MOVIES_LIST } from "../actions/action";

const initState = {
	items: []
};

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIES_LIST:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
};
