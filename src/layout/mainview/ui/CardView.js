import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieList } from '../../../actions/MoviesListAction';
import '../scss/CardView.scss';
import MovieCard from './MovieCard';

class CardView extends Component {
	constructor(props) {
		super(props);
		this.cardView = React.createRef();
		this.state = {
			noOfCard: 0
		};
	}
	componentDidMount() {
		this.props.getMovieList();
		window.addEventListener('resize', (e) => {
			console.log(e.target.outerHeight, ' X ', e.target.innerWidth);
			const { offsetWidth: elOffsetWidth } = document.getElementsByClassName('movieCardWrapper')[0];
			const { offsetWidth } = this.cardView.current;
			const noOfCard = offsetWidth / elOffsetWidth;
			console.log(noOfCard);
			this.setState({ noOfCard: Math.floor(noOfCard) });
		});
	}

	componentDidUpdate(props, state) {
		if (this.state.noOfCard === 0 || state.noOfCard !== this.state.noOfCard) {
			const { offsetWidth } = this.cardView.current;
			const { offsetWidth: elOffsetWidth } = document.getElementsByClassName('movieCardWrapper')[0];
			const noOfCard = Math.floor(offsetWidth / elOffsetWidth);
			this.setState({ ...this.state, noOfCard });
		}
	}
	render() {
		let row = 1;
		let nextCard = this.state.noOfCard;
		let firstCardOfRow = this.state.noOfCard;
		return (
			<div className={'cardView'} ref={this.cardView}>
				{this.props.movies.map((movie, index) => {
					let showVideoTag = index === 0 || firstCardOfRow === index;
					if (index !== 0) {
						if (nextCard === index) {
							row = ++row;
							nextCard = this.state.noOfCard * row;
							firstCardOfRow = nextCard++;
						}
					}

					return <MovieCard key={index} movie={movie} row={row} showVideoTag={showVideoTag} />;
				}, this)}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	movies: state.movies.items,
	languages: state.movies.languages
});
export default connect(mapStateToProps, { getMovieList })(CardView);
