console.log(import.meta.env.VITE_PUBLIC_TIMESTAMP);

const createTimeStamp = () => {
	if (!import.meta.env.VITE_PUBLIC_TIMESTAMP) {
		return null;
	}

	const now = new Date(Number(import.meta.env.VITE_PUBLIC_TIMESTAMP) * 1000);
	const locale = "es-VE";
	const printTimeStampOptions: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	};

	const printTimestamp = new Intl.DateTimeFormat(
		locale,
		printTimeStampOptions,
	).format(now);

	const dateTimestamp = now.toISOString();

	return {
		printTimestamp,
		dateTimestamp,
	};
};

const footerTimeElement = document.querySelector("footer p time");

const timeStamp = createTimeStamp();

if (footerTimeElement && timeStamp) {
	const { printTimestamp, dateTimestamp } = timeStamp;
	footerTimeElement.textContent = printTimestamp;
	footerTimeElement.setAttribute("datetime", dateTimestamp);
}
