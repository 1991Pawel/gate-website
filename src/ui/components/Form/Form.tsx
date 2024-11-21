"use client";
import { type SyntheticEvent, useState } from "react";
import { sendContactForm } from "../../../services";
import style from "./form.module.css";
import { Modal } from "@/ui/components/Modal/Modal";
import { Input } from "@/ui/components/Input/Input";
import { Textarea } from "@/ui/components/Textarea/Textarea";
import { Button } from "@/ui/components/Button/Button";

interface Form {
	name: string;
	type: string;
}
interface EmailData {
	email: string;
	message: string;
	subject: string;
	name: string;
	phone: string;
}

const initialValue = {
	email: "",
	message: "",
	subject: "Wiadomość z formularza",
	name: "",
	phone: "",
};
export const Form = () => {
	const [values, setValues] = useState<EmailData>({
		email: "",
		phone: "",
		name: "",
		message: "",
		subject: "Wiadomość z formularza",
	});
	const [showModal, setShowModal] = useState(false);

	const resetForm = () => setValues(initialValue);
	const onSuccess = () => {
		setShowModal(true);
		resetForm();
	};
	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		const payload = {
			name: values.name,
			email: values.email,
			subject: values.subject,
			message: values.message,
			phone: values.phone,
		};
		await sendContactForm(payload, onSuccess);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<form autoComplete="off" onSubmit={(event) => void onSubmit(event)} className={style.form}>
			<Input
				value={values.name}
				handleChange={handleChange}
				placeholder="Jan"
				label="Imię"
				name="name"
				type="text"
			/>
			<Input
				value={values.email}
				handleChange={handleChange}
				label="Email"
				name="email"
				type="email"
				placeholder="jan.kowalski@gmail.com"
			/>
			<Input
				value={values.phone}
				handleChange={handleChange}
				label="Telefon*"
				name="phone"
				type="tel"
				placeholder="501 502 503"
				required={false}
			/>
			<Textarea
				value={values.message}
				handleChange={handleChange}
				label="Wiadomość"
				name="message"
			/>
			<Button primary>Wyślij</Button>
			{showModal && (
				<Modal>
					<div className={style.content}>
						<h2>Dziękuję za Kontakt!</h2>
						<p>
							Serdecznie dziękuję za wysłanie wiadomości. Cieszę się, że zdecydowałeś się
							skontaktować ze mną.
						</p>
						<p>Odpiszę najszybciej, jak to tylko możliwe.</p>

						<Button primary type="button" onClick={() => setShowModal(false)}>
							Zamknij
						</Button>
					</div>
				</Modal>
			)}
		</form>
	);
};
