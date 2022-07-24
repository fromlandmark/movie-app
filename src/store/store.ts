import { configureStore } from "@reduxjs/toolkit";
import tasteReducer from "../features/taste/tasteSlice";

export default configureStore({
	reducer: {
		taste: tasteReducer,
	},
});
