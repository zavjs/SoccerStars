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
				<article>
					<header>
						<div style={{ backgroundImage: bgImage }} className="cover">
							<figure className="athlete-profile">
								<img 
									src={'/public/img/' + ourSoccerStar.image } />
							</figure>
							<h2 className="athlete-profile-name text-center">{ourSoccerStar.known_as}</h2>
						</div>
						<div className="athlete-tabs">
							<div className="athlete-tab text-center inline-block inactive-tab">

							</div>
							<div className="athlete-tab text-center inline-block active">
								<Link to={`/athlete/${ourSoccerStar.id}/main`}>Main</Link>
							</div>
							<div className="athlete-tab text-center inline-block ">
								<Link to={`/athlete/${ourSoccerStar.id}/chat`}>Chat</Link>
							</div>
							<div className="athlete-tab text-center inline-block ">
								<Link to={`/athlete/${ourSoccerStar.id}/photos`}>Photos</Link>
							</div>
							<div className="athlete-tab text-center inline-block ">
								<Link to={`/athlete/${ourSoccerStar.id}/videos`}>Videos</Link>
							</div>
						</div>
					</header>
					<div className="athlete-content">
						<div className="athlete-info">
							<p className="abstract">
								{ourSoccerStar.description}
							</p>
							<i className="fa fa-info" />
						</div>
						<div className="twitter-feed">
							<p className="twitter-status">
								<a href="twitter.com/charleston">@charlestonfan</a>: Tonight victory was amazing.
								Aubameyang scored thrice! #aubameyang
							</p>
							<p className="twitter-status">
								<a href="twitter.com/gazelle98">@gazelle98</a>: I hope 
								@aubameyang plays forever on borussia.
							</p>
							<p className="twitter-status">
								<a href="twitter.com/leopardine22">@leopardine22</a>: Tonight victory was amazing.
								Aubameyang scored thrice! #aubameyang
							</p>
						</div>
					</div>
				</article>
			</div>
		);
	}
}

export default AthleteInner;

