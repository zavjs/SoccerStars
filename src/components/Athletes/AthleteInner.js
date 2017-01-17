import React from 'react';
import athletes from 'data/athletes';

class AthleteInner extends React.Component {
	render () {

		const { id } = this.props.params;

		const ourSoccerStar = athletes.filter((athlete) => athlete.id === id)[0];
		const bgImage = `url("/public/img/${ourSoccerStar.cover}")`;

		console.log(bgImage);

		return (
			<div className="athlete-inner">
				<header style={{ backgroundImage: bgImage }}>
					<figure className="athlete-profile">
						<img src={'/public/img/' + ourSoccerStar.image } />
					</figure>
					<h2 className="athlete-profile-name">{ourSoccerStar.known_as}</h2>
				</header>
			</div>
		);
	}
}

export default AthleteInner;

