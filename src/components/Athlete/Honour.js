import React from 'react';

const Honour = ({ name, year }) => {
	const years = Array.isArray(year) ? year.join(', ') : year;

	return <li>{name} - {years}</li>
};

export default Honour;