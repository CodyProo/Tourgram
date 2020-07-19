import React from 'react';
import {
	List,
	ListItemAvatar,
	ListItemText,
	ListItem,
	Avatar,
	Typography,
	Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AvatarURL from 'assets/images/avatar2.png';
import NotificationContainer from './NotificationContainer';

const useStyles = makeStyles({
	moreDetails: {
		fontSize: 14,
		fontFamily: 'iran-yekan-medium',
		color: '#3b86ff',
		textAlign: 'center',
	},

	lastListChild: {
		border: 'none',
		marginTop: 5,
	},

	avatarURLStyles: {
		height: 40,
		width: 40,
	},
	boldText: {
		fontFamily: 'iransans',
		fontWeight: 'bolder',
	},
	cardTitle: {
		fontSize: 13,
		color: '#4d565c',
		fontFamily: 'iransans',
		fontWeight: 400,
	},
	cardTimes: {
		fontSize: 11,
		fontFamily: 'iran-yekan-light',
		direction: 'ltr',
		color: '#808495',
		fontWeight: 100,
	},
	titlebar: {
		textAlign: 'right',
		fontSize: 18,
		fontFamily: 'iran-yekan-regular',
		color: '#4d4f5c',
	},

	listStyles: {
		borderBottom: '1px solid #eee',
	},
});

const ChatNotification = ({ isOpen }) => {
	const styles = useStyles();
	if (isOpen) {
		return (
			<NotificationContainer>
				<List>
					<ListItem className={styles.listStyles}>
						<Typography variant='h1' className={styles.titlebar}>
							پیام ها
						</Typography>
					</ListItem>
					<ListItem className={styles.listStyles}>
						<ListItemAvatar>
							<Avatar className={styles.avatarURLStyles} src={AvatarURL} />
						</ListItemAvatar>
						<ListItemText>
							<Box textAlign='right'>
								<h4 className={styles.cardTitle}>
									<b className={styles.boldText}>David Lee</b> sent you a
									message.
								</h4>
								<h6 className={styles.cardTimes}>4 Min ago</h6>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.listStyles}>
						<ListItemAvatar>
							<Avatar className={styles.avatarURLStyles} src={AvatarURL} />
						</ListItemAvatar>
						<ListItemText>
							<Box textAlign='right'>
								<h4 className={styles.cardTitle}>
									<b className={styles.boldText}>Alex Johnson</b> sent you a
									message.
								</h4>
								<h6 className={styles.cardTimes}>4 Min ago</h6>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.listStyles}>
						<ListItemAvatar>
							<Avatar className={styles.avatarURLStyles} src={AvatarURL} />
						</ListItemAvatar>
						<ListItemText>
							<Box textAlign='right'>
								<h4 className={styles.cardTitle}>
									<b className={styles.boldText}>Jonathan Chen</b> sent you
									mail.
								</h4>
								<h6 className={styles.cardTimes}>4 Min ago</h6>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.listStyles}>
						<ListItemAvatar>
							<Avatar className={styles.avatarURLStyles} src={AvatarURL} />
						</ListItemAvatar>
						<ListItemText>
							<Box textAlign='right'>
								<h4 className={styles.cardTitle}>
									<b className={styles.boldText}>David Lee</b> sent you a
									message.
								</h4>
								<h6 className={styles.cardTimes}>4 Min ago</h6>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.lastListChild}>
						<ListItemText>
							<h3 className={styles.moreDetails}>نمایش بیشتر</h3>
						</ListItemText>
					</ListItem>
				</List>
			</NotificationContainer>
		);
	}

	return null;
};

export default ChatNotification;
