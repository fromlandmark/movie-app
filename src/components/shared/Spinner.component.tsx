import styled, { keyframes } from "styled-components";

const skScaleout = keyframes`0% {
    -webkit-transform: scale(0);
}
100% {
    -webkit-transform: scale(1);
    opacity: 0;
}`;

export const Spinner = styled.div`
	width: 40px;
	height: 40px;
	margin: 100px auto;
	background-color: #333;

	border-radius: 100%;
	animation: ${skScaleout} 1s infinite ease-in-out;
`;
