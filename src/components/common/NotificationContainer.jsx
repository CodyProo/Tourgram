import React from 'react';
import {
	Typography,
	Box,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CaretUpComponent from './CaretUp';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: 0,
		left: 0,
	},
	card: {
		position: 'absolute',
		top: '100%',
		left: '-70%',
		width: 460,
		background: '#ffffff',
		boxShadow: '0px 2px 10px #00000027',
	},
});

const NotificationContainer = ({ children }) => {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<Box className={styles.card}>
				<CaretUpComponent />
				{children}
			</Box>
		</Box>
	);
};

export default NotificationContainer;
