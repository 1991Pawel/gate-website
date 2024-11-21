import style from "./roundedIcon.module.css";

export const RoundedIcon = ({ icon }: { icon: JSX.Element }) => {
	return <div className={style.icon}>{icon}</div>;
};
