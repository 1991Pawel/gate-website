import Link from "next/link";
import cls from "classnames";
import style from "./navigation.module.css";
import Logo from "@/ui/svgs/logo.svg";

export const Navigation = ({
	setOpenNav,
	isActive,
}: {
	isActive: boolean;
	setOpenNav: (x: boolean) => void;
}) => {
	const navClass = {
		base: cls(style.navigation),
		active: cls(style.navigation, style.active),
	};
	return (
		<nav className={isActive ? navClass.active : navClass.base}>
			<div className={style.navigationWrapper}>
				bramypodlaskie.pl
				<ul className={style.navigationList}>
					<li className={style.logoWrapper}>
						<Link title="Główna strona" href={"/"}>
							<Logo />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
