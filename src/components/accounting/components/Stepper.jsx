import React from 'react';
import { Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { getStep, getStepContent } from './StepData';

const Stepper = ({ level }) => {
	const StepLabel = getStep();

	return (
		<div className='stepper'>
			<Box
				display='flex'
				width={'80%'}
				mx={'auto'}
				alignItems='center'
				mb={5}
				className='register-logo'>
				<FontAwesomeIcon icon={faUser} />
				<h3>اطلاعات پروفایل کاربر</h3>
			</Box>
			{StepLabel.map((element, index) => {
				const sequenceItem = index + 1;
				const isActive = level === sequenceItem ? 'active' : null;
				const isComplete = level > sequenceItem ? 'complete' : null;
				const content = getStepContent(sequenceItem);

				return (
					<div className={`step ${isActive} ${isComplete}`}>
						<div className='status'>{sequenceItem}</div>
						<div className={`step-body ${isComplete}`}>
							<span className='step-label'>{element}</span>
							<Box
								width='100%'
								className='step-content'
								display='flex'
								alignItems='center'>
								<Box className='icon-stepper'>
									<FontAwesomeIcon icon={faCheck} />
								</Box>
								<span>{content}</span>
							</Box>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stepper;
