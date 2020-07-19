import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import { faUser, faComments, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'assets/images/avatar2.png';
import Container from 'base/Container';
import { makeStyles } from '@material-ui/core/styles';
import ChatNotification from 'components/common/ChaNotification';
import AlarmNotification from 'components/common/AlarmNotification';
import MenuOptions from 'components/common/MenuOptions';

const useStyles = makeStyles({
	iconbar: {
		width: 50,
		height: 50,
		fontSize: 20,
		color: '#8D91A8',
		position: 'relative',
		zIndex: 999,
	},
	phoneNumber: {
		fontSize: 16,
		fontFamily: 'iransans',
		color: '#8D91A8',
	},
	appbar: {
		height: 70,
	},
});

const AppbarComponent = () => {
	const styles = useStyles();
	//Notification For Comments
	const [ChatState, SetChatState] = React.useState(false);
	const handleChateState = () => {
		SetChatState((prev) => !prev);
		SetAlarmState(false);
		ChangeMenuState(false);
	};

	//Notification For Alarm and Bellls
	const [AlarmState, SetAlarmState] = React.useState(false);
	const handleAlarmState = () => {
		SetAlarmState((prev) => !prev);
		SetChatState(false);
		ChangeMenuState(false);
	};

	//Menu Options
	const [MenuState, ChangeMenuState] = React.useState(false);
	const handleMenuState = () => {
		SetAlarmState(false);
		SetChatState(false);
		ChangeMenuState((prev) => !prev);
	};

	return (
		<Box className={styles.appbar}>
			<AppBar position='relative' color='transparent'>
				<Container>
					<Toolbar>
						<Box>
							<h1 className='Appbar-logo'>TOURGRAM</h1>
						</Box>
						<Box
							className='Appbar-icon'
							display='flex'
							alignItems='center'
							mr='auto'>
							<Box display='flex' alignItems='center'>
								<h1 className={styles.phoneNumber} variant='body1'>
									051-35835345
								</h1>
								<IconButton className={styles.iconbar}>
									<FontAwesomeIcon icon={faUser} />
								</IconButton>
							</Box>
							<IconButton
								onClick={handleAlarmState}
								className={[styles.iconbar, 'noti-sign']}>
								<AlarmNotification
									toggle={handleAlarmState}
									isOpen={AlarmState}
								/>
								<FontAwesomeIcon icon={faBell} />
							</IconButton>
							<IconButton
								onClick={handleChateState}
								className={[styles.iconbar, 'noti-sign']}>
								<ChatNotification
									isOpen={ChatState}
									toggle={handleChateState}
								/>
								<FontAwesomeIcon icon={faComments} />
							</IconButton>
							<img
								src={Avatar}
								onClick={handleMenuState}
								className='Appbar-avatar'
							/>
							<MenuOptions isOpen={MenuState} toggle={handleMenuState} />
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default AppbarComponent;
