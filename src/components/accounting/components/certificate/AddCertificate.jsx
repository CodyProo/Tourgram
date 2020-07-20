import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
	HelperTitle,
	HelperText,
} from 'components/accounting/components/certificate/CertificateText';
import CertificateImageBox from 'components/accounting/components/certificate/CertificateImageBox';

const useStyles = makeStyles({
	rootIcon: {
		fontSize: 38,
		color: '#BCBCCB',
	},
});

const AddNewCertificate = () => {
	const styles = useStyles();
	const imageRef = React.useRef();
	const openDialog = () => imageRef.current.click();

	return (
		<Box
			display='flex'
			justifyContent='flex-start'
			width='100%'
			alignItems='center'>
			<CertificateImageBox handler={openDialog} type='new certificate'>
				<FontAwesomeIcon icon={faPlus} className={styles.rootIcon} />
			</CertificateImageBox>
			<Box display='flex' flexDirection='column'>
				<HelperTitle>1.تصویر کارت ملی مدیر آژانس</HelperTitle>
				<HelperText>حداقل اندازه تصویر : 200px * 200px</HelperText>
				<HelperText>حداکثر حجم تصویر 300 کیلوبایت</HelperText>
				<HelperText>فرمت مجاز ( JPEG| JPG | PNG )</HelperText>
			</Box>

			<input type='file' ref={imageRef} hidden />
		</Box>
	);
};

export default AddNewCertificate;
