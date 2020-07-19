import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		fontSize: 16,
		fontFamily: 'iran-yekan-regular',
		marginTop: 15,
		fontWeight: 500,
	},
});

const CatagoryText = ({ children }) => {
	const styles = useStyles();
	return (
		<Typography className={styles.root} variant='body1'>
			{children}
		</Typography>
	);
};

export default CatagoryText;
