import React from "react";
import { urlFor } from "../utils";
import styled from "styled-components";

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
`;

const Item = ({ url }) => {
	return <Image src={urlFor(url).size(350, 350).fit("crop").url()} alt="" />;
};

export default Item;
