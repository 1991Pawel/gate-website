import style from "./formSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
import { Form } from "@/ui/components/Form/Form";
export const FormSection = () => (
	<section className={style.formSection}>
		<Container>
			<div className={style.formSectionInner}>
				<div className={style.formContent}>
					<h2>
						Bezpłatna <br />
						konsultacja
					</h2>
					<Paragraph>
						Wypełnij formularz tutaj, aby skontaktować się bezpośrednio z wszelkimi pytaniami, jakie
						mogą Cię nurtować, umówić się na konsultację. Czekam na wiadomość od Ciebie!
					</Paragraph>
				</div>
				<Form />
			</div>
		</Container>
	</section>
);
