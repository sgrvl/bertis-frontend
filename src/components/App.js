import React, { useState } from "react";
import Header from "./Header/Header";
import Item from "./Item/Item";

import { /* useFetch, */ placeholder } from "./utils";

const App = () => {
	// eslint-disable-next-line
	const [fetch, setFetch] = useState(placeholder);
	/* useFetch(setFetch); */

	return (
		<div>
			<Header />
			<Item fetch={fetch} />
		</div>
	);
};

export default App;

/*
{
  "_type": "product",
  "category": {
    "_ref": "134d80e7-54cb-47a2-9703-899664793322",
    "_type": "reference"
  },
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "image": {
    "_type": "image",
    "asset": {
      "_ref": "image-7d2a89145f350995e259f049d3344531e92b70d6-416x524-png",
      "_type": "reference"
    }
  },
  "price": 9.99,
  "title": "Sticker_1"
}
*/
