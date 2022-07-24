import { HiLightningBolt, HiHome, HiThumbUp, HiThumbDown } from "react-icons/hi";
import { NavigationBar, NavLinkItem } from "./layout.styles";

export const BottomNavigation = () => {
	return (
		<NavigationBar>
			<NavLinkItem to="/">
				<HiHome color="#627a7a" size={24}></HiHome>
			</NavLinkItem>
			<NavLinkItem to="/showcase">
				<HiLightningBolt color="#b6a8bd" size={24}></HiLightningBolt>
			</NavLinkItem>
			<NavLinkItem to="/wall/shame">
				<HiThumbDown color="#b6a8bd" size={24}></HiThumbDown>
			</NavLinkItem>
			<NavLinkItem to="/wall/fame">
				<HiThumbUp color="#b6a8bd" size={24}></HiThumbUp>
			</NavLinkItem>
		</NavigationBar>
	);
};
