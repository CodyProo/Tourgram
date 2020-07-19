import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		width: 398,
		height: 317,
		borderRadius: 5,
		boxShadow: '0px 2px 15px #0000001a',
		marginTop: 120,
	},
	banner: {
		position: 'absolute',
		top: -80,
		left: '50%',
		transform: 'translateX(-50%)',
		width: 370,
		height: 212,
		borderRadius: 5,
	},
	card: {
		position: 'absolute',
		top: '40%',
		width: '80%',
		left: '50%',
		transform: 'translateX(-50%)',
		color: '#80868b',
	},
});

const CatagoryCard = ({ children, imageURL }) => {
	const styles = useStyles();
	return (
		<Grid item xl={3} lg={4} md={6} sm={12}>
			<Box className={styles.root}>
				<img className={styles.banner} src={imageURL} />
				<Box className={styles.card}>{children}</Box>
			</Box>
		</Grid>
	);
};

export default CatagoryCard;
