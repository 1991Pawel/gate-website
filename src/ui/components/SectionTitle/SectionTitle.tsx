import cls from "classnames";
import style from "./sectionTitle.module.css";

export const SectionTitle = ({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) => {
	return <h2 className={cls(`${className || ""}`, style.title)}>{children}</h2>;
};
