import React from "react";
import styled from "styled-components";
import logo from "../../images/bertis_logo.png";

const List = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
`;

const Item = styled.li`
	margin: 1em;
`;

const Header = () => {
	return (
		<nav>
			<List>
				<Item>
					<img src={logo} alt="Logo Bertis" />
				</Item>
				<Item>Categories</Item>
				<Item>Back to main</Item>
			</List>
		</nav>
	);
};

export default Header;
