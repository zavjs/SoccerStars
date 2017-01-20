import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from 'components/Home';
import AthleteInner from 'components/Athlete/AthleteInner';
import Layout from 'components/Layout';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="athlete/:id/main" component={AthleteInner} />
	</Route>
);

export default routes;