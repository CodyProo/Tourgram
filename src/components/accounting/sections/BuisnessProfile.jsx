import React from 'react';
import { Box, Typography, TextField, Grid, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SectionTitle from '../components/SectionTitle';
import Avatar2 from 'assets/images/avatar2.png';
import Close from 'assets/images/close.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faListOl, faListUl } from '@fortawesome/free-solid-svg-icons';
import city from 'city.json';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '70%',
		direction: 'rtl',
	},
	image_container: {
		position: 'relative',
		width: 85,
		height: 85,
		borderRadius: '50%',
		border: '2px solid #DADCE0',
	},

	image: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		height: '97%',
		width: '97%',
		borderRadius: '50%',
	},
	closeImage: {
		position: 'absolute',
		top: 5,
		left: 5,
		width: 15,
		height: 15,
	},

	cardButton: {
		width: 111,
		height: 30,
		border: '1px solid #BCBCCB',
		borderRadius: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '50px 20px 50px 0',
	},

	cardButtonText: {
		fontSize: 13,
		fontFamily: 'iransans',
		color: '#656181',
	},

	HalfWidth: {
		width: '50%',
	},
	CompleteWidth: {
		width: '100%',
	},

	TextHelper: {
		fontSize: 14,
		fontFamily: 'iransans',
		color: '#8D91A8',
	},
	IconOptions: {
		fontSize: 12,
		color: '#656181',
	},
	IconContainer: {
		width: 61,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '15px 0',
	},
	MarginInput: {
		marginTop: 20,
	},
});

const ProfileBuisness = ({ children }) => {
	const styles = useStyles();
	return (
		<Box className={styles.root}>
			<SectionTitle>اطلاعات پروفایل کاری</SectionTitle>
			<Box display='flex' alignItems='center'>
				<Box className={styles.image_container}>
					<img className={styles.image} src={Avatar2} />
					<img className={styles.closeImage} src={Close} />
				</Box>
				<Box className={styles.cardButton}>
					<Typography className={styles.cardButtonText}>تعویض لوگو</Typography>
				</Box>
			</Box>
			<form>
				<Grid container spacing={2}>
					<Grid item xl={12} lg={12} md={12} sm={12}>
						<TextField label='نام' className={styles.HalfWidth} />
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6}>
						<TextField
							select
							label='شهر'
							className={[styles.CompleteWidth, 'selectInput']}>
							{city.map((element) => (
								<MenuItem value={element}>{element}</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6}>
						<TextField
							label='شماره تلفن دفتر'
							className={styles.CompleteWidth}
						/>
					</Grid>
					<Grid item xl={12} lg={12} md={12} sm={12}>
						<TextField label='آدرس دفتر' className={styles.CompleteWidth} />
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6}>
						<TextField
							label='آدرس پست الکترونیکی'
							className={styles.CompleteWidth}
						/>
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6}>
						<TextField label='آدرس وب سایت' className={styles.CompleteWidth} />
					</Grid>
					<Grid item xl={12} lg={12} md={12} sm={12}>
						<Box py={2}>
							<Typography variant='h3' className={styles.TextHelper}>
								درباره باشگاه
							</Typography>
							<Box className={styles.IconContainer}>
								<FontAwesomeIcon className={styles.IconOptions} icon={faBold} />
								<FontAwesomeIcon
									className={styles.IconOptions}
									icon={faListOl}
								/>
								<FontAwesomeIcon
									className={styles.IconOptions}
									icon={faListUl}
								/>
							</Box>
							<TextField
								multiline
								rows={5}
								placeholder='شرکت تورگرام با بیش از چند دهه تجربه در زمینه گردشگری'
								className={styles.CompleteWidth}
							/>
						</Box>
					</Grid>
				</Grid>

				{children}
			</form>
		</Box>
	);
};

export default ProfileBuisness;
