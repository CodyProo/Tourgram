import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: -25,
		color: '#fff',
		left: '10%',
		fontSize: 40,
	},
});

const CaretUpComponent = () => {
	const styles = useStyles();
	return <FontAwesomeIcon className={styles.root} icon={faCaretUp} />;
};

export default CaretUpComponent;
