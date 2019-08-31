import React, {Component} from 'react';
import "../scss/CardView.scss";
import MovieCard from "./MovieCard";
import {connect} from "react-redux";
import {getMovieList} from "../../../actions/MoviesListAction";

class CardView extends Component {
	constructor(props) {
		super(props)
		this.cardView = React.createRef();
		this.state = {
			noOfCard : 0
		};
		this.cards = [<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>,
		<MovieCard/>]
	}
	componentDidMount() {
		this.props.getMovieList();
		const {offsetWidth} = this.cardView.current;
		const {offsetWidth:elOffsetWidth} = document.getElementsByClassName('movieCardWrapper')[0];
		const noOfCard = offsetWidth / elOffsetWidth;
		this.setState({noOfCard:Math.floor(noOfCard)});

		window.addEventListener('resize', (e)=>{
			console.log(e.target.outerHeight, " X ", e.target.innerWidth);
			const {offsetWidth:elOffsetWidth} = document.getElementsByClassName('movieCardWrapper')[0];
			const {offsetWidth} = this.cardView.current;
			const noOfCard = offsetWidth / elOffsetWidth;
			this.setState({noOfCard:Math.floor(noOfCard)});
		});
	}

	render() {
		let row = 1;
		let nextCard = this.state.noOfCard;
		let firstCardOfRow = this.state.noOfCard;
		return (
			<div className={"cardView"} ref={this.cardView}>
				{
					this.cards.map((Card, index)=>{
						let showVideoTag = index === 0 || firstCardOfRow === index;
						if (index !== 0) {
							if (nextCard === index) {
								row = ++row;
								nextCard = this.state.noOfCard * row;
								firstCardOfRow = nextCard++;
							}
						}

						return <MovieCard key={index} position = {{...this.props, showVideoTag}}/>;
					}, this)
				}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	movies:state.mvoies.items
});
export default connect(mapStateToProps, {getMovieList})(CardView);
