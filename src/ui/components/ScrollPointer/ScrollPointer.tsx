import cls from "classnames";
import style from "./scrollPointer.module.css";

export const ScrollPointer = ({ className, id }: { className?: string; id: string }) => {
	return <span id={id} className={cls(`${className || ""}`, style.scrollPointer)}></span>;
};
