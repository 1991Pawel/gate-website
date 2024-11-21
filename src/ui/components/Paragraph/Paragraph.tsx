import cls from "classnames";
import style from "./paragraph.module.css";

export const Paragraph = ({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) => {
	return <p className={cls(`${className || ""}`, style.paragraph)}>{children}</p>;
};
