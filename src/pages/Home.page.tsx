import { useQuery } from "@tanstack/react-query";
import { ScrollableSection } from "../components/ScollableSection.component";
import { SearchTools } from "../components/shared/SearchTools.component";
import { ThemeLayout } from "../layout/ThemeLayout.layout";
import { fetchPopularMovies } from "../services/api";

export const HomePage = () => {
	const {
		data: popularMovies,
		isLoading: isLoadingPopularMovies,
		isFetched: hasFetchedPopular,
	} = useQuery(["popularMovies"], () => fetchPopularMovies("popular"));

	const {
		data: topRatedMovies,
		isLoading: isLoadingTopRatedMovies,
		isFetched: hasFetchedTopRated,
	} = useQuery(["topRated"], () => fetchPopularMovies("top_rated"));

	return (
		<ThemeLayout>
			<SearchTools></SearchTools>
			<ScrollableSection
				label="Popular"
				isLoading={isLoadingPopularMovies}
				items={popularMovies?.results}
				size="w154"
				fetched={hasFetchedPopular}
			></ScrollableSection>
			<ScrollableSection
				label="Top Rated"
				isLoading={isLoadingTopRatedMovies}
				items={topRatedMovies?.results}
				size="w154"
				fetched={hasFetchedTopRated}
			></ScrollableSection>
		</ThemeLayout>
	);
};
