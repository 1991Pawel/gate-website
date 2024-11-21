import style from "./whyMeSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
import { SectionTitle } from "@/ui/components/SectionTitle/SectionTitle";

const whyMeItems = [
	{
		title: "Poprawa Samopoczucia i&nbsp;Redukcja Stresu",
		desc: "Trening wyzwoli w Tobie endorfiny, które zredukują Twój stres i poprawią nastrój, przez co poprawisz swoją równowagę psychospołeczną.",
	},
	{
		title: "Inwestycja w zdrowie",
		desc: "Trening oraz odpowiednie żywienie pomogą w zapobieganiu wielu chorobom i utrzymaniu młodszego wyglądu. Najlepsza inwestycja to inwestycja w siebie!",
	},
	{
		title: "Wymarzona sylwetka",
		desc: "Jeśli marzysz o określonych proporcjach ciała to razem ze mną, zrzucisz zbędne kilogramy, przez co poprawisz komfort swojego życia.",
	},
	{
		title: "Poprawa zakresu ruchu i&nbsp;mobilności",
		desc: "Podczas realizowania wcześniej przyjętych założeń treningowych zwiększysz swoją mobilność oraz zakres ruchu co przełoży się na większą sprawność w życiu codziennym",
	},
	{
		title: "Motywacja",
		desc: "Jest to kluczowy element, żeby zrobić pierwszy krok. Moim celem jest, aby trening i zdrowe nawyki żywieniowe stały się integralną częścią Twojego życia, a każdy kolejny powrót na salę treningową sprawiał uśmiech na Twojej twarzy.",
	},
	{
		title: "Bezpieczeństwo",
		desc: "Podczas jednostki treningowej najważniejszą kwestią jest Twoje bezpieczeństwo. Przy współpracy z trenerem minimalizujesz ryzyko wystąpienia kontuzji",
	},
];

export const WhyMeSection = () => (
	<section className={style.whyMe}>
		<Container>
			<article>
				<SectionTitle className={style.title}>korzyści współpracy</SectionTitle>
				<ul className={style.whyMeCards}>
					{whyMeItems.map(({ title, desc }) => (
						<li key={title} className={style.whyMeCardItem}>
							<div className={style.whyMeCardHeader}>
								{/* <span className={style.whyMeCardCounter}>0{index + 1}</span> */}
								<h3
									dangerouslySetInnerHTML={{ __html: title }}
									className={style.whyMeCardItemTitle}
								/>
							</div>
							<Paragraph>{desc}</Paragraph>
						</li>
					))}
				</ul>
			</article>
		</Container>
	</section>
);
