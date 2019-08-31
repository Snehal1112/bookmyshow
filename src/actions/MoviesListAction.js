import { MOVIES_LIST } from "./action";

export const getMovieList = () => dispatch => {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data =>
			dispatch({
				type: MOVIES_LIST,
				payload: data
			})
		);
};
