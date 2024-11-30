"use client";
import { useRouter } from "next/navigation";

import style from "./BackButton.module.css";
import BackArrow from "@/ui/svgs/back-arrow.svg";
export const BackButton = () => {
	const router = useRouter();
	return (
		<div className={style.backLink}>
			<button onClick={() => router.back()} className="mt-10 flex gap-2">
				<BackArrow className="h-6 w-6 rotate-180" />
				Wróć
			</button>
		</div>
	);
};
