import React from 'react';
import athletes from 'data/athletes';
import BasicInfo from 'components/Athlete/BasicInfo';
import TwitterFeed from 'components/Athlete/TwitterFeed';
import AthleteHeader from 'components/Athlete/AthleteHeader';

class AthleteInner extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			tweets: []
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com')
			.then((response) => { console.log( response )});
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

						<TwitterFeed />
					</div>
				</article>
			</div>
		);
	}
}

export default AthleteInner;

