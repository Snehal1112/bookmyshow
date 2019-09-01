import React, { Component } from 'react';
import '../scss/TopToolbar.scss';

class TopToolbar extends Component {
	render() {
		return (
			<div className={'topToolbar'}>
				<div className={'leftTopToolBar'}>
					<span>Movies Trailer</span>
					<div className="btn">
						<button> COMMING SOON</button>
					</div>
					<div className="btn">
						<button> NOW SHOWING</button>
					</div>
				</div>
				<div className={'rightTopToolBar'}>Right topToolbar</div>
			</div>
		);
	}
}

export default TopToolbar;
