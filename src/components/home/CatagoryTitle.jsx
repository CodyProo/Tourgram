import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		fontSize: 24,
		fontFamily: 'iran-yekan-medium',
		paddingBottom: 10,
	},
});

const CatagoryTitle = ({ children }) => {
	const styles = useStyles();
	return (
		<Typography variant='h1' className={styles.root} variant='body1'>
			{children}
		</Typography>
	);
};

export default CatagoryTitle;
