import style from "./footer.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { RoundedIcon } from "@/ui/components/RoundedIcon/RoundedIcon";
import InstagramIcon from "@/ui/svgs/instagram.svg";
import FacebookIcon from "@/ui/svgs/facebook.svg";
import EnvelopIcon from "@/ui/svgs/envelop.svg";

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<h3 className={style.footerTitle}>KAMER Kamil Grodzki</h3>
				<p className={style.footerDesc}>
					<strong>Telefon:</strong> <a href="tel:+48667098271">667 098 271</a>
				</p>
				<p className={style.footerDesc}>
					<strong>Adres:</strong> ul. Topole 21, 18-106 Niewodnica Kościelna
				</p>
				<p className={style.footerDesc}>
					<strong>NIP:</strong> 5423205172
				</p>
			</Container>
		</footer>
	);
};
