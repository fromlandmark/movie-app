import { Button } from "./../components/shared/Button.component";
import styled from "styled-components";
export const EmptyMovieState = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 80vh;
	gap: 16px;
	img {
		width: 80%;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	row-gap: 12px;
`;

export const ScrollThumbnail = styled.a`
	background: #556767;
	padding: 8px;
	border-radius: 4px;
	margin: 0 6px;
	width: min-content;
	img {
		width: calc(100vw / 3 - 32px);
	}
	p {
		margin: 0;
		font-size: 14px;
		padding: 4px 0;
		text-align: left;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`;

export const CleanButton = styled(Button)`
	background: red;
	position: absolute;
	bottom: 90px;
`;
