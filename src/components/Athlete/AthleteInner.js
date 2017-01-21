import React from 'react';
import athletes from 'data/athletes';
import BasicInfo from 'components/Athlete/BasicInfo';
import RedditFeed from 'components/Athlete/RedditFeed';
import AthleteHeader from 'components/Athlete/AthleteHeader';

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
		const { id } = this.props.params;
		const SUBREDDIT = athletes.filter((athlete) => athlete.id === id)[0].subreddit;
		
		fetch(`https://www.reddit.com/r/${SUBREDDIT}.json`)
			.then(response => response.json())
			.then(json => this.setLatestTweets(json));
	}

	componentDidMount() {
		this.getLatestTweets();
	}

	render () {

		const { id } = this.props.params;
		const player = athletes.filter((athlete) => athlete.id === id)[0];
		
		return (
			<div className="athlete-inner">
				<article>
					<AthleteHeader 
						coverImage={player.cover}
						athletePicture={player.image} 
						athleteName={player.known_as} 
						athleteId={player.id } />

					<div className="athlete-content">

						<BasicInfo 
							athleteId={player.id}
							description={player.description} 
							honours={player.honours} />

						<RedditFeed feed={this.state.redditFeed} />
					</div>
				</article>
			</div>
		);
	}
}

export default AthleteInner;

