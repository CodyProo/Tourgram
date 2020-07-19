import React from 'react';
import AppbarComponent from 'components/common/Appbar';

const Layout = ({ children }) => {
	return (
		<>
			<AppbarComponent />
			{children}
		</>
	);
};

export default Layout;
