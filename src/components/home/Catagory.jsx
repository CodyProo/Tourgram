import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'base/Container';

//Images
import One from 'assets/images/types/one.png';
import Two from 'assets/images/types/two.png';
import Three from 'assets/images/types/three.png';
import Four from 'assets/images/types/four.png';
import Five from 'assets/images/types/five.png';
import Six from 'assets/images/types/six.png';

//Catagory Section
import CatagoryText from 'components/home/CatagoryText';
import CatagoryTitle from 'components/home/CatagoryTitle';
import CatagoryCard from './CatagoryCard';

const useStyles = makeStyles({
	LinkStyles: {
		fontSize: 16,
		fontFamily: 'iran-yekan-regular',
		color: '#3786c9',
		textDecoration: 'none',
		display: 'inline-block',
		paddingTop: 15,
	},
});

const Catagories = () => {
	const styles = useStyles();

	return (
		<Container>
			<Grid container>
				<CatagoryCard imageURL={Four}>
					<CatagoryTitle>میزبان این فعالیت باشید</CatagoryTitle>
					<Box display='flex' justifyContent='space-between'>
						<CatagoryText>تور</CatagoryText>
						<CatagoryText>4</CatagoryText>
					</Box>
					<CatagoryText>مسافران</CatagoryText>
					<CatagoryText>کنسلی ها</CatagoryText>
				</CatagoryCard>

				<CatagoryCard imageURL={Three}>
					<CatagoryTitle>میزبان اقامتگاه شوید</CatagoryTitle>
					<Box display='flex' justifyContent='space-between'>
						<CatagoryText>ویلا، سوئیت، آپارتمان</CatagoryText>
						<CatagoryText>25</CatagoryText>
					</Box>
					<CatagoryText>میهمانان</CatagoryText>
					<CatagoryText>کنسلی ها</CatagoryText>
				</CatagoryCard>

				<CatagoryCard imageURL={Two}>
					<CatagoryTitle>معرفی جاذبه گردشگری</CatagoryTitle>
					<CatagoryText>معرفی جاذبه جدید</CatagoryText>
					<a href='#' className={styles.LinkStyles}>
						ارسال تصاویر برای جاذبه
					</a>
				</CatagoryCard>

				<CatagoryCard imageURL={One}>
					<CatagoryTitle>مالی</CatagoryTitle>
					<CatagoryText>مدیریت کارتهای بانکی</CatagoryText>
					<CatagoryText>تراکنش ها</CatagoryText>
					<Box display='flex' justifyContent='space-between'>
						<CatagoryText>درخواست تسویه</CatagoryText>
						<CatagoryText>2.369.000 تومان</CatagoryText>
					</Box>
				</CatagoryCard>

				<CatagoryCard imageURL={Five}>
					<CatagoryTitle>فعالیت های من</CatagoryTitle>
					<CatagoryText>سفر های من</CatagoryText>
					<CatagoryText>امتیازات من</CatagoryText>
					<CatagoryText>خریدهای من</CatagoryText>
				</CatagoryCard>

				<CatagoryCard imageURL={Six}>
					<CatagoryTitle>گزارشات</CatagoryTitle>
					<CatagoryText>تور</CatagoryText>
					<CatagoryText>اقامتگاه</CatagoryText>
				</CatagoryCard>
			</Grid>
		</Container>
	);
};

export default Catagories;
