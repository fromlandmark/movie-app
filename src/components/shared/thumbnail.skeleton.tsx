import styled from "styled-components";

const Skeletons = styled.div`
	display: flex;
	gap: 16px;
	overflow: auto;
	width: 100%;
`;

const Skeleton = styled.div`
	background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
	padding: 8px;
	border-radius: 4px;
	height: 200px;
	width: 196px;
	animation: 1.5s shine linear infinite;
`;
export const ThumbnailSkeleton = () => {
	return (
		<Skeletons>
			{[...Array(3)].map((value: undefined, index: number) => (
				<Skeleton key={index}></Skeleton>
			))}
		</Skeletons>
	);
};
