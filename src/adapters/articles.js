const articlesAdapter = data => {
	if (Array.isArray(data)) {
		const articles = data.map(article => {
			return {
				image: article.image,
				title: article.title,
				shortDescription: article.short_description,
				date: article.published_at.date
					.split(' ')[0]
					.split('-')
					.reverse()
					.join('-'),
				lastNews: article.last_news,
			};
		});

		return articles;
	}

	return [];
};

export default articlesAdapter;
