import React from 'react';
import athletes from 'data/athletes';
import BasicInfo from 'components/Athlete/BasicInfo';
import RedditFeed from 'components/Athlete/RedditFeed';
import AthleteHeader from 'components/Athlete/AthleteHeader';

const PATH_BASE = 'https://api.twitter.com/1.1/search/tweets.json'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='
const PARAM_HPP = 'hitsPerPage='

class AthleteInner extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			redditFeed: []
		};

		this.getLatestTweets = this.getLatestTweets.bind(this);
		this.setLatestTweets = this.setLatestTweets.bind(this);
	}

	setLatestTweets (result) {

		if(result.data && result.data.children) {

			this.setState({
				redditFeed: result.data.children
			});
		}
	}

	getLatestTweets () {
		fetch(`https://www.reddit.com/r/soccer.json`)
			.then(response => response.json())
			.then(json => this.setLatestTweets(json));
	}

	componentDidMount() {
		this.getLatestTweets();
	}

	render () {
		const { id } = this.props.params;

		const ourSoccerStar = athletes.filter((athlete) => athlete.id === id)[0];

		const pic_alt = ourSoccerStar.known_as + ' main picture.';

		return (
			<div className="athlete-inner">
				<article>
					<AthleteHeader 
						coverImage={ourSoccerStar.cover}
						athletePicture={ourSoccerStar.image} 
						athleteName={ourSoccerStar.known_as} 
						athleteId={ourSoccerStar.id } />

					<div className="athlete-content">

						<BasicInfo 
							athleteId={ourSoccerStar.id}
							description={ourSoccerStar.description} 
							honours={ourSoccerStar.honours} />

						<RedditFeed feed={this.state.redditFeed} />
					</div>
				</article>
			</div>
		);
	}
}

export default AthleteInner;

