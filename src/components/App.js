import React, { Component } from 'react'

import Athletes from 'components/Athletes/Athletes'
import ControlPanel from 'components/ControlPanel/ControlPanel'

import athletesData from 'data/athletes'

export default class App extends Component {
	constructor (props) {
		super(props);

		this.onThumbsUp = this.onThumbsUp.bind(this);
		this.onToggleView = this.onToggleView.bind(this);
		this.onToggleSort = this.onToggleSort.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onErase = this.onErase.bind(this);

		this.state = {
			athletes: athletesData,
			template: 'grid',
			sorting: 'name-sort',
			query: ''
		};
	}

	onSearch (e) {
		this.setState({ 
			query: e.target.value 
		});
	}

	onToggleView (e) {
		var shouldForbidClick = e.currentTarget.className.includes('active');
		var clicked;

		if(shouldForbidClick) {
			return false;
		}

		clicked = e.currentTarget.id;

		this.setState({
			template: clicked
		});

	}

	onToggleSort (e) {
		var shouldForbidClick = e.currentTarget.className.includes('active');
		var clicked;

		if(shouldForbidClick) {
			return false;
		}

		clicked = e.currentTarget.id;

		this.setState({
			sorting: clicked
		});
	}

	onThumbsUp (id) {
		var pos,
			athletes = this.state.athletes.slice(0);

		var originalAthlete = this.state.athletes.filter((athlete, i) => {
			if(athlete.id === id) {
				pos = i;
				return athlete.id === id;
			} else {
				return false;
			}
		}).pop();

		var handleUpvotes = (alreadyVoted, votesNum) => {
			return alreadyVoted ? (votesNum - 1) : (votesNum + 1);
		};

		var athlete = Object.assign({}, originalAthlete, { 
			voted: !originalAthlete.voted, 
			upvotes: handleUpvotes(originalAthlete.voted, originalAthlete.upvotes) 
		});


		if(pos >= 0) {
			athletes[pos] = athlete;
			this.setState({
				athletes: athletes
			});
		}
	}

	onErase () {
		this.setState({ query: '' });
	}

	render () {
		return (
			<div className="wrapper">
				<ControlPanel 
					query={this.state.query} 
					sorting={this.state.sorting} 
					template={this.state.template} 
					onErase={this.onErase} 
					onSearch={this.onSearch} 
					onToggleView={this.onToggleView} 
					onToggleSort={this.onToggleSort} />

				<Athletes 
					query={this.state.query} 
					sorting={this.state.sorting} 
					template={this.state.template} 
					onThumbsUp={this.onThumbsUp} 
					athletes={this.state.athletes} />
			</div>
		)
	}
}