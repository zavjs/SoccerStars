import React from 'react';
import athletes from 'data/athletes';
import { Link } from 'react-router';

class AthleteInner extends React.Component {
	render () {

		const { id } = this.props.params;

		const ourSoccerStar = athletes.filter((athlete) => athlete.id === id)[0];
		const bgImage = `url("/public/img/${ourSoccerStar.cover}")`;
		const pic_alt = ourSoccerStar.known_as + ' main picture.';

		return (
			<div className="athlete-inner">
				<header>
					<div style={{ backgroundImage: bgImage }} className="cover">
						<figure className="athlete-profile">
							<img 
								src={'/public/img/' + ourSoccerStar.image } />
						</figure>
						<h2 className="athlete-profile-name">{ourSoccerStar.known_as}</h2>
					</div>
					<div className="athlete-tabs">
						<div className="athlete-tab inactive-tab">

						</div>
						<div className="athlete-tab active">
							<Link to={`/athlete/${ourSoccerStar.id}/main`}>Main</Link>
						</div>
						<div className="athlete-tab">
							<Link to={`/athlete/${ourSoccerStar.id}/chat`}>Chat</Link>
						</div>
						<div className="athlete-tab">
							<Link to={`/athlete/${ourSoccerStar.id}/photos`}>Photos</Link>
						</div>
						<div className="athlete-tab">
							<Link to={`/athlete/${ourSoccerStar.id}/videos`}>Videos</Link>
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

