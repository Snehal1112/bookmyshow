import React, { Component } from 'react';

class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}
	render() {
        const {show} = this.state;
		return (
			<div className="dropDownContainer">
				<div className="dropDownValye" />
                {show && (
                    <ul>
                        <li></li>
                    </ul>
                )}
			</div>
		);
	}
}

export default DropDown;
