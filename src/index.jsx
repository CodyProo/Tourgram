import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import 'font-awesome/css/font-awesome.min.css';
import Root from 'base/Root';
import { BrowserRouter as Container } from 'react-router-dom';
ReactDOM.render(
	<Container>
		<Root />
	</Container>,
	document.getElementById('root')
);
