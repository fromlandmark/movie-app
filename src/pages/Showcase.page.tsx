import { useQuery } from "@tanstack/react-query";
import { ThemeLayout } from "../layout/ThemeLayout.layout";
import { fetchPopularMovies } from "../services/api";
import { useDrag } from "@use-gesture/react";
import { animated, interpolate, useSprings } from "@react-spring/web";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislike, like, moviesDate } from "../features/taste/tasteSlice";
import { Spinner } from "../components/shared/Spinner.component";
import { Deck, ShowCaseWrapper, WallStatistics } from "../styles/Showcase.styles";

const to = (i: number) => ({
	x: 0,
	y: i * -4,
	rot: -4 + Math.random() * 10,
	delay: i * 50,
});
const from = (_i: number) => ({ x: 0, rot: 0, y: -1000 });

const trans = (r: number, s: number) =>
	`perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export const ShowcasePage = () => {
	const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } = useQuery(["topRated"], () =>
		fetchPopularMovies("top_rated"),
	);

	// reducer
	const dispatch = useDispatch();
	const moviesStore = useSelector(moviesDate);

	// Card Gestures
	// Grab's Cards that has been removed.
	const [gone] = useState(() => new Set());

	// Initialize the Card Behaviour
	const [props, api] = useSprings(15, (i) => ({
		...to(i),
		from: from(i),
	}));

	const bind = useDrag(
		({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx], event, down }) => {
			const trigger = vx > 0.1;
			if (!active && trigger) gone.add(index);

			api.start((i) => {
				if (index !== i) return;
				const isGone = gone.has(index);
				const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;

				if (!down && isGone) {
					let selectedMovie = topRatedMovies.results[i];
					if (mx >= 0) {
						// Stores Liked Movies
						dispatch(like(selectedMovie));
					} else {
						// Stores Disliked Movies
						dispatch(dislike(selectedMovie));
					}
				}
				const rot = mx / 20 + (isGone ? xDir * 2 * vx : 0);
				return {
					x,
					rot,
					delay: undefined,
					config: { friction: 10, tension: 100 },
				};
			});
			if (!active && gone.size === topRatedMovies.results.length)
				setTimeout(() => {
					gone.clear();
					api.start((i) => to(i));
				}, 600);
		},
	);

	if (isLoadingTopRatedMovies) {
		return <Spinner></Spinner>;
	}

	return (
		<ThemeLayout>
			<ShowCaseWrapper>
				{props.map(({ x, y, rot }, i) => (
					<Deck key={i} style={{ x, y }}>
						<animated.div
							{...bind(i)}
							style={{
								transform: interpolate([rot], trans),
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundImage: `url(${
									process.env.REACT_APP_MOVIES_BASE_URL +
									"w500" +
									topRatedMovies.results[i].poster_path
								})`,
							}}
						/>
					</Deck>
				))}
			</ShowCaseWrapper>
			<WallStatistics>
				<div className="statistic" data-type="dislikes">
					<span>{moviesStore.dislikes.length}</span>
					<span>Dislikes</span>
				</div>
				<div className="statistic" data-type="likes">
					<span>{moviesStore.likes.length}</span>
					<span>Likes</span>
				</div>
			</WallStatistics>
		</ThemeLayout>
	);
};
