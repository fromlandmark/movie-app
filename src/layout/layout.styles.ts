import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Theme = styled.main`
	background: linear-gradient(0deg, #252a2a, #434c4c);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	flex-wrap: wrap;
	padding-bottom: 72px;
`;

export const Main = styled.section`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-content: flex-start;
`;

// Top Bar Element
export const TopBarElement = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		height: 100%;
		display: flex;
		align-items: center;
		.logo {
			height: 50%;
		}
	}
`;

// Bottom Navigation
export const NavigationBar = styled.div`
	display: flex;
	justify-items: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	height: 64px;
	width: 100%;
	background: #252a2a;

	&::before {
		content: "";
		display: block;
		width: 100%;
		background: linear-gradient(90deg, #252a2a, #869999, #252a2a);
		height: 1px;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const NavLinkItem = styled(NavLink)`
	background: transparent;
	flex-grow: 1;
	border: 0;
	transition: all 0.8s;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	&:active {
		background: #d80e16;
	}
	&.active {
		* {
			color: #d80e16;
		}
	}
`;
