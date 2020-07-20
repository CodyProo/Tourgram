import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		width: 120,
		height: 120,
		background: '#FAFAFA 0% 0% no-repeat padding-box',
		borderRadius: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	rootDash: {
		border: '1px dashed #ACACBB',
	},

	rootSolid: {
		border: '1px solid #DADCE0',
	},
});

const CertificateImageBox = ({ children, type, handler }) => {
	const styles = useStyles();
	const typeProps = [
		styles.root,
		type === 'new certificate' ? styles.rootDash : styles.rootSolid,
	];
	return (
		<Box className={typeProps} onClick={handler}>
			{children}
		</Box>
	);
};

export default CertificateImageBox;
