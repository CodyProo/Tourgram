import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
	HelperTitle,
	HelperText,
} from 'components/accounting/components/certificate/CertificateText';
import CertificateImageBox from 'components/accounting/components/certificate/CertificateImageBox';
import Avatar2 from 'assets/images/types/one.png';

const useStyles = makeStyles({
	rootImage: {
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	},
});

const Certificate = () => {
	const styles = useStyles();
	return (
		<Box
			display='flex'
			justifyContent='flex-start'
			alignItems='center'
			width='100%'>
			<CertificateImageBox>
				<img src={Avatar2} className={styles.rootImage} />
			</CertificateImageBox>
			<Box display='flex' flexDirection='column'>
				<HelperTitle>2.تصویر مجوز بند ب گردشگری</HelperTitle>
				<HelperText>حداقل اندازه تصویر : 850px * 850px</HelperText>
				<HelperText>حداکثر حجم تصویر 300 کیلوبایت</HelperText>
				<HelperText>فرمت مجاز ( JPEG| JPG | PNG )</HelperText>
			</Box>
		</Box>
	);
};

export default Certificate;
