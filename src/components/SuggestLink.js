import React from 'react';
import { Link } from 'react-router';

const SuggestLink = ({ to, whatLacks }) =>
	<span>
		This athlete has no {whatLacks}. <Link to={ '/athlete/' + to + '/edit' }>Suggest one.</Link>
	</span>

export default SuggestLink;