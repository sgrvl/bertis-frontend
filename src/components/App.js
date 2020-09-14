import React, { useState } from "react";
import Header from "./Header/Header";
import Grid from "./Item/Grid";
import { useFetch, placeholder } from "./utils";

const App = () => {
	// eslint-disable-next-line
	const [fetch, setFetch] = useState(placeholder);
	//useFetch(setFetch);
	console.log(fetch);

	return (
		<div>
			<Header />
			{fetch && <Grid fetch={fetch} />}
		</div>
	);
};

export default App;
