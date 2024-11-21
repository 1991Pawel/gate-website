import style from "./modal.module.css";

export const Modal = ({ children }: React.PropsWithChildren) => (
	<>
		<div className={style.overlay}></div>
		<div className={style.modal}>{children}</div>
	</>
);
