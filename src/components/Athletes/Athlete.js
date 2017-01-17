import React, { Component } from 'react';
import AthleteGrid from './AthleteGrid'
import AthleteList from './AthleteList'

class Athlete extends Component {

	constructor(props) {
		super(props);
		
		this._onClick = this._onClick.bind(this);
	}

	_onClick () {
		this.props.onThumbsUp(this.props.athlete.id);
	}

	render() {
		const { athlete, onThumbsUp, template } = this.props;

		return (
			<div className={this.props.template == 'grid' ? 'athlete grid' : 'athlete list' }>
				{ template === 'grid' ? 
					<AthleteGrid onThumbsUp={this._onClick} athlete={athlete} /> : 
					<AthleteList onThumbsUp={this._onClick} athlete={athlete} />
				}
			</div>
		)
	}
}

export default Athlete;