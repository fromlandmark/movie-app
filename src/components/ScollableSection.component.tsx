import styled from "styled-components";
import { Movie } from "../types/Movie.type";
import { ThumbnailSkeleton } from "./shared/thumbnail.skeleton";

const ScrollableSectionWrapper = styled.section`
	display: inline-flex;
	flex-direction: column;
	align-items: start;
	flex-grow: 1;
	padding: 8px 0;
	.scrollable__title {
		font-size: 1.2rem;
		font-weight: 400;
		padding: 12px;
	}
`;

const ScrollableWrapper = styled.div`
	display: flex;
	padding: 12px;
	overflow: auto;
	max-width: calc(100vw);
`;

const ScrollThumbnail = styled.a`
	background: linear-gradient(0deg, #303737, #434c4c);
	padding: 8px;
	border-radius: 4px;
	margin: 0 6px;
	img {
		width: 128px;
	}
	p {
		margin: 0;
		padding: 4px 0;
		text-align: left;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`;

export const ScrollableSection = (props: any) => {
	if (props.isLoading) {
		return (
			<>
				<ScrollableSection>
					<h3 className="scrollable__title">{props.label}</h3>
					<ScrollableWrapper>
						<ThumbnailSkeleton></ThumbnailSkeleton>
					</ScrollableWrapper>
				</ScrollableSection>
			</>
		);
	}

	return (
		<ScrollableSectionWrapper>
			<h3 className="scrollable__title">{props.label}</h3>
			{props.fetched && (
				<ScrollableWrapper>
					{props.items.map((item: Movie) => (
						<ScrollThumbnail key={item.id}>
							<img src={process.env.REACT_APP_MOVIES_BASE_URL + props.size + item.poster_path} alt="" />
							<p>{item.original_title}</p>
						</ScrollThumbnail>
					))}
				</ScrollableWrapper>
			)}
		</ScrollableSectionWrapper>
	);
};
