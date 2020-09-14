import React from "react";
import Item from "./Item";
import styled from "styled-components";

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
	gap: 1em;
	padding: 1em;
`;

const ItemWrap = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 0;
	padding: 50% 0;
	position: relative;
	&:hover {
		opacity: 1;
		transition: 0.3s;
	}
`;

const Grid = ({ fetch }) => {
	return (
		<StyledGrid>
			{fetch
				.sort((a, b) => (a._createdAt > b._createdAt ? -1 : 1))
				.map((i, index) => {
					return (
						<ItemWrap key={`Item #${index}`} id="getSize">
							<Item url={i.image} />
						</ItemWrap>
					);
				})}
		</StyledGrid>
	);
};

export default Grid;
