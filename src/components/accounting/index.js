import React from 'react';
import ProfileBuisness from './sections/BuisnessProfile';
import WebURLChange from './sections/WebURL';
import AddBank from './sections/AddBank';
import AddCertificate from './sections/AddCertificate';
import { Redirect } from 'react-router-dom';

const SectionHandler = ({ level, children }) => {
	const Handle = () => {
		switch (level) {
			case 1: {
				return <ProfileBuisness>{children}</ProfileBuisness>;
			}

			case 2: {
				return <WebURLChange>{children}</WebURLChange>;
			}

			case 3: {
				return <AddBank>{children}</AddBank>;
			}

			case 4:
				return <AddCertificate>{children}</AddCertificate>;
			default:
				return <Redirect to='/' />;
		}
	};

	return Handle();
};

export default SectionHandler;
