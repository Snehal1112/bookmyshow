import { MOVIES_LIST } from '../actions/action';

const initState = {
	languages: [],
	items: []
};

export default (state = initState, { type, payload }) => {
	switch (type) {
		case MOVIES_LIST:
			const [ languages, moveis ] = payload;
			const items = [];
			Object.keys(moveis).map((item) => items.push(moveis[item]));
			
			return {
				...state,
				languages,
				items
			};
		default:
			return state;
	}
};
