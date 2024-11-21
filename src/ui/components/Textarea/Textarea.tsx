import React from "react";
import style from "./textarea.module.css";

interface TextareaProps {
	name: string;
	label: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ value, name, handleChange, label, ...res }) => {
	return (
		<div className={style.textareaWrapper}>
			<label htmlFor={name}>{label}</label>
			<textarea
				value={value}
				required
				onChange={(e) => handleChange(e)}
				name={name}
				id={name}
				{...res}
			/>
		</div>
	);
};
