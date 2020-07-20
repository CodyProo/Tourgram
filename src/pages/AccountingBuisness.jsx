import React from 'react';
import Layout from '../base/Layout';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Stepper from 'components/accounting/components/Stepper';
import Container from 'base/Container';
import SectionHandler from 'components/accounting';
import ButtonGroup from 'components/accounting/components/ButtonGroup';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		height: 924,
		width: '100%',
	},
	section: {
		position: 'absolute',
		top: 0,
		right: '23%',
		height: '100%',
		width: '80%',
		paddingTop: 60,
	},
});

const AccountingBuisness = ({ history }) => {
	const styles = useStyles();
	const [Level, ChangeLevel] = React.useState(1);
	const NextLevel = () => ChangeLevel((prev) => prev + 1);
	const PrevLevel = () => ChangeLevel((prev) => prev - 1);
	const backHome = () => history.push('/');

	return (
		<Layout>
			<Container>
				<Box className={styles.root}>
					<Stepper level={Level} />
					<Box className={'edit-container'}>
						<Box className={styles.section}>
							<SectionHandler level={Level}>
								<ButtonGroup
									level={Level}
									back={backHome}
									next={NextLevel}
									prev={PrevLevel}
								/>
							</SectionHandler>
						</Box>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
};

export default AccountingBuisness;
