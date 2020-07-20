import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SectionTitle from 'components/accounting/components/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PaymentModal from 'components/accounting/components/Payment';
import CardBank from 'components/accounting/components/CardBank';
import bankLogo from 'assets/images/bankLogo.png';

const useStyles = makeStyles({
	TextStyle: {
		fontSize: 14,
		fontFamily: 'iransans',
		color: '#656181',
		paddingTop: 20,
	},
	TextStyleDanger: {
		color: '#FF6565',
	},
	CardStyles: {
		width: 345,
		height: 179,
		background: '#F6F6F6 0% 0% no-repeat padding-box',
		border: '2px dashed #D9DCDF',
		borderRadius: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 54,
		color: '#D9DCDF',
	},
});

const AddBank = ({ children }) => {
	const styles = useStyles();
	const [PaymentState, ChangePaymentState] = React.useState(false);
	const handleChangePayment = () => ChangePaymentState((pre) => !pre);

	const DummyData = [
		{
			imageURL: bankLogo,
			status: 0,
			num: '5041-72**-****-1489',
			sender: '10-4926343-01',
			bankName: 'بانک رسالت',
		},
		{
			imageURL: bankLogo,
			status: 1,
			num: '5041-72**-****-1489',
			sender: '10-4926343-01',
			bankName: 'بانک رسالت',
		},
	];

	return (
		<Box>
			<SectionTitle>اطلاعات حساب بانکی</SectionTitle>
			<Typography className={styles.TextStyle} variant='body1'>
				<b className={styles.TextStyleDanger}>توجه : </b> مالکیت کارت های بانکی
				باید دقیقا مطابق با اطلاعات وارد شده در بخش پروفایل باشد، پس لطفا با دقت
				اطلاعات را وارد نمایید
			</Typography>
			<Box my={7}>
				<Grid container>
					<Grid item xl={4} lg={4} md={6} sm={12}>
						<Box
							mt={2}
							className={styles.CardStyles}
							onClick={handleChangePayment}>
							<FontAwesomeIcon icon={faPlus} />
						</Box>
						<PaymentModal open={PaymentState} toggle={handleChangePayment} />
					</Grid>
					{DummyData.map((element, index) => (
						<Grid key={index} item xl={4} lg={4} md={6} sm={12}>
							<Box mt={2}>
								<CardBank {...element} />
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
			{children}
		</Box>
	);
};

export default AddBank;
