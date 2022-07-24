import { useQuery } from "@tanstack/react-query";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../../hooks/useDebounce.hook";
import { fetchSearchResults } from "../../services/api";
import { HiSearch, HiStar, HiX, HiPhotograph } from "react-icons/hi";
import { EmptyPicture } from "./EmptyPicture.component";

const SearchContainer = styled.div`
	width: 100%;
	padding: 12px;
	display: flex;
	position: relative;
	flex-direction: column;
	gap: 16px;
	transition: all 0.4s;
	width: calc(100% - 32px);
	&.active {
		position: absolute;
		height: 100vh;
		background: rgba(0, 0, 0, 1);
		border-radius: 4px;
		top: 0;
		width: 100vw;
	}
`;

const SearchInputContainer = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	font-size: 14px;
	background: rgba(0, 0, 0, 1);
	border: 0.5px solid rgba(255, 255, 255, 1);
	border-radius: 4px;
	padding: 0 12px;
	gap: 8px;
`;
const SearchInput = styled.input`
	color: white;
	border: 0;
	flex-grow: 1;
	background: transparent;
	height: 48px;
	&:focus {
		outline: red;
	}
`;

const SearchResults = styled.div`
	//position: absolute;
	max-height: 100%;
	overflow: auto;
`;

const MovieItem = styled.div`
	display: flex;
	gap: 8px;
	height: 52px;
	margin: 12px 0;
	.movie_thumbnail {
		height: 100%;
	}
	.movie_information {
		overflow: hidden;
		.movie_title {
			margin: 0 0 4px 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.movie_details {
			display: flex;
			gap: 4px;
		}
	}
`;

export const SearchTools = () => {
	const [seachActive, setSearchActive] = useState<boolean>(false);
	const [filter, setFilter] = useState("");
	const debouncedFilter = useDebounce(filter, 300);
	const { data: searchResults, isLoading: isLoadingSearchResults } = useQuery(
		["products", debouncedFilter],
		() => fetchSearchResults(debouncedFilter),
		{
			enabled: Boolean(debouncedFilter),
		},
	);

	useEffect(() => {
		setSearchActive(Boolean(filter));
	}, [filter]);

	const InputRef = useRef() as MutableRefObject<HTMLInputElement>;

	const triggerSeachContainer = (event: any) => {
		if (event.target.value.length > 3) setFilter(event.target.value);
	};

	const cleanSearch = () => {
		InputRef.current.value = "";
		setFilter("");
	};

	return (
		<SearchContainer className={seachActive ? "active" : ""}>
			<SearchInputContainer>
				<HiSearch size={20}></HiSearch>
				<SearchInput
					type="text"
					name=""
					id=""
					ref={InputRef}
					placeholder="Search Movies"
					defaultValue={filter}
					onChange={triggerSeachContainer}
				/>
				<HiX onClick={cleanSearch}></HiX>
			</SearchInputContainer>
			{seachActive && (
				<SearchResults>
					{isLoadingSearchResults ? (
						<div>Loading</div>
					) : (
						<div>
							{searchResults.results.map((result: any) => (
								<MovieItem key={result.id}>
									{result.poster_path !== null ? (
										<img
											className="movie_thumbnail"
											src={process.env.REACT_APP_MOVIES_BASE_URL + "w92" + result.poster_path}
											alt={result.original_title}
										/>
									) : (
										<EmptyPicture></EmptyPicture>
									)}
									<a className="movie_information">
										<p className="movie_title">{result.original_title}</p>
										<div className="movie_details">
											<HiStar fill="gold"></HiStar>
											<span>{result.vote_average}</span>
										</div>
									</a>
								</MovieItem>
							))}
						</div>
					)}
				</SearchResults>
			)}
		</SearchContainer>
	);
};
