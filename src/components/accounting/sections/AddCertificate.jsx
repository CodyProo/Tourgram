import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SectionTitle from 'components/accounting/components/SectionTitle';
import Certificate from 'components/accounting/components/certificate/Certificate';
import AddNewCertificate from 'components/accounting/components/certificate/AddCertificate';

const useStyles = makeStyles({
	captionStyle: {
		fontSize: 14,
		fontFamily: 'iransans',
		color: '#656181',
		paddingTop: 10,
	},
});

const AddCertificate = ({ children }) => {
	const styles = useStyles();
	return (
		<Box>
			<SectionTitle>تصویر مدارک ها و مجوز ها</SectionTitle>
			<Typography className={styles.captionStyle} variant='body2'>
				طبق قوانین سازمان میراث فرهنگی و گردشگری و جهت جلوگیری از سوء استفاده
				های احتمالی، مدارک شما الزامی می باشد. همچنین جهت اعتماد کاربران، عنوان
				مدارک ارسالی، در صفحه تورگرام شما نیز ذکر خواهد شد
			</Typography>
			<Grid container>
				<Grid item xl={4} lg={4} md={6} sm={12}>
					<Box mt={5}>
						<AddNewCertificate />
					</Box>
				</Grid>
				<Grid item xl={4} lg={4} md={6} sm={12}>
					<Box mt={5}>
						<Certificate />
					</Box>
				</Grid>
			</Grid>
			{children}
		</Box>
	);
};

export default AddCertificate;
