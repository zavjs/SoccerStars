import React from 'react';
import athletes from 'data/athletes';

class AthleteInner extends React.Component {
	render () {

		const { id } = this.props.params;

		const ourSoccerStar = athletes.filter((athlete) => athlete.id === id)[0];

		return (
			<div>Hello, {ourSoccerStar.known_as}</div>
		);
	}
}

export default AthleteInner;

