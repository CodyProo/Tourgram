import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import Container from 'base/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	appbarWarning: {
		width: '100%',
		height: 70,
		background: '#F8CF53 0% 0% no-repeat padding-box',
		display: 'flex',
		alignItems: 'center',
	},
	appbarWarningText: {
		fontSize: 18,
		fontFamily: 'iran-yekan-medium',
		color: '#393744',
		margin: 0,
		padding: 0,
	},
	appbarWarningButton: {
		width: 120,
		height: 40,
		background: '#FFECB2FC 0% 0% no-repeat padding-box',
		boxShadow: '0px 3px 6px #00000029',
		borderRadius: 3,
		fontSize: 14,
		fontFamily: 'iransansmedium',
		color: '#393744',
	},
	mxAuto: {
		margin: 'auto 0',
	},
});

const WarningBar = () => {
	const styles = useStyles();

	return (
		<Box className={styles.appbarWarning}>
			<Container>
				<Grid container>
					<Grid className={styles.mxAuto} item xl={9} lg={9} md={9} sm={12}>
						<Typography className={styles.appbarWarningText}>
							کاربر گرامی، اطلاعات شما در وضعیت ناقص می باشد، جهت استفاده از
							تمام امکانات سایت لطفا ثبت نام خود را تکمیل نمایید
						</Typography>
					</Grid>
					<Grid item xl={3} lg={3} md={9} sm={12}>
						<Box width='100%' textAlign='left'>
							<Button className={styles.appbarWarningButton}>
								تکمیل ثبت نام
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default WarningBar;
