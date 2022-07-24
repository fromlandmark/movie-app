import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/shared/Button.component";
import { cleanLikes, moviesDate } from "../features/taste/tasteSlice";
import { ThemeLayout } from "../layout/ThemeLayout.layout";
import { Headline } from "../styles/Typography";
import { CleanButton, EmptyMovieState, Grid, ScrollThumbnail } from "../styles/Wall.styles";

export const WallOfFamePage = () => {
	const moviesData = useSelector(moviesDate);
	const dispatch = useDispatch();

	return (
		<ThemeLayout>
			{moviesData.likes.length !== 0 ? (
				<>
					<Headline>Wall of Fame</Headline>
					<Grid>
						{moviesData.likes.map((movie: any) => (
							<ScrollThumbnail href={`movies/${movie.id}`} key={movie.id}>
								<img src={process.env.REACT_APP_MOVIES_BASE_URL + "w92" + movie.poster_path} alt="" />
								<p>{movie.original_title}</p>
							</ScrollThumbnail>
						))}
					</Grid>
					<CleanButton onClick={() => dispatch(cleanLikes())}>Clean Wall</CleanButton>
				</>
			) : (
				<EmptyMovieState>
					<img src="../assets/no_result.png" alt="" />
					<p>No Movies on the Wall of Fame</p>
					<Button as="a" href="/showcase">
						Add some here
					</Button>
				</EmptyMovieState>
			)}
		</ThemeLayout>
	);
};
