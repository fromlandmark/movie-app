import { animated } from "@react-spring/web";
import styled from "styled-components";

export const ShowCaseWrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const WallStatistics = styled.div`
	display: flex;
	gap: 32px;
	.statistic {
		padding: 6px 12px;
		border-radius: 4px;
		display: flex;
		gap: 8px;
		&[data-type="likes"] {
			background: blue;
		}
		&[data-type="dislikes"] {
			background: red;
		}
	}
`;

export const Deck = styled(animated.div)`
	position: absolute;
	width: 300px;
	height: 200px;
	will-change: transform;
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		touch-action: none;
		background-color: white;
		background-size: auto 85%;
		background-repeat: no-repeat;
		background-position: center center;
		width: 33vh;
		max-width: 300px;
		height: 65vh;
		max-height: 470px;
		will-change: transform;
		border-radius: 10px;
		box-shadow: 0 11.5px 20px -10px rgba(0, 0, 0, 0.2);
	}
`;
