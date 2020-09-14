import React from "react";
import logo from "../../images/bertis_logo.png";
import { ReactComponent as Cart } from "../../images/shopping-cart.svg";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Logo = styled.img``;

const Header = () => {
	return (
		<Nav>
			<Logo src={logo} alt="Logo Bertis" />
			<Cart />
		</Nav>
	);
};

export default Header;
