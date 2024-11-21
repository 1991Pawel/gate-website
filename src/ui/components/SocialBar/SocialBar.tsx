import style from "./socialBar.module.css";

import InstagramIcon from "@/ui/svgs/instagram.svg";
import FacebookIcon from "@/ui/svgs/facebook.svg";
import EnvelopIcon from "@/ui/svgs/envelop.svg";
import WatchIcon from "@/ui/svgs/watch.svg";
import { RoundedIcon } from "@/ui/components/RoundedIcon/RoundedIcon";
import { Container } from "@/ui/components//Container/Contianer";

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

export const SocialBar = () => {
	return (
		<div className={style.socialBarWrapper}>
			<Container>
				<div className={style.wrapper}>
					<div className={style.socialBarTime}>
						<WatchIcon />
						<p className={style.desc}>Pon-Niedz: 6.00-23.00</p>
					</div>
					<ul className={style.socialBar}>
						{socialLinks.map(({ href, title, icon }) => (
							<li key={title}>
								<a target="_blank" title={title} href={href}>
									<RoundedIcon icon={icon} />
								</a>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</div>
	);
};
