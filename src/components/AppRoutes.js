import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

const AppRoutes = () => {
	return (
		<Router
			history={browserHistory} 
			routes={routes} />
	);
};

export default AppRoutes;