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
						<div className="athlete-basic-info">
							<div className="athlete-info">
								<span className="basic-info-title">
									<span className="athlete-info-icon">
										<i className="fa fa-info" />
									</span> Basic Info:
								</span>
								<p className="abstract">
									{ourSoccerStar.description}
								</p>
							</div>
							<div className="honours">
								<span className="team-honours-title">
									<span className="honours-icon">
										<i className="fa fa-trophy" aria-hidden="true"></i>
									</span> Honours:
								</span>
								<div className="team-honours">
									<h4 className="team">Barcelona</h4>
									<ul className="events">
										<li>Copa del Rey - 2004</li>
										<li>Copa Emílio Santiago - 2005</li>
										<li>Campeonato Español - 2005 </li>
										<li>UEFA Champions League - 2007</li>
									</ul>
								</div>
								<div className="team-honours">
									<h4 className="team">Borussia Dortmund</h4>
									<ul className="events">
										<li>Coupe Champs Elyseé - 2007</li>
										<li>Herr Coupe Santiago Barnabé - 2007</li>
										<li>Dustche Matchndhör- 2007 </li>
										<li>UEFA Champions League - 2008</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="twitter-feed">
							<span className="twitter-feed-title">
								<span className="twitter-icon">
									<i className="fa fa-twitter" aria-hidden="true"></i>
								</span> Twitter Feed:
							</span>
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

