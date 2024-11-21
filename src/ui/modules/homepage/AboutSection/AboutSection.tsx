import Image from "next/image";
import style from "./aboutSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
import Arrow from "@/ui/svgs/disclaimer-arrow.svg";

export const AboutSection = () => (
	<section className={style.about}>
		<div className={style.aboutContent}>
			<Container>
				<Paragraph>
					Jako trener personalny stawiam na ciągły rozwój a moim celem jest pozytywna zmiana w życiu
					osoby, z którą współpracuje zarówno w aspekcie fizycznym, zdrowotnym jak i mentalnym.
				</Paragraph>
				<Paragraph>
					Podczas trwania naszej współpracy osiągniecie Twojego celu jest moim priorytetem.
					Przy&nbsp;pomocy dostępnego sprzętu na&nbsp;siłowni CityFit w&nbsp;Białymstoku, nauczę Cię
					poprawnie wykonywać ćwiczenia, dzięki którym efektywnie zmienimy wygląd Twojej sylwetki.
					Zapraszam na&nbsp;treningi personalne!
				</Paragraph>
				<div className={style.disclaimer}>
					<span>
						<Arrow />
						Widzimy się
					</span>
					na treningu!
				</div>
			</Container>
		</div>
		<div className={style.aboutGallery}>
			<Image src="/assets/home/about-01.jpg" width={380} height={680} alt="Dawid Ciborowski" />
			<Image src="/assets/home/about-02.jpg" width={380} height={680} alt="Dawid Ciborowski" />
		</div>
	</section>
);
