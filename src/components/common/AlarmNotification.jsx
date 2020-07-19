import React from 'react';
import {
	Box,
	List,
	Typography,
	ListItemText,
	ListItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NotificationContainer from './NotificationContainer';

const useStyles = makeStyles({
	listStyles: {
		borderBottom: '1px solid #eee',
		padding: '10px 30px',
		background: '#fafafa',
	},
	firstAndlastItems: {
		background: 'none',
	},
	titlebar: {
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'iran-yekan-medium',
		color: '#4d4f5c',
	},
	ListItemUsername: {
		height: 20,
		textAlign: 'right',
		fontFamily: 'iran-yekan',
		fontSize: 13,
		color: '#4d4f5c',
	},
	captionStyles: {
		fontSize: 11,
		marginTop: 5,
		direction: 'ltr',
		fontFamily: 'iran-yekan-regular',
		textAlign: 'right',
		color: '#43425d',
	},
	moreDetails: {
		textAlign: 'center',
		fontSize: 14,
		fontFamily: 'iran-yekan-regular',
		color: '#3b86ff',
		marginTop: 5,
	},
});

const AlarmNotification = ({ isOpen }) => {
	const styles = useStyles();

	if (isOpen) {
		return (
			<NotificationContainer>
				<List>
					<ListItem className={[styles.listStyles, styles.firstAndlastItems]}>
						<ListItemText>
							<Typography variant='h3' className={styles.titlebar}>
								اعلان ها
							</Typography>
						</ListItemText>
					</ListItem>
					<ListItem className={styles.listStyles}>
						<ListItemText>
							<Box display='flex' flexDirection='column'>
								<Typography variant='h4' className={styles.ListItemUsername}>
									David Lee
								</Typography>
								<Typography variant='body1' className={styles.captionStyles}>
									Hey, I just read your message. How are you?
								</Typography>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.listStyles}>
						<ListItemText>
							<Box display='flex' flexDirection='column'>
								<Typography variant='h4' className={styles.ListItemUsername}>
									Alex Johnson
								</Typography>
								<Typography variant='body1' className={styles.captionStyles}>
									How is your day?
								</Typography>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.listStyles}>
						<ListItemText>
							<Box display='flex' flexDirection='column'>
								<Typography variant='h4' className={styles.ListItemUsername}>
									Jackie Berry
								</Typography>
								<Typography variant='body1' className={styles.captionStyles}>
									I will be unavailable until after 5pm today.
								</Typography>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem className={styles.listStyles}>
						<ListItemText>
							<Box display='flex' flexDirection='column'>
								<Typography variant='h4' className={styles.ListItemUsername}>
									Jonathan Chen
								</Typography>
								<Typography variant='body1' className={styles.captionStyles}>
									Are you available later today to chat?
								</Typography>
							</Box>
						</ListItemText>
					</ListItem>

					<ListItem styles={[styles.firstAndlastItems]}>
						<ListItemText>
							<Typography variant='body1' className={styles.moreDetails}>
								نمایش بیشتر
							</Typography>
						</ListItemText>
					</ListItem>
				</List>
			</NotificationContainer>
		);
	}

	return null;
};

export default AlarmNotification;
