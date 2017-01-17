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
				<header>
					<div style={{ backgroundImage: bgImage }} className="cover">
						<figure className="athlete-profile">
							<img src={'/public/img/' + ourSoccerStar.image } />
						</figure>
						<h2 className="athlete-profile-name">{ourSoccerStar.known_as}</h2>
					</div>
					<div className="athlete-tabs">
						<div className="athlete-tab inactive-tab">

						</div>
						<div className="athlete-tab">
							Main
						</div>
						<div className="athlete-tab">
							Media
						</div>
						<div className="athlete-tab">
							Chat
						</div>
					</div>
				</header>
				<div className="athlete-content">

				</div>
			</div>
		);
	}
}

export default AthleteInner;

