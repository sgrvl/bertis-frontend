import { useEffect } from "react";
import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = sanityClient({
	projectId: "mhwasjzp",
	dataset: "production",
	useCdn: false,
});

export const useFetch = (setFetch) => {
	const query = "*[_type in ['product']]";

	useEffect(() => {
		client.fetch(query).then((res) => setFetch(res));
		// eslint-disable-next-line
	}, []);
};

export const builder = imageBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};

export const getClient = (id) => client.getDocument(id);

export const placeholder = [
	{
		_createdAt: "2020-09-14T20:57:54Z",
		_id: "8dafc4cb-23f1-478d-b0fc-2360032e4c97",
		_rev: "KUT3Su9licV7J9JxVIHcs2",
		_type: "product",
		_updatedAt: "2020-09-14T20:57:54Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-e82840e24287f0aec4ed343b09c7175ca444b49b-1080x608-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_7",
	},
	{
		_createdAt: "2020-09-14T20:57:28Z",
		_id: "a5c98a51-295d-41a3-acd3-5fbd8f3d65af",
		_rev: "TREZbCeJCRx4WmeIxO9GQQ",
		_type: "product",
		_updatedAt: "2020-09-14T20:57:28Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-b281d832ce1e2d590193146ebe586a3b7a2e0b67-1080x720-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_6",
	},
	{
		_createdAt: "2020-09-14T00:41:35Z",
		_id: "59807130-72ec-4857-8a6c-1da508748c14",
		_rev: "TREZbCeJCRx4WmeIxO9CzV",
		_type: "product",
		_updatedAt: "2020-09-14T20:57:00Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-fa35469a475a56cf536ac240ddb0d0ceb081b627-1080x608-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_5",
	},
	{
		_createdAt: "2020-09-13T23:25:14Z",
		_id: "60c18791-51b8-44cd-b1cf-9b1018b4982c",
		_rev: "TREZbCeJCRx4WmeIxO9C72",
		_type: "product",
		_updatedAt: "2020-09-14T20:56:55Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-18ca555fa5940a6d27fc252453223dfe9c7b8515-864x1080-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_4",
	},
	{
		_createdAt: "2020-09-11T18:30:55Z",
		_id: "9025a49d-e646-42be-90fc-f3dcead9c03c",
		_rev: "xCSeLm1tjZ2GZgEiYj7Voh",
		_type: "product",
		_updatedAt: "2020-09-14T20:56:42Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-d2369b30885a9d7cbe2889bbe6e92b354b146d2d-864x1080-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_3",
	},
	{
		_createdAt: "2020-09-11T16:32:11Z",
		_id: "7bb4ae72-44e5-4127-a660-b39dcba34b44",
		_rev: "KUT3Su9licV7J9JxVIHaOR",
		_type: "product",
		_updatedAt: "2020-09-14T20:56:30Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-80083e2c8338265e1d014787d50a64cc90257e3e-720x1080-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_2",
	},
	{
		_createdAt: "2020-09-11T16:17:14Z",
		_id: "5d0ec00c-fc0d-44b4-b4af-2d871fcf8e89",
		_rev: "KUT3Su9licV7J9JxVIHafh",
		_type: "product",
		_updatedAt: "2020-09-14T20:56:38Z",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-b70c1c8703728ae77abebb6947fcfca8a07812f3-864x1080-jpg",
				_type: "reference",
			},
		},
		price: {
			_ref: "8db9d190-ce00-4c71-823b-4c1ef16cc912",
			_type: "reference",
		},
		title: "Poster_1",
	},
];
