const model = {
	//app

	//input
	inputs: {
		searchField: "Harry Potter",
	},
	//data
	data: {
		items: [
			{
				mediaType: "movie", // or "tv show"
				title: "Harry Potter and the Philosopher's Stone",
				genre: ["fantasy", "adventure", "family"],
				rating: 7.6,
				released: 2001,
				numOfViews: 150000,
				duration: 152, //in minutes
				progression: 151,
				thumbnail: "img",
			},
			{
				mediaType: "movie", // or "tv show"
				title: "Harry Potter and the Chamber of Secrets",
				genre: ["fantasy", "adventure", "family"],
				rating: 7.6,
				released: 2001,
				numOfViews: 150000,
				duration: 152, //in minutes
				progression: 151,
				thumbnail: "img",
			},
			{
				mediaType: "movie", // or "tv show"
				title: "Band Of Brothers",
				genre: ["Documentary"],
				rating: 8.8,
				released: 2001,
				numOfViews: 150_000_000,
				duration: 543, //in minutes
				progression: 151,
				thumbnail: "cat.gif",
			},
			{
				mediaType: "movie", // or "tv show"
				title: "The Shawshank Redemption",
				genre: ["drama"],
				rating: 9.3,
				released: 1994,
				numOfViews: 2_600_000,
				duration: 136, //in minutes
				thumbnail: "it's_raining_men.png",
			},
			{
				mediaType: "series", // or "tv show"
				title: "Breaking Bad",
				genre: ["Suspense", "thriller", "Crime"],
				rating: 9.9,
				released: 2008,
				numOfViews: 9999999999999999999999,
				seasons: [
					{
						episodes: [
							{
								title: "pilot",
								duration: 50,
								progression: 48,
								rating: 10,
							},
							{
								title: "Cat's in the bag",
								duration: 48,
								progression: 40,
								rating: 10,
							},
						],
					},
					{
						episodes: [
							{
								title: "seven thirty seven",
								duration: 60,
								progression: 58,
								rating: 9.9,
							},
							{
								title: "Grilled",
								duration: 48,
								progression: 40,
								rating: 10,
							},
						],
					},
				],

				thumbnail: "https://flxt.tmsimg.com/assets/p185846_b_v8_ad.jpg",
			},
		],
	},
};

// CURSOR GARAGE //                                      //
