import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Button } from '@material-ui/core';
import OkImage from 'assets/images/Ok.png';
import FailImage from 'assets/images/close.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
	Card: {
		position: 'relative',
		width: 345,
		height: 180,
		background: '#FFFFFF',
		boxShadow: '0px 2px 10px #00000014',
		border: '1px solid #EFEFEF',
		borderRadius: 5,
	},
	CardBorder: {
		position: 'absolute',
		width: '100%',
		height: 6,
		background:
			'transparent linear-gradient(270deg, #4B7DAF 0%, #4AA9B9 100%) 0% 0% no-repeat padding-box',
		borderRadius: '10px 10px 0px 0px',
		opacity: 1,
		top: 0,
	},
	CardTitle: {
		height: 30,
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 'auto',
		paddingTop: 40,
	},

	BankLogo: {
		width: 28,
		height: 28,
	},

	BankNameText: {
		fontSize: 13,
		fontFamily: 'iransans',
		color: '#656181',
		paddingRight: 10,
	},

	statusText: {
		fontSize: 12,
		fontFamily: 'iransans',
		marginLeft: 10,
	},

	FailText: {
		color: '#FF6565',
	},
	SuccessText: {
		color: '#33AC5C',
	},
	statusImage: {
		height: 15,
		width: 15,
	},

	CardNumberBox: {
		width: 315,
		height: 31,
		background: '#EFEFEF 0% 0% no-repeat padding-box',
		opacity: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '30px auto 0 auto',
	},

	CardNumber: {
		fontSize: 20,
		fontFamily: 'iran-orc',
		color: '#656181',
	},

	ButtonSave: {
		width: 345,
		height: 31,
		background: '#F8F9FA 0% 0% no-repeat padding-box',
		borderRadius: '0px 0px 5px 5px',
		fontSize: 13,
		fontFamily: 'iransans',
		color: '#656181',
	},

	sender: {
		fontSize: 13,
		color: '#656181',
	},

	senderText: {
		fontFamily: 'iran-yekan-medium',
	},

	senderNumber: {
		fontFamily: 'iran-yekan-regular',
	},
});

const CardBank = ({ imageURL, status, num, sender, bankName }) => {
	const styles = useStyles();
	const url = status === 0 ? FailImage : OkImage;
	const StatusColor = status === 0 ? styles.FailText : styles.SuccessText;

	return (
		<Box className={styles.Card}>
			<Box className={styles.CardBorder}></Box>
			<Box className={styles.CardTitle}>
				<Box display='flex' alignItems='center'>
					<img className={styles.BankLogo} src={imageURL} />
					<Typography className={styles.BankNameText} variant='h1'>
						{bankName}
					</Typography>
				</Box>
				<Box display='flex'>
					<Typography className={[styles.statusText, StatusColor]} variant='h1'>
						{status === 0 ? 'تایید نشده' : 'تایید شده'}
					</Typography>
					<img className={styles.statusImage} src={url} />
				</Box>
			</Box>
			<Box className={styles.CardNumberBox}>
				<Typography className={styles.CardNumber} variant='h2'>
					{num}
				</Typography>
			</Box>
			<Box display='flex' alignItems='center' width='90%' py={2} mx={'auto'}>
				<Typography className={[styles.sender, styles.senderText]} variant='h3'>
					شماره حساب
				</Typography>
				<Typography
					className={[styles.sender, styles.senderNumber]}
					variant='body1'>
					{sender}
				</Typography>
			</Box>
			<Button className={styles.ButtonSave}>
				<FontAwesomeIcon icon={faPen} />
				<Box mr={1}>ویرایش حساب</Box>
			</Button>
		</Box>
	);
};

export default CardBank;
