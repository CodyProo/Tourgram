import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import StickerImage from 'assets/images/sticker.png';

const useStyles = makeStyles({
	sticker: {
		height: 90,
		width: 90,
		opacity: 0.2,
	},
	text: {
		fontSize: 16,
		fontFamily: 'iransans',
		color: '#7B7C83',
		opacity: 0.6,
	},
});

const NoList = () => {
	const styles = useStyles();
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			width='100%'
			py={10}>
			<img src={StickerImage} className={styles.sticker} />
			<Typography className={styles.text} variant='body1'>
				لیستی موجود نیست
			</Typography>
		</Box>
	);
};

export default NoList;
