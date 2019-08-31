import React, {Component} from 'react';
import "../scss/MainView.scss";
import FilterBar from "../../filterbar";
import CardView from "./CardView";

class MainView extends Component {
	render() {
		return (
			<div className={"mainView"}>
				<FilterBar/>
				<CardView/>
			</div>
		);
	}
}

export default MainView;
