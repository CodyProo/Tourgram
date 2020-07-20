import React from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from 'components/accounting/components/SectionTitle';

const useStyles = makeStyles({
	captionText: {
		fontSize: 14,
		fontFamily: 'iran-yekan-regular',
		color: '#656181',
		paddingTop: 20,
		paddingBottom: 30,
	},
	TextFieldStyle: {
		width: '50%',
		direction: 'ltr',
	},
	PlaceHolderOne: {
		fontSize: 12,
		fontFamily: 'iran-yekan-light',
		color: '#8D91A8',
	},
	PlaceHolderTwo: {
		fontSize: 13,
		fontFamily: 'iran-yekan-regular',
		color: '#FFC003',
		marginRight: 15,
	},
});
const WebURLChange = ({ children }) => {
	const styles = useStyles();
	return (
		<Box width='80%'>
			<SectionTitle>آدرس صفحه شخصی شما</SectionTitle>
			<Typography className={styles.captionText} variant='body1'>
				.آدرس تورگرام به منزله وب سایت گردشگری شما خواهد بود و تمام تورها و
				برنامه های شما در این صفحه نمایش داده خواهند شد .با وارد کردن نام دلخواه
				خود، صفحه تورگرام خود را بسازید
			</Typography>
			<form>
				<TextField
					className={styles.TextFieldStyle}
					label={
						<Box display='flex' dir='rtl'>
							<Typography className={styles.PlaceHolderOne} variant='body1'>
								آدرس تورگرام شما
							</Typography>
							<Typography className={styles.PlaceHolderTwo} variant='body1'>
								مشاهده سایت <FontAwesomeIcon icon={faExternalLinkAlt} />
							</Typography>
						</Box>
					}
				/>
				{children}
			</form>
		</Box>
	);
};

export default WebURLChange;
