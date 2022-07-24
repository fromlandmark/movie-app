import { createSlice } from "@reduxjs/toolkit";

type Taste = {
	likes: any[];
	dislikes: any[];
};

export const tasteSlice = createSlice({
	name: "taste",
	initialState: {
		value: <Taste>{
			likes: [],
			dislikes: [],
		},
	},
	reducers: {
		like: (state, action) => {
			if (state.value.likes.some((movie: any) => movie.id === action.payload.id)) return;
			state.value.likes.push(action.payload);
		},
		dislike: (state, action) => {
			if (state.value.dislikes.some((movie: any) => movie.id === action.payload.id)) return;
			state.value.dislikes.push(action.payload);
		},
		cleanLikes: (state) => {
			state.value.likes = [];
		},
		cleanDislikes: (state) => {
			state.value.dislikes = [];
		},
	},
});

export const moviesDate = (state: any) => state.taste.value;

export const { like, dislike, cleanLikes, cleanDislikes } = tasteSlice.actions;
export default tasteSlice.reducer;
