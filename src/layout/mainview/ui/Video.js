import React from 'react';

const Video = (props) => {
	const { row } = props;
	return (
		<div id={`${row}-trailer`} className={'trailer'}>
			<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0" />
		</div>
	);
};

export default Video;
