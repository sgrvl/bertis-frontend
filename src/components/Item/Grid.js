import React, { useState, useEffect } from "react";
import Item from "./Item";
import Size from "./Size";
import styled from "styled-components";
import { ReactComponent as AddCart } from "../../images/add_shopping_cart.svg";
import { getClient } from "../utils";

const StyledGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2em;
`;

const ItemWrap = styled.div`
	position: relative;
	&:hover #info {
		opacity: 80%;
	}
`;

const Info = styled.div`
	background-color: white;
	width: 100%;
	height: 50px;
	position: absolute;
	bottom: 0;
	z-index: 9;
	opacity: 0%;
	transition: 0.5s;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > * {
		user-select: none;
		padding: 0 1em;
	}
	#cart {
		cursor: pointer;
	}
`;

const Grid = ({ fetch, setScroll }) => {
	const [price, setPrice] = useState([]);
	useEffect(() => {
		getClient(fetch[0].price._ref).then((res) => setPrice(res));
		// eslint-disable-next-line
	}, []);
	const [selected, setSelected] = useState(null);

	const handleClick = (i) => {
		setSelected(i.image);
		setScroll(false);
	};

	return (
		<>
			{selected && (
				<Size
					selected={selected}
					setSelected={setSelected}
					setScroll={setScroll}
					price={price.priceDimension}
				/>
			)}
			<StyledGrid>
				{fetch
					.sort((a, b) => (a._createdAt > b._createdAt ? -1 : 1))
					.map((i, index) => {
						return (
							<ItemWrap key={`Item #${index}`}>
								<Info id="info">
									<div>{i.title}</div>
									<AddCart id="cart" onClick={() => handleClick(i)} />
								</Info>
								<Item
									url={i.image}
									width={Math.round(window.innerWidth / 3) - 50}
								/>
							</ItemWrap>
						);
					})}
			</StyledGrid>
		</>
	);
};

export default Grid;
