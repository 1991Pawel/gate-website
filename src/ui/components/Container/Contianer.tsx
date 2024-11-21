import style from "./container.module.css";
export const Container = ({ children }: React.PropsWithChildren) => {
	return <div className={style.container}>{children}</div>;
};
