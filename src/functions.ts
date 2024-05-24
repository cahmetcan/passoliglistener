const getMatches = async () => {
	const result = await (
		await fetch('https://ticketingweb.passo.com.tr/api/passoweb/allevents', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				GenreId: '4615',
				LanguageId: 118,
				from: 0,
				size: 53,
			}),
		})
	).json();

	return result as ResponseType;
};

const getCategories = async (seoUrl: string, eventId: number) => {
	try {
		const url = `https://ticketingweb.passo.com.tr/api/passoweb/geteventdetails/${seoUrl}/${eventId}/118`;

		const response = await fetch(url);
		const status = response.status;
		if (status !== 200) throw new Error('Failed to fetch data' + status);
		const data = await response.json();
		return data as CategoryResponseType;
	} catch (error) {
		return false;
	}
};

const getAvailable = async (eventId: number, categoryId: number) => {
	try {
		const url = `https://cppasso.mediatriple.net/30s/api/passoweb/getavailableblocklist?eventId=${eventId}&serieId=&seatCategoryId=${categoryId}`;
		console.log(url);
		const response = await fetch(url);
		const status = response.status;
		if (status !== 200) throw new Error('Failed to fetch data' + status);

		const data = await response.json();
		return data as availableResponseType;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export { getMatches, getCategories, getAvailable };
