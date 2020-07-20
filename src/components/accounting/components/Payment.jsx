import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
	Typography,
	TextField,
	Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	btnSave: {
		width: 120,
		height: 40,
		background: '#33AC5C 0% 0% no-repeat padding-box',
		borderRadius: 3,
		fontSize: 14,
		fontFamily: 'iran-yekan-regular',
		color: '#FFFFFF',
		marginTop: 30,
		'&:hover': {
			background: '#33ac5c9c',
		},
	},
	DialogTitleText: {
		fontSize: 15,
		fontFamily: 'iransans',
		color: '#656181',
	},

	DialogHeader: {
		height: 50,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottom: '1px solid #DADCE0',
	},
	DialogStyle: {
		width: 400,
	},
});

const PaymentModal = ({ open, toggle }) => {
	const styles = useStyles();
	const saveHandle = () => {
		alert('save data on database');
		toggle();
	};
	return (
		<Dialog open={open} className={'add-cart'}>
			<DialogContent className={styles.DialogStyle}>
				<Box className={styles.DialogHeader}>
					<Typography className={styles.DialogTitleText}>
						افزودن حساب بانکی
					</Typography>
					<i className='fa fa-close dialog-icon' onClick={toggle}></i>
				</Box>
				<Box>
					<Box mt={2}>
						<TextField label='نام بانک' fullWidth='100%' />
					</Box>
					<Box mt={2}>
						<TextField label='شماره حساب' fullWidth='100%' />
					</Box>
					<Box mt={2}>
						<TextField label='شماره کارت' fullWidth='100%' />
					</Box>
				</Box>
				<Button onClick={saveHandle} className={styles.btnSave}>
					ذخیره
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default PaymentModal;
