import style from "./offersSection.module.css";
import OfferIcon01 from "@/ui/svgs/offer-icon-01.svg";
import OfferIcon02 from "@/ui/svgs/offer-icon-02.svg";
import OfferIcon03 from "@/ui/svgs/offer-icon-03.svg";
import OfferIcon04 from "@/ui/svgs/offer-icon-04.svg";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
import { SectionTitle } from "@/ui/components/SectionTitle/SectionTitle";
import { ScrollPointer } from "@/ui/components/ScrollPointer/ScrollPointer";

const offersItems = [
	{
		title: "Trening personalny",
		desc: "Jako certyfikowany trener personalny tworzę indywidualny plan treningowy uwzględniający Twoje cele, poziom zaawansowania, wiek oraz ogólną kondycję fizyczną. Dzięki najnowocześniejszym metodom treningowym oraz pełnym wsparciem z mojej strony razem przekroczymy wszelkie bariery i osiągniemy Twoje cele!",
		icon: <OfferIcon01 />,
	},
	{
		title: "Trening w parze",
		desc: `Chcesz zacząć trenować z bliską Ci osobą, a może z grupą przyjaciół chcecie spędzić aktywnie wspólny czas? Żaden problem. Moim zadaniem będzie stworzenie efektywnego i kreatywnego planu, który zbliży Was do upragnionego celu. Zaletą tego typu treningu jest oszczędność pieniędzy oraz wzajemna motywacja.`,
		icon: <OfferIcon02 />,
	},
	{
		title: "Trening funkcjonalny",
		desc: `Jeśli Twoim celem jest usprawnienie czynności wykonywanych w życiu codziennym. Ten rodzaj treningu jest świetnym rozwiązaniem. Dzięki treningu funkcjonalnemu Twoje ciało stanie się w pełni aktywne przy jednoczesnym wzmocnieniu wszystkich grup mięśniowych.`,
		icon: <OfferIcon03 />,
	},
	{
		title: "Spersonalizowany plan treningowy",
		desc: `Wykonywanie poszczególnych ćwiczeń masz już  opanowane, ale Twój plan nie daje rezultatów? Po przeprowadzonej konsultacji i dogłębnej analizie ankiety, w której udzielisz szczerej odpowiedzi na szereg pytań. Stworzę plan treningowy z podziałem na poszczególne fazy w celu przygotowania maksymalnego wytrenowania w danym okresie.`,
		icon: <OfferIcon04 />,
	},
];

export const OffersSection = () => (
	<section className={style.offers}>
		<ScrollPointer id="oferta" className={style.pointer} />
		<Container>
			<article>
				<SectionTitle className={style.offersTitle}>OFERTA</SectionTitle>
				<ul className={style.offerCards}>
					{offersItems.map(({ title, icon, desc }) => (
						<li key={title} className={style.offerCardItem}>
							<div className={style.offerCardHeader}>
								<span className={style.offerCardIcon}>{icon}</span>
								<h3 className={style.offerCardItemTitle}>{title}</h3>
							</div>
							<Paragraph>{desc}</Paragraph>
						</li>
					))}
				</ul>
			</article>
		</Container>
	</section>
);
