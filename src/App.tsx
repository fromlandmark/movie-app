import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home.page";
import { WallOfShamePage } from "./pages/WallOfShame.page";
import { ShowcasePage } from "./pages/Showcase.page";
import { WallOfFamePage } from "./pages/WallOfFame.page";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/wall/shame" element={<WallOfShamePage />}></Route>
				<Route path="/wall/fame" element={<WallOfFamePage />}></Route>
				<Route path="/showcase" element={<ShowcasePage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
