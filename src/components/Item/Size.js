import React from "react";
import { ReactComponent as Close } from "../../images/x.svg";
import { urlFor } from "../utils";
import styled from "styled-components";

const Wrap = styled.div`
	position: fixed;
	z-index: 999;
	width: 60vw;
	height: 85vh;
	background-color: white;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 2px;
`;

const Image = styled.img`
	width: 75%;
	height: auto;
	max-height: 70%;
	object-fit: contain;
	padding: 2em;
`;

const PriceWrap = styled.form`
	display: flex;
	flex-direction: column;
	height: 30%;
	justify-content: space-around;
`;

const Price = styled.label`
	font-size: 1.5em;
`;

const StyledClose = styled(Close)`
	position: absolute;
	right: 0;
	top: 0;
	padding: 5px;
	cursor: pointer;
`;

const AddtoCart = styled.button`
	cursor: pointer;
`;

const Size = ({ selected, setSelected, setScroll, price }) => {
	const handleClick = () => {
		setSelected(null);
		setScroll(true);
	};
	return (
		<Wrap>
			<StyledClose onClick={() => handleClick()} />
			<Image src={urlFor(selected).url()} alt="pictures" />
			<PriceWrap>
				{price.map((i, index) => {
					return (
						<div key={price[index]}>
							<input type="radio" value={i} id={price[index]} name="price" />
							<Price htmlFor={price[index]}>{i}</Price>
						</div>
					);
				})}
				<AddtoCart>Add to cart</AddtoCart>
			</PriceWrap>
		</Wrap>
	);
};

export default Size;
