import { useEffect } from "react";
import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = sanityClient({
	projectId: "mhwasjzp",
	dataset: "production",
	useCdn: false,
});

export const useFetch = (setFetch) => {
	const query =
		"*[_type in ['product', 'category']]{title, _type, category, image, description, price, _createdAt }";

	useEffect(() => {
		client.fetch(query).then((res) => setFetch(res));
		// eslint-disable-next-line
	}, []);
};

export const builder = imageBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};

export const splitCatPro = (fetch, choice) => {
	if (choice === "cat") {
		return fetch.filter((obj) => obj._type === "category");
	} else {
		return fetch.filter((obj) => obj._type === "product");
	}
};

export const getClient = (id) => client.getDocument(id);
/* useEffect(() => {
		let temp;
		client.getDocument(id).then((res) => (temp = res));
		return temp;
		// eslint-disable-next-line
	}, []); */

export const placeholder = [
	{
		_createdAt: "2020-09-11T16:48:10Z",
		_type: "category",
		title: "Stickers",
	},
	{
		_createdAt: "2020-09-11T16:48:04Z",
		_type: "category",
		title: "Posters",
	},
	{
		_createdAt: "2020-09-11T17:05:56Z",
		_type: "product",
		category: {
			_ref: "134d80e7-54cb-47a2-9703-899664793322",
			_type: "reference",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-4a8e69de583e7e9ea1d4f66a96ce0fa5902d0f9a-525x525-png",
				_type: "reference",
			},
		},
		price: 9.99,
		title: "Sticker_2",
	},
	{
		_createdAt: "2020-09-11T16:39:10Z",
		_type: "product",
		category: {
			_ref: "134d80e7-54cb-47a2-9703-899664793322",
			_type: "reference",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-7d2a89145f350995e259f049d3344531e92b70d6-416x524-png",
				_type: "reference",
			},
		},
		price: 9.99,
		title: "Sticker_1",
	},
	{
		_createdAt: "2020-09-14T00:41:35Z",
		_type: "product",
		category: {
			_ref: "7d981234-c1b4-40a4-80f6-60c30dc481c0",
			_type: "reference",
		},
		description: "sdfwesfxgs",
		image: {
			_type: "image",
			asset: {
				_ref: "image-fa35469a475a56cf536ac240ddb0d0ceb081b627-1080x608-jpg",
				_type: "reference",
			},
		},
		price: 99.99,
		title: "Poster_5",
	},
	{
		_createdAt: "2020-09-11T16:17:14Z",
		_type: "product",
		category: {
			_ref: "7d981234-c1b4-40a4-80f6-60c30dc481c0",
			_type: "reference",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-b70c1c8703728ae77abebb6947fcfca8a07812f3-864x1080-jpg",
				_type: "reference",
			},
		},
		price: 99.99,
		title: "Poster_1",
	},
	{
		_createdAt: "2020-09-13T23:25:14Z",
		_type: "product",
		category: {
			_ref: "7d981234-c1b4-40a4-80f6-60c30dc481c0",
			_type: "reference",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-18ca555fa5940a6d27fc252453223dfe9c7b8515-864x1080-jpg",
				_type: "reference",
			},
		},
		price: 99.99,
		title: "Poster_4",
	},
	{
		_createdAt: "2020-09-11T16:32:11Z",
		_type: "product",
		category: {
			_ref: "7d981234-c1b4-40a4-80f6-60c30dc481c0",
			_type: "reference",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-80083e2c8338265e1d014787d50a64cc90257e3e-720x1080-jpg",
				_type: "reference",
			},
		},
		price: 99.99,
		title: "Poster_2",
	},
	{
		_createdAt: "2020-09-11T18:30:55Z",
		_type: "product",
		category: {
			_ref: "7d981234-c1b4-40a4-80f6-60c30dc481c0",
			_type: "reference",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image: {
			_type: "image",
			asset: {
				_ref: "image-d2369b30885a9d7cbe2889bbe6e92b354b146d2d-864x1080-jpg",
				_type: "reference",
			},
		},
		price: 99.99,
		title: "Poster_3",
	},
];
