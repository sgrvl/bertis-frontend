import React from "react";
import { urlFor } from "../utils";

const Item = ({ fetch }) => {
	return (
		<div>
			<img src={urlFor(fetch[6].image).width(200).url()} alt="" />
		</div>
	);
};

export default Item;
