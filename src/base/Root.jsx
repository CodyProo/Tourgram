import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const AccountingBuisness = React.lazy(() => import('pages/AccountingBuisness'));
const Home = React.lazy(() => import('pages/Home'));

const Root = () => {
	return (
		<Suspense fallback={<p>Loading ....</p>}>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/edit/account/buisness' component={AccountingBuisness} />
			</Switch>
		</Suspense>
	);
};

export default Root;
