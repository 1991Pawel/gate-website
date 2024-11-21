import style from "./footer.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { RoundedIcon } from "@/ui/components/RoundedIcon/RoundedIcon";
import InstagramIcon from "@/ui/svgs/instagram.svg";
import FacebookIcon from "@/ui/svgs/facebook.svg";
import EnvelopIcon from "@/ui/svgs/envelop.svg";

const socialLinks = [
	{
		title: "instagram",
		href: "https://www.instagram.com/ciborowski.trener/",
		icon: <InstagramIcon />,
	},
	{
		title: "facebook",
		href: "https://www.facebook.com/profile.php?id=61552549569416",
		icon: <FacebookIcon />,
	},
	{
		title: "mail",
		href: "mailto:ciborowski.trener@gmail.com",
		icon: <EnvelopIcon />,
	},
];

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<h3 className={style.footerTitle}>Dawid Ciborowski</h3>
				<p className={style.footerDesc}>Trener personalny</p>

				<ul className={style.list}>
					{socialLinks.map(({ title, href, icon }) => (
						<li className={style.listItem} key={title}>
							<a title={title} href={href}>
								<RoundedIcon icon={icon} />
							</a>
						</li>
					))}
				</ul>
				<p className={style.disclaimer}>
					© 2023. Wszelkie prawa zastrzeżone przez Dawid Ciborowski
				</p>
				<a
					title="Przejdź do Polityki prywatności"
					className={style.term}
					href="/polityka-prywatnosci.pdf"
				>
					Polityka prywatności
				</a>
			</Container>
		</footer>
	);
};
