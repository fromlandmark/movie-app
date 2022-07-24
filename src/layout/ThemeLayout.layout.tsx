import { BottomNavigation } from "./BottomNavigation.component";
import { Main, Theme } from "./layout.styles";
import { TopBar } from "./TopBar.component";

export const ThemeLayout = ({ children }: any) => {
	return (
		<Theme>
			<TopBar />
			<Main>{children}</Main>
			<BottomNavigation />
		</Theme>
	);
};
