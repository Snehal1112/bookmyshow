import { MOVIES_LIST } from './action';

export const getMovieList = () => (dispatch) => {
	fetch(`https://cors-anywhere.herokuapp.com/https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((data) =>
			dispatch({
				type: MOVIES_LIST,
				payload: data
			})
		);
};
