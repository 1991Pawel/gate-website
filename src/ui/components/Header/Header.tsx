import Link from "next/link";
import style from "./header.module.css";
import Logo from "@/ui/svgs/logo.svg";
import { Container } from "@/ui/components/Container/Contianer";
import PhoneIcon from "@/ui/svgs/phone.svg";

export const Header = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.headerInner}>
					<Link title="Strona główna" href="/">
						<span className={style.logoContainer}>
							<Logo />
						</span>
						<span className={style.logoSlogan}> Bramypodlasie.pl</span>
					</Link>
					<div className={style.phoneLink}>
						<PhoneIcon width="24" height="24" />
						<a href="tel:+48667098271">667 098 271</a>
					</div>
				</div>
			</Container>
		</header>
	);
};
