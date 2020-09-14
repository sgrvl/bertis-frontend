import React, { useState } from "react";
import Header from "./Header/Header";
import Grid from "./Item/Grid";
import { useFetch, placeholder, splitCatPro } from "./utils";

const App = () => {
	// eslint-disable-next-line
	const [fetch, setFetch] = useState(placeholder);
	//useFetch(setFetch);

	return (
		<div>
			<Header />
			{fetch && <Grid fetch={splitCatPro(fetch, "product")} />}
		</div>
	);
};

export default App;
