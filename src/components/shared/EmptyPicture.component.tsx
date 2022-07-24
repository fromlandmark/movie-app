import { HiPhotograph } from "react-icons/hi";
import styled from "styled-components";

const EmptyThumbnail = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	aspect-ratio: 9/16;
	background: #343030;
`;

export const EmptyPicture = () => {
	return (
		<EmptyThumbnail className="picture">
			<HiPhotograph></HiPhotograph>
		</EmptyThumbnail>
	);
};
