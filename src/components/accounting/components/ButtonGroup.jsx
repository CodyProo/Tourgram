import React from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NextIcon from 'assets/images/next.png';

const useStyles = makeStyles({
	continue: {
		width: 120,
		height: 40,
		background:
			'transparent linear-gradient(270deg, #0CC34A 0%, #33AC5C 100%) 0% 0% no-repeat padding-box',
		borderRadius: 3,
		fontSize: 14,
		fontFamily: 'iransans',
		color: '#FFFFFF',
	},
	prevStep: {
		width: 114,
		height: 40,
		background:
			'transparent linear-gradient(270deg, #EBEBEB 0%, #E6E6E6 100%) 0% 0% no-repeat padding-box',
		borderRadius: 3,
		fontSize: 14,
		fontFamily: 'iransans',
		color: '#656181',
		marginLeft: 10,
	},
	returnHome: {
		width: 166,
		height: 40,
		background:
			'transparent linear-gradient(270deg, #EBEBEB 0%, #E6E6E6 100%) 0% 0% no-repeat padding-box',
		borderRadius: 3,
		fontSize: 14,
		fontFamily: 'iransans',
		color: '#656181',
	},
	ImageIcon: {
		width: 10,
		height: 10,
		marginLeft: 10,
	},
	root: {
		position: 'absolute',
		top: '90%',
		left: 0,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 50,
	},
});

const ButtonGroup = ({ next, prev, back, level }) => {
	const styles = useStyles();
	return (
		<Box className={styles.root}>
			<Button onClick={back} className={styles.returnHome}>
				بازگشت به صفحه اصلی
			</Button>
			<Box>
				{level > 1 && (
					<Button onClick={prev} className={styles.prevStep}>
						<img src={NextIcon} className={styles.ImageIcon} />
						مرحله قبل
					</Button>
				)}
				<Button onClick={next} className={styles.continue}>
					ثبت و ادامه
				</Button>
			</Box>
		</Box>
	);
};

export default ButtonGroup;
