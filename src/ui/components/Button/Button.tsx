import type { PropsWithChildren, ButtonHTMLAttributes } from "react";
import cls from "classnames";
import style from "./button.module.css";

type ButtonProps = PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement> & {
		type?: "submit" | "button" | "reset";
		primary?: boolean;
		href?: string;
		onClick?: () => void;
	}
>;

export const Button = ({ href, children, primary, onClick, type, ...rest }: ButtonProps) => {
	const buttonClass = `${primary ? cls(style.button, style.buttonPrimary) : style.button}`;

	return href ? (
		<a href={href} className={buttonClass}>
			{children}
		</a>
	) : (
		<button type={type} onClick={onClick} className={buttonClass} {...rest}>
			{children}
		</button>
	);
};
