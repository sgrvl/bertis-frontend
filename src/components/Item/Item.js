import React from "react";
import { urlFor } from "../utils";
/* import styled from "styled-components";

const Image = styled.img``; */

const Item = ({ url, width }) => {
	return <img src={urlFor(url).width(width).url()} alt="pictures" />;
};

export default Item;
