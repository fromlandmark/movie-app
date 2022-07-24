import { TopBarElement } from "./layout.styles";

export const TopBar = () => {
	return (
		<TopBarElement>
			<a href="/">
				<img className="logo" src="../assets/logo.png" alt="" />
			</a>
		</TopBarElement>
	);
};
