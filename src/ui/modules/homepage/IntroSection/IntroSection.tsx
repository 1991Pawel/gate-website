"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import style from "./introSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Button } from "@/ui/components/Button/Button";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
export const IntroSection = () => {
	const contentWrapper = useRef<HTMLDivElement | null>(null);
	const overlay = useRef<HTMLDivElement | null>(null);
	const imageWrapper = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const runAnimation = () => {
			if (contentWrapper?.current?.children) {
				const [special, title, description, cta] = contentWrapper.current.children;
				const overlayElement = overlay.current;
				const imageElement = imageWrapper.current;

				if (overlayElement) {
					gsap.set(overlayElement, {
						autoAlpha: 1,
					});

					const overlayTimeline = gsap.timeline({
						defaults: {
							ease: "power3.inOut",
						},
					});

					overlayTimeline.fromTo(
						overlayElement,
						{ x: "0%" },
						{
							duration: 2,
							x: "-100%",
							autoAlpha: 1,
						},
					);

					const imageWrapperTimeLine = gsap.timeline({
						defaults: {
							ease: "power3.inOut",
						},
					});
					imageWrapperTimeLine.fromTo(
						imageElement,
						{ x: "-=15", autoAlpha: 0 },
						{
							duration: 1,
							x: "0%",
							autoAlpha: 1,
							delay: 0.4,
						},
					);

					const elementsTimeline = gsap.timeline({
						defaults: {
							ease: "power1.inOut",
						},
					});
					elementsTimeline.fromTo(
						[special, title, description, cta],
						{ y: "-=15", autoAlpha: 0 },
						{
							delay: 1.2,
							duration: 1,
							y: "0%",
							autoAlpha: 1,
						},
					);
				}
			}
		};
		runAnimation();
	}, [overlay, imageWrapper, contentWrapper]);
	return (
		<section className={style.intro}>
			<div ref={overlay} className={style.introOverlay} />
			<header className={style.introHeader}>
				<Container>
					<div ref={contentWrapper} className={style.introHeaderInner}>
						<h1 className={style.introSpecial}>Trener Personalny Białystok</h1>
						<span className={style.introTitle}>
							DAWID
							<br /> CIBOROWSKI
						</span>

						<Paragraph className={style.introDescription}>
							Zrób pierwszy krok na swojej drodze do&nbsp;wymarzonej sylwetki!
						</Paragraph>
						<div className={style.ctaWrapper}>
							<Button href="#kontakt" primary>
								Bezpłatna konsultacja
							</Button>
							<Button href="#o-mnie">Dowiedz się więcej</Button>
						</div>
					</div>
				</Container>
			</header>
			<div ref={imageWrapper} className={style.introImage}>
				<Image
					src="/assets/home/dawid-ciborowski-trener.png"
					alt="Dawid Ciborowski Trener Białystok"
					width={787}
					height={610}
				/>
			</div>
		</section>
	);
};
