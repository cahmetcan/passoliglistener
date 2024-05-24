import { getCategories, getMatches, getAvailable } from './functions';

export default {
	/* 	async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
		const result = await getAvailable();
		const chairs = result.valueList;

		console.log('Total chairs:', result);

		if (chairs.length > 0) {
			console.log('Chairs available:', chairs.length);
		}
	}, */

	async fetch(request: Request) {
		try {
			const matches = await getMatches();
			// return Response.json(matches);

			if (matches.isError) throw new Error('Failed to fetch data');

			const availableList: any[] = [];
			for (const match of matches.valueList) {
				const { seoUrl, id, eventType } = match;
				if (eventType == 1) continue;

				const categories = await getCategories(seoUrl, id);
				if (!categories) continue;

				for (const category of categories.value.categories) {
					const available = await getAvailable(id, category.id);
					if (!available) continue;
					if (available.valueList.length > 0) {
						console.log('Available:', available.valueList.length);
						availableList.push({
							eventId: id,
							categoryId: category.id,
							categoryName: category.name,
							available: available.valueList.length,
						});
					}

					await new Promise((resolve) => setTimeout(resolve, 1000));
				}

				await new Promise((resolve) => setTimeout(resolve, 1000));
			}

			return Response.json(availableList);
		} catch (error: any) {
			return Response.json(
				{
					message: 'An error occurred',
					error: error.message,
				},
				{ status: 500 }
			);
		}
	},
};
