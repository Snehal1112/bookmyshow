import React, {Component} from 'react';
import '../scss/ViewPort.scss';
import MainView from "../../mainview";
import TopToolbar from "../../topbar";

class ViewPort extends Component {
	render() {
		return (
			<div className={"viewport"}>
				<TopToolbar/>
				<MainView/>
			</div>
		);
	}
}
export default ViewPort;
