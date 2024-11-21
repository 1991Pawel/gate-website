import { useState } from "react";
import Link from "next/link";
import style from "./header.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Hamburger } from "@/ui/components/Hamburger/Hamburger";
import { Navigation } from "@/ui/components/Navigation/Navigation";
import Logo from "@/ui/svgs/logo.svg";

export const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<header className={style.header}>
			<Container>
				<div className={style.headerInner}>
					<Link title="Strona główna" href="/">
						<div className={style.logoContainer}>{/* <Logo /> */}</div>
					</Link>
					<Navigation setOpenNav={setOpenNav} isActive={openNav} />
					<Hamburger active={openNav} setOpenNav={setOpenNav} />
				</div>
			</Container>
		</header>
	);
};
