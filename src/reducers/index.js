import { combineReducers } from 'redux';
import MovieListReducer from './MvoieListReducer';

export default combineReducers({
	movies: MovieListReducer
});
