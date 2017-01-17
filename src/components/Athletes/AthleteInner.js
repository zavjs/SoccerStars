import React from 'react';

class AthleteInner extends React.Component {
	render () {
		const { id } = this.props;

		return (
			<div>Hello, {id}</div>
		);
	}
}

export default AthleteInner;

