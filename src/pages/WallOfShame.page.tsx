import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/shared/Button.component";
import { cleanDislikes, moviesDate } from "../features/taste/tasteSlice";
import { ThemeLayout } from "../layout/ThemeLayout.layout";
import { Headline } from "../styles/Typography";
import { CleanButton, EmptyMovieState, Grid, ScrollThumbnail } from "../styles/Wall.styles";
import { Movie } from "../types/Movie.type";

export const WallOfShamePage = () => {
	const moviesData = useSelector(moviesDate);
	const dispatch = useDispatch();

	return (
		<ThemeLayout>
			{moviesData.dislikes.length !== 0 ? (
				<>
					<Headline>Wall of Shame</Headline>
					<Grid>
						{moviesData.dislikes.map((movie: Movie) => (
							<ScrollThumbnail href={`movies/${movie.id}`} key={movie.id}>
								<img src={process.env.REACT_APP_MOVIES_BASE_URL + "w92" + movie.poster_path} alt="" />
								<p>{movie.original_title}</p>
							</ScrollThumbnail>
						))}
					</Grid>
					<CleanButton onClick={() => dispatch(cleanDislikes())}>Clean Wall</CleanButton>
				</>
			) : (
				<EmptyMovieState>
					<img src="../assets/no_result.png" alt="" />
					<p>No Movies on the Wall of Shame</p>
					<Button as="a" href="/showcase">
						Add some here
					</Button>
				</EmptyMovieState>
			)}
		</ThemeLayout>
	);
};
