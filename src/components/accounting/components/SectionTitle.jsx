import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
	text: {
		fontSize: 15,
		fontFamily: 'iran-yekan',
		color: '#656181',
	},
});

const SectionTitle = ({ children }) => {
	const styles = useStyles();
	return <Typography className={styles.text}>{children}</Typography>;
};

export default SectionTitle;
