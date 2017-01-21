import React from 'react';
import athletes from 'data/athletes';
import AthleteBasicInfo from 'components/Athlete/AthleteBasicInfo';
import AthleteHeader from 'components/Athlete/AthleteHeader';
import RedditFeed from 'components/Athlete/RedditFeed';

class AthletePage extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			redditFeed: []
		};

		this.getLatestReddits = this.getLatestReddits.bind(this);
		this.setLatestReddits = this.setLatestReddits.bind(this);
	}

	setLatestReddits (result) {
		if(result.data && result.data.children) {
			this.setState({
				redditFeed: result.data.children
			});
		}
	}

	getLatestReddits () {
		const { id } = this.props.params;
		const SUBREDDIT = athletes.filter((athlete) => athlete.id === id)[0].subreddit;
		
		fetch(`https://www.reddit.com/r/${SUBREDDIT}.json`)
			.then(response => response.json())
			.then(json => this.setLatestReddits(json));
	}

	componentDidMount() {
		this.getLatestReddits();
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

						<AthleteBasicInfo 
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

export default AthletePage
