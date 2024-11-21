import Link from "next/link";
import cls from "classnames";
import style from "./navigation.module.css";
import Logo from "@/ui/svgs/logo.svg";

const navLinks = [
	{
		title: "Oferta",
		href: "/#oferta",
	},

	{
		title: "Kontakt",
		href: "/#kontakt",
	},
];

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
			<ul className={style.navigationList}>
				<li className={style.logoWrapper}>
					<Link title="Główna strona" onClick={() => setOpenNav(false)} href={"/"}>
						<Logo />
					</Link>
				</li>
				{navLinks.map(({ href, title }) => (
					<li key={title} className={style.navigationListItem}>
						<Link title={title} onClick={() => setOpenNav(false)} href={href}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
