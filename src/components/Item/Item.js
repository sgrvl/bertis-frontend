import React from "react";
import { urlFor } from "../utils";
import styled from "styled-components";

const Image = styled.img``;

const Item = ({ url, width }) => {
	return <Image src={urlFor(url).width(width).url()} width={width} />;
};

export default Item;
