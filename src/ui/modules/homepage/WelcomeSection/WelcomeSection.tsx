import style from "./welcomeSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
import { ScrollPointer } from "@/ui/components/ScrollPointer/ScrollPointer";

export const WelcomeSection = () => (
	<section className={style.welcome}>
		<ScrollPointer id="o-mnie" className={style.pointer} />
		<Container>
			<h2 className={style.welcomeContentTitle}>Cześć!</h2>
			<article className={style.weolcomeInner}>
				<div className={style.welcomeContent}>
					<Paragraph className={style.specialParagraph}>
						Mam na imię Dawid i&nbsp;jestem certyfikowanym Instruktorem Sportu ze specjalizacją
						Trener Personalny z&nbsp;Białegostoku.
					</Paragraph>
					<Paragraph>
						Z wykształcenia jestem Inżynierem budownictwa, ale nie zajmuję się budowaniem mostów
						tylko pomagam ludziom budować ich wymarzone sylwetki.
					</Paragraph>
				</div>
				<Paragraph>
					Moja przygoda z siłownią rozpoczęła się kiedy byłem nastolatkiem i trwa do dzisiaj.
					Początkowo było to hobby, które z biegiem lat przerodziło się w pasje i stało się częścią
					życia. Po niemalże 15 latach praktyki oraz poszerzaniu wiedzy merytorycznej postanowiłem
					zacząć dzielić się swoim doświadczeniem z innymi osobami, które chcą coś zmienić w swoim
					życiu.
				</Paragraph>
			</article>
		</Container>
	</section>
);
