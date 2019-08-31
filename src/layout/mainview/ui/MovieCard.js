import React,{Fragment} from 'react';
import "../scss/MovieCard.scss"
const MovieCard = (props) => {
	const {showVideoTag} = props.position;
	console.log(showVideoTag)
	return (
		<Fragment>
			{
				showVideoTag && <div className={"trailer"}></div>
			}
			<div className={"movieCardWrapper"}>
				<div className={"movieCard"}>
					data
				</div>
			</div>

		</Fragment>

	);
};
export default MovieCard;
