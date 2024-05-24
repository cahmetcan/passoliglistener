type MatchType = {
	isFollowing: boolean;
	id: number;
	date: string;
	name: string;
	homePageImagePath: string;
	homeTeamName: string;
	endDate: string;
	isEntertainment: boolean;
	eventType: number;
	hashTagList: any[];
	priorty: number;
	venueID: number;
	venueName: string;
	venueSeoUrl: string;
	venueSeoTitle: string;
	venueSeoDescription: string;
	firstRGB: string;
	lastRGB: string;
	seoTitle: string;
	seoDescription: string;
	seoUrl: string;
	hideDate: boolean;
	showSecondSlider: boolean;
	secondSliderSortOrder: number;
	dontShowHomepage: boolean;
};
type ResponseType = {
	totalItemCount: number;
	valueList: MatchType[];
	isError: boolean;
	resultCode: number;
};

type CategoryType = {
	id: number;
	name: string;
	price: number;
	formattedPrice: string;
	color: string;
	priority: number;
	discountType: number;
	variantPriceValue: number;
	serviceFee: number;
};

type CategoryResponseType = {
	totalItemCount: number;
	value: {
		categories: CategoryType[];
	};
};

type availableResponseType = {
	totalItemCount: number;
	valueList: any[];
	isError: boolean;
	resultCode: number;
};
