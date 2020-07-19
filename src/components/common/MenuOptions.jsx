import React from 'react';
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	Typography,
	Box,
	ListItemText,
	ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCog,
	faPowerOff,
	faUser,
	faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import CaretUpComponent from './CaretUp';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: 0,
		left: 0,
	},
	card: {
		position: 'absolute',
		width: 267,
		background: '#ffffff',
		boxShadow: '0px 2px 10px #00000027',
		zIndex: 999,
		top: '90%',
		left: 0,
	},
	menuListItems: {
		borderBottom: '1px solid #eee',
	},
	avatarStyles: {
		border: '2px solid #ffffff',
		height: 50,
		width: 50,
	},
	usernameList: {
		fontSize: 13,
		fontFamily: 'iran-yekan-regular',
	},
	phoneList: {
		marginTop: 5,
		fontSize: 12,
		fontFamily: 'iran-yekan-regular',
	},
	menuListIcons: {
		fontSize: 16,
		fill: '#4d4f5c',
	},
	IconCenter: {
		minWidth: 30,
	},
	MenuItems: {
		width: '80%',
		margin: 'auto',
		textAlign: 'right',
		padding: '20px 0',
	},
	MenuItemsText: {
		fontSize: 14,
		fontFamily: 'iran-yekan-regular',
	},
	textMuted: {
		color: '#4d4f5c',
	},
});

const MenuOptions = ({ isOpen, toggle }) => {
	const styles = useStyles();
	if (isOpen) {
		return (
			<Box className={styles.root} onClick={toggle}>
				<Box className={styles.card}>
					<CaretUpComponent />
					<List>
						<ListItem className={[styles.menuListItems, styles.MenuItems]}>
							<ListItemAvatar>
								<Avatar className={styles.avatarStyles} />
							</ListItemAvatar>
							<ListItemText>
								<Box textAlign='right'>
									<Typography
										className={[styles.usernameList, styles.textMuted]}
										variant='h3'>
										احسان گودرزی
									</Typography>
									<Typography
										className={[styles.phoneList, styles.textMuted]}
										variant='body1'>
										09151206735
									</Typography>
								</Box>
							</ListItemText>
						</ListItem>
						{/*  */}
						<ListItem className={[styles.menuListItems, styles.MenuItems]}>
							<Box display='flex' flexDirection='column'>
								<Box display='flex' alignItems='center'>
									<ListItemIcon className={styles.IconCenter}>
										<FontAwesomeIcon
											icon={faAddressCard}
											className={styles.menuListIcons}
										/>
									</ListItemIcon>
									<ListItemText>
										{/* <Link
										to='/EditAccount/AccountingInformation'
										className='link'> */}
										<Typography
											className={[styles.MenuItemsText, styles.textMuted]}>
											پروفایل کاری من
										</Typography>
										{/* </Link> */}
									</ListItemText>
								</Box>
								<Box display='flex' alignItems='center' pt={1}>
									<ListItemIcon className={styles.IconCenter}>
										<FontAwesomeIcon
											icon={faUser}
											className={styles.menuListIcons}
										/>
									</ListItemIcon>
									<ListItemText>
										<Typography
											className={[styles.MenuItemsText, styles.textMuted]}>
											حساب کاربری من
										</Typography>
									</ListItemText>
								</Box>
								<Box display='flex' alignItems='center' pt={1}>
									<ListItemIcon className={styles.IconCenter}>
										<FontAwesomeIcon
											icon={faCog}
											className={styles.menuListIcons}
										/>
									</ListItemIcon>
									<ListItemText>
										<Typography
											className={[styles.MenuItemsText, styles.textMuted]}>
											تنظیمات
										</Typography>
									</ListItemText>
								</Box>
							</Box>
						</ListItem>
						<ListItem className={styles.MenuItems}>
							<Box display='flex' alignItems='center'>
								<ListItemIcon className={styles.IconCenter}>
									<FontAwesomeIcon
										icon={faPowerOff}
										className={styles.menuListIcons}
									/>
								</ListItemIcon>
								<ListItemText>
									<Typography
										className={[styles.MenuItemsText, styles.textMuted]}>
										خروج از سیستم
									</Typography>
								</ListItemText>
							</Box>
						</ListItem>
					</List>
				</Box>
			</Box>
		);
	}
	return null;
};

export default MenuOptions;
