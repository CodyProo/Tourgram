export const getStep = () => {
	return [
		'تکمیل پروفایل کاری',
		'تنظیم صفحه شخصی',
		'اطلاعات حساب بانکی',
		'ارسال مدارک هویتی',
	];
};

export const getStepContent = (step) => {
	switch (step) {
		case 1:
			return 'اطلاعات پروفایل کاری';
		case 2:
			return 'نتظیم آدرس دلخواه';
		case 3:
			return 'افزودن حساب بانکی';
		case 4:
			return 'ارسال مدارک';
		default:
			return 'خطا';
	}
};
