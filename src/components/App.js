import React, { useState } from "react";
import Header from "./Header/Header";
import Grid from "./Item/Grid";
import { createGlobalStyle } from "styled-components";
import { useFetch, placeholder, getScrollbarWidth } from "./utils";

const GlobalStyle = createGlobalStyle`
	html {
    box-sizing: border-box;
    font-size: 16px;
		scroll-behavior: smooth;
		
  }

  *, *:before, *:after {
    user-select: none;
	  -webkit-tap-highlight-color: transparent;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;		
		overflow: ${(props) => (props.scroll ? "auto" : "hidden")};
		padding-right: ${(props) => (props.scroll ? "0" : `${getScrollbarWidth()}px`)}
  }

  ol, ul {
    list-style: none;
  }
`;

const App = () => {
	const [scroll, setScroll] = useState(true);
	// eslint-disable-next-line
	const [fetch, setFetch] = useState(placeholder);
	//useFetch(setFetch);

	return (
		<div>
			<Header />
			{fetch && <Grid fetch={fetch} setScroll={setScroll} />}
			<GlobalStyle scroll={scroll} />
		</div>
	);
};

export default App;
