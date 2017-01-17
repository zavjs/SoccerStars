const data = {
	'bra': {
		'name': 'Brazil',
		'icon': 'flag-bra.png'
	},
	'spa': {
		'name': 'Spain',
		'icon': 'flag-spa.png'
	},
	'fra': {
		'name': 'France',
		'icon': 'flag-fra.png'
	}
};

const Flag = ({ code, showName }) => {
	render () {
		const name = data[code].name;
		const icon = data[code].icon;

		return (
			<span className="flag">
				<img className="icon" title={name} src={`/img/${icon}`}/>
				{ showName && <span className="name"> {name} </span> }
			</span>
		)
	}
};

export default Flag;