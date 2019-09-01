import React, { Fragment } from 'react';
import '../scss/MovieCard.scss';
import Video from './Video';
const MovieCard = (props) => {
	const reff = React.createRef();
	const { showVideoTag, movie, row } = props;

	const onMovieClick = (event) => {
		console.log(movie);
		console.log(row);
		console.log(props);
		console.log(reff);
	};

	const date = new Date(movie.DispReleaseDate).getFullYear();
	return (
		<Fragment>
			{showVideoTag && <Video props={props} />}
			<div className={'movieCardWrapper'} onClick={onMovieClick}>
				<img
					className={'movieCard'}
					src={`https://in.bmscdn.com/events/moviecard/${movie.EventCode}.jpg`}
					alt="sd"
				/>
				<div className="title">{movie.EventTitle}</div>
				<div className="ratingContainer">
					<div className="perc">
						<span className="icon">
							<i className="material-icons">thumb_up_alt</i>
						</span>
						<span> {movie.wtsPerc} %</span>
					</div>
					<div className="votes">{movie.wtsCount} Votes</div>
				</div>
				<div className="releaseDate">
					<span>{date}</span>
				</div>
				<div className="playIcon">
					<i className="material-icons">play_circle_outline</i>
				</div>
			</div>
		</Fragment>
	);
};
export default MovieCard;
