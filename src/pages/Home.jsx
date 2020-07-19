import React from 'react';
import WarningBar from 'components/common/WarningBar';
import Catagories from 'components/home/Catagory';
import Layout from 'base/Layout';

const Home = () => {
	return (
		<Layout>
			<WarningBar />
			<Catagories />
		</Layout>
	);
};

export default Home;
