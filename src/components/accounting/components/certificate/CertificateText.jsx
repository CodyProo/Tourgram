import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	textMuted: {
		color: '#656181',
	},
	helperTitle: {
		fontSize: 14,
		fontFamily: 'iran-yekan',
		padding: 10,
	},

	helperText: {
		fontSize: 12,
		fontFamily: 'iransans',
		padding: '5px 10px',
	},
});

export const HelperText = ({ children }) => {
	const styles = useStyles();
	return (
		<Typography
			className={[styles.textMuted, styles.helperText]}
			variant='body1'>
			{children}
		</Typography>
	);
};

export const HelperTitle = ({ children }) => {
	const styles = useStyles();
	return (
		<Typography className={[styles.helperTitle, styles.textMuted]} variant='h4'>
			{children}
		</Typography>
	);
};
