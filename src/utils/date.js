export const changeDateFormat = (oldFormat) => {
	const newDate = new Date(oldFormat);
	const option = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};
	return newDate.toLocaleDateString("en-EN", option);
};
